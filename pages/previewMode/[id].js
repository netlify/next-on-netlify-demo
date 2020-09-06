import Error from "next/error";
import Link from "next/link";

const DynamicShow = ({ errorCode, object, preview }) => {
  // If object was not found, render 404 page
  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <>
      <h1>Preview Mode: page with preview mode</h1>
      <p>
        This page uses getServerSideProps() to fetch either a TV show or a TV
        actor depending on whether preview mode is enabled.
        <br />
        The ID is set in the URL: /previewMode/:id
      </p>
      <p>You can change the ID to any number between 1-10000. Try it!</p>
      <p>
        <a
          href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/previewMode/[id].js"
          target="_blank"
        >
          View code for this page GitHub
        </a>
      </p>
      <p>
        <a
          href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/enterPreview/[id].js"
          target="_blank"
        >
          View code for 'enter' API endpoint on GitHub
        </a>
      </p>
      <p>
        <a
          href="https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/exitPreview/[id].js"
          target="_blank"
        >
          View code for 'exit' API endpoint on GitHub
        </a>
      </p>

      <hr />

      {preview ? (
        <>
          <p>
            <b>You are currently in preview mode.</b>{" "}
            <a href={`/api/exitPreview/${object.id}`}>Exit preview mode.</a>
          </p>
          <h2>
            Actor #{object.id}: {object.name}
          </h2>
          <a
            href={`https://api.tvmaze.com/people/${object.id}`}
            target="_blank"
          >
            https://api.tvmaze.com/people/{object.id}
          </a>

          <p>
            Country: {object.country?.name} <br />
            Gender: {object.gender} <br />
            Timezone: {object.country?.timezone} <br />
          </p>
        </>
      ) : (
        <>
          <p>
            <b>You are currently not in preview mode.</b>{" "}
            <a href={`/api/enterPreview/${object.id}`}>Enter preview mode.</a>
          </p>
          <h2>
            Show #{object.id}: {object.name}
          </h2>
          <a href={`https://api.tvmaze.com/shows/${object.id}`} target="_blank">
            https://api.tvmaze.com/shows/{object.id}
          </a>

          <p>
            Type: {object.type} <br />
            Language: {object.language} <br />
            Status: {object.status} <br />
            Premiered: {object.premiered} <br />
            Official Site: {object.officialSite} <br />
            Rating (average): {object.rating?.average}
          </p>
        </>
      )}

      <hr />

      <Link href="/">
        <a>Go back home</a>
      </Link>
    </>
  );
};

export async function getServerSideProps({ params, preview }) {
  // Get the ID to render
  const { id } = params;

  // Set the resource to fetch, depending on whether preview mode is active
  const resource = preview ? "people" : "shows";

  // Get the data
  const res = await fetch(`https://api.tvmaze.com/${resource}/${id}`);
  const object = await res.json();

  // Set error code if object could not be found
  const errorCode = res.status > 200 ? res.status : false;

  return { props: { errorCode, object, preview: Boolean(preview) } };
}

export default DynamicShow;
