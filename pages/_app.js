/*******************************************************************************
 * NOTE: You do not need a custom _app.js file to use next-on-netlify. I just
 *       wanted to add some CSS, so that the demo looks a little prettier :)
 ******************************************************************************/

import "../styles.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
