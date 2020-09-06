import Link from "next/link";

const RedirectionTarget = (props) => (
  <div>
    <h1>You have been redirected!</h1>
    <p>The API endpoint redirected you to this static page.</p>
    <p>
      <a
        href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/redirect.js"
        target="_blank"
      >
        View code for API endpoint on GitHub
      </a>
    </p>
    <p>
      <a href="/api/redirect">Visit API endpoint with redirect header again</a>
    </p>

    <hr />

    <Link href="/">
      <a>Go back home</a>
    </Link>
  </div>
);

export default RedirectionTarget;
