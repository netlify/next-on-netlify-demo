export default (req, res) => {
  res.status(200);
  res.json({
    title: "API route: basic endpoint",
    description:
      "API endpoints are handled by Netlify Functions. " +
      "You can run all sorts of code and return all sorts of responses. " +
      "This one simply returns some JSON.",
    viewCode:
      "https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/show.js",
    goHome: "https://next-on.netlify.app",
  });
};
