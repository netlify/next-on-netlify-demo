import Error from "next/error";
import Link from "next/link";
import { useRouter } from "next/router";

const DynamicShow = ({ errorCode, show }) => {
  const router = useRouter();

  // On Netlify, isFallback is NEVER true. Pages for any undefined paths are
  // always server-side-rendered.
  // See: https://github.com/FinnWoelm/next-on-netlify#fallbacks-for-pages-with-getstaticpaths
  if (router.isFallback) {
    return <div>Loading... (This only renders when using next dev)</div>;
  }

  // If show was not found, render 404 page
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <h1>getStaticProps: with fallback: true</h1>
      <p>
        This page uses getStaticProps() to fetch a TV show from an API.
        <br />
        The ID is set in the URL: /getStaticProps/withFallback/:id
      </p>
      <p>
        The page uses dynamic routing and some paths are pre-defined in
        getStaticPaths (IDs 1-10).
        <br />
        If you request one of those pages, you will see the pre-rendered HTML
        page.
        <br />
        If you load this page with any other ID (e.g., 32), the page will be
        rendered server-side by a Netlify Function.
      </p>
      <a
        href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getStaticProps/withFallback/[id].js"
        target="_blank"
      >
        View code on GitHub
      </a>

      <hr />

      <h2>
        Show #{show.id}: {show.name}
      </h2>
      <a href={`https://api.tvmaze.com/shows/${show.id}`} target="_blank">
        https://api.tvmaze.com/shows/{show.id}
      </a>

      <p>
        Type: {show.type} <br />
        Language: {show.language} <br />
        Status: {show.status} <br />
        Premiered: {show.premiered} <br />
        Official Site: {show.officialSite} <br />
        Rating (average): {show.rating?.average}
      </p>

      <hr />

      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export async function getStaticPaths() {
  // Define the paths we want to prerender
  const paths = [];
  for (let id = 1; id <= 10; id++) {
    paths.push({ params: { id: String(id) } });
  }

  // We'll pre-render only these paths at build time.
  // { fallback: true } means other routes will be server-side rendered.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // Get the ID to render
  const { id } = params;

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // Set error code if show could not be found
  const errorCode = res.status > 200 ? res.status : false;

  return { props: { errorCode, show } };
}

export default DynamicShow;
