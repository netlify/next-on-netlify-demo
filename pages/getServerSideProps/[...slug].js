import Error from "next/error";
import Link from "next/link";

const CatchAllShow = ({ errorCode, show, slug }) => {
  // If show was not found, render 404 page
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <h1>getServerSideProps: with catch-all routing</h1>
      <p>
        This page uses getServerSideProps() to fetch a TV show from an API.
        <br />
        It uses catch-all routing.
      </p>
      <p>
        URL parameters are made available in getServerSideProps:
        <br />
        {slug.map((item, index) => (
          <span key={index}>
            [{index}]: {item}
            <br />
          </span>
        ))}
      </p>
      <p>The first URL parameter determines the ID of the TV show to fetch.</p>
      <p>
        You can change the URL to anything else, such as
        /getServerSideProps/112/whatever/path/you/want. Try it!
      </p>
      <a
        href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getServerSideProps/[...slug].js"
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

export async function getServerSideProps({ params }) {
  // Get the ID to render
  const { slug } = params;
  const id = slug[0];

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // Set error code if show could not be found
  const errorCode = res.status > 200 ? res.status : false;

  return { props: { errorCode, show, slug } };
}

export default CatchAllShow;
