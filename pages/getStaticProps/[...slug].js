import Link from "next/link";

const CatchAllShow = ({ show, slug }) => (
  <>
    <h1>getStaticProps: with catch-all routing</h1>
    <p>
      This page uses getStaticProps() to fetch a TV show from an API.
      <br />
      It uses catch-all routing.
    </p>
    <p>
      Because the page uses catch-all routing, the list of paths are pre-defined
      in getStaticPaths.
      <br />
      For this page, you can choose between one of the following pre-defined
      paths:
    </p>
    <ul>
      <li>
        <Link
          href="/getStaticProps/[...slug]"
          as="/getStaticProps/1719/mr/bean"
        >
          <a>/getStaticProps/1719/mr/bean</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getStaticProps/[...slug]"
          as="/getStaticProps/143/silicon/valley"
        >
          <a>/getStaticProps/143/silicon/valley</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getStaticProps/[...slug]"
          as="/getStaticProps/490/star/trek"
        >
          <a>/getStaticProps/490/star/trek</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/[...slug]" as="/getStaticProps/431/friends">
          <a>/getStaticProps/431/friends</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getStaticProps/[...slug]"
          as="/getStaticProps/361/saturday/night/live"
        >
          <a>/getStaticProps/361/saturday/night/live</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getStaticProps/[...slug]"
          as="/getStaticProps/6544/sesame/street"
        >
          <a>/getStaticProps/6544/sesame/street</a>
        </Link>
      </li>
    </ul>
    <a
      href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/getStaticProps/[...slug].js"
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
  const paths = [
    { params: { slug: ["1719", "mr", "bean"] } },
    { params: { slug: ["143", "silicon", "valley"] } },
    { params: { slug: ["490", "star", "trek"] } },
    { params: { slug: ["431", "friends"] } },
    { params: { slug: ["361", "saturday", "night", "live"] } },
    { params: { slug: ["6544", "sesame", "street"] } },
  ];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Get the ID to render
  const { slug } = params;
  const id = slug[0];

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { props: { show, slug } };
}

export default CatchAllShow;
