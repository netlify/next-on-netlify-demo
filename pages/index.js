import Link from "next/link";

const Index = () => (
  <>
    <div style={{ textAlign: "center", marginTop: 20 }}>
      <img src="/next-on-netlify.png" alt="NextJS on Netlify Banner" />
    </div>
    <div style={{ textAlign: "center" }}>
      <a href="https://www.npmjs.com/package/next-on-netlify" rel="nofollow">
        <img
          src="https://img.shields.io/npm/v/next-on-netlify"
          alt="NPM version"
        />
      </a>{" "}
      <a
        href="https://github.com/netlify/next-on-netlify/blob/master/LICENSE"
        rel="nofollow"
      >
        <img
          src="https://img.shields.io/npm/l/next-on-netlify"
          alt="MIT license"
        />
      </a>{" "}
      <a href="https://www.npmjs.com/package/next-on-netlify" rel="nofollow">
        <img
          src="https://img.shields.io/npm/dt/next-on-netlify"
          alt="NPM downloads"
        />
      </a>{" "}
      <a href="https://www.cypress.io/" rel="nofollow">
        <img
          src="https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg"
          alt="Tested with Cypress.io"
        />
      </a>
    </div>

    <h1>NextJS on Netlify: Server-Side Rendering Made Easy</h1>
    <p>
      This is a demo of a NextJS application with Server-Side Rendering (SSR).
      <br />
      It is hosted on Netlify.
      <br />
      Server-side rendering is handled by Netlify Functions.
      <br />
      Minimal configuration is required.
      <br />
      Everything is handled by the{" "}
      <a href="https://www.npmjs.com/package/next-on-netlify">
        next-on-netlify
      </a>{" "}
      npm package.
    </p>

    <hr />

    <h1>Examples</h1>
    <h2>getInitialProps</h2>
    <ul>
      <li>
        <Link href="/getInitialProps/show">
          <a>basic page</a>
        </Link>
      </li>
      <li>
        <Link href="/getInitialProps/[id]" as="/getInitialProps/6508">
          <a>with dynamic routing</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getInitialProps/[...slug]"
          as="/getInitialProps/83/catch/all/routing"
        >
          <a>with catch-all routing</a>
        </Link>
      </li>
    </ul>

    <h2>getServerSideProps</h2>
    <ul>
      <li>
        <Link href="/getServerSideProps/show">
          <a>basic page</a>
        </Link>
      </li>
      <li>
        <Link href="/getServerSideProps/[id]" as="/getServerSideProps/305">
          <a>with dynamic routing</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getServerSideProps/[...slug]"
          as="/getServerSideProps/590/catch/all/routing"
        >
          <a>with catch-all routing</a>
        </Link>
      </li>
    </ul>

    <h2>getStaticProps</h2>
    <ul>
      <li>
        <Link href="/getStaticProps/show">
          <a>basic page</a>
        </Link>
      </li>
      <li>
        <Link href="/getStaticProps/[id]" as="/getStaticProps/66">
          <a>with dynamic routing</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getStaticProps/[...slug]"
          as="/getStaticProps/1719/mr/bean"
        >
          <a>with catch-all routing</a>
        </Link>
      </li>
      <li>
        <Link
          href="/getStaticProps/withFallback/[id]"
          as="/getStaticProps/withFallback/5"
        >
          <a>with fallback: true</a>
        </Link>
      </li>
    </ul>

    <h2>API Routes</h2>
    <ul>
      <li>
        <a href="/api/show">basic endpoint</a>
      </li>
      <li>
        <a href="/api/1121">dynamic endpoint</a>
      </li>
      <li>
        <a href="/api/175/catch/all">catch-all endpoint</a>
      </li>
      <li>
        <a href="/api/redirect">with redirect header</a>
      </li>
      <li>
        <a href="/api/xml">with content-type XML</a>
      </li>
      <li>
        <a href="/api/image">with image response</a> (
        <a href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/image.js">
          code
        </a>
        )
      </li>
    </ul>

    <h2>Preview Mode</h2>
    <ul>
      <li>
        <a href="/api/enterPreview/6906">enter preview mode</a>
      </li>
      <li>
        <Link href="/previewMode/[id]" as="/previewMode/169">
          <a>page with preview mode</a>
        </Link>
      </li>
      <li>
        <a href="/api/exitPreview/169">exit preview mode</a>
      </li>
    </ul>

    <hr />

    <h1>Want to Learn More?</h1>
    <p>
      Check out this demo's{" "}
      <a href="https://github.com/FinnWoelm/next-on-netlify-demo">
        source code on GitHub
      </a>
      .
      <br />
      Or check out the{" "}
      <a href="https://www.npmjs.com/package/next-on-netlify">
        next-on-netlify npm package
      </a>
      .
    </p>
  </>
);

export default Index;
