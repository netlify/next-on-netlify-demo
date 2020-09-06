import Link from "next/link";

const Show = ({ show }) => (
  <>
    <h1>getInitialProps: basic page</h1>
    <p>This page uses getInitialProps() to fetch a TV show from an API.</p>
    <p>
      When navigating client-side, getInitialProps() runs on the client.
      <br />
      When requesting this page directly, the page is rendered server-side by a
      Netlify Function.
    </p>
    <a
      href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getInitialProps/show.js"
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

Show.getInitialProps = async () => {
  // Get the show
  const res = await fetch("https://api.tvmaze.com/shows/768");
  const show = await res.json();

  return { show };
};

export default Show;
