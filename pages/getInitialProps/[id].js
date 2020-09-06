import Error from "next/error";
import Link from "next/link";

const DynamicShow = ({ errorCode, show }) => {
  // If show was not found, render 404 page
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  // Otherwise, render show
  return (
    <>
      <h1>getInitialProps: with dynamic routing</h1>
      <p>
        This page uses getInitialProps() to fetch a TV show from an API.
        <br />
        The ID is set in the URL: /getInitialProps/:id
      </p>
      <p>You can change the ID to any number between 1-10000. Try it!</p>
      <a
        href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getInitialProps/[id].js"
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

DynamicShow.getInitialProps = async ({ query }) => {
  // Get the ID to render
  const { id } = query;

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  // Set error code if show could not be found
  const errorCode = res.status > 200 ? res.status : false;

  return { errorCode, show };
};

export default DynamicShow;
