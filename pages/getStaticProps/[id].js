import Link from "next/link";

const DynamicShow = ({ show }) => (
  <>
    <h1>getStaticProps: with dynamic routing</h1>
    <p>
      This page uses getStaticProps() to fetch a TV show from an API.
      <br />
      The ID is set in the URL: /getStaticProps/:id
    </p>
    <p>
      Because the page uses dynamic routing, the list of paths are pre-defined
      in getStaticPaths.
      <br />
      For this page, you can change the ID to any number between 1-100. Try it!
    </p>
    <a
      href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getStaticProps/[id].js"
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

export async function getStaticPaths() {
  // Define the paths we want to prerender
  const paths = [];
  for (let id = 1; id <= 100; id++) {
    paths.push({ params: { id: String(id) } });
  }

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get the ID to render
  const { id } = params;

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { props: { show } };
}

export default DynamicShow;
