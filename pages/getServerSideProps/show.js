import Link from "next/link";

const Show = ({ show }) => (
  <>
    <h1>getServerSideProps: basic page</h1>
    <p>This page uses getServerSideProps() to fetch a TV show from an API.</p>
    <p>
      getServerSideProps() never runs on the client.
      <br />
      When navigating client-side, getServerSideProps() runs inside a Netlify
      Function. The resulting JSON data is used to render this page.
      <br />
      When requesting this page directly, the entire page is rendered
      server-side by a Netlify Function.
    </p>
    <a
      href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getServerSideProps/show.js"
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

export async function getServerSideProps() {
  // Get the show
  const res = await fetch("https://api.tvmaze.com/shows/263");
  const show = await res.json();

  return { props: { show } };
}

export default Show;
