import Link from "next/link";

const Show = ({ show }) => (
  <>
    <h1>getStaticProps: basic page</h1>
    <p>This page uses getStaticProps() to fetch a TV show from an API.</p>
    <p>
      The page and the page's data are pre-rendered at build time. Both are
      served from Netlify's super fast CDN.
      <br />
      When navigating client-side, the page's JSON data is loaded.
      <br />
      When requesting this page directly, the pre-rendered page is loaded.
    </p>
    <a
      href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getStaticProps/show.js"
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

export async function getStaticProps() {
  // Get the show
  const res = await fetch("https://api.tvmaze.com/shows/151");
  const show = await res.json();

  return { props: { show } };
}

export default Show;
