export default (req, res) => {
  res.status(200);
  res.setHeader("Content-Type", "application/xml");
  res.send(
    `<?xml version="1.0" encoding="UTF-8"?>
    <root>
      <title>API route: with content-type XML</title>
      <description>API endpoints are handled by Netlify Functions. This one returns XML.</description>
      <view_code>https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/xml.js</view_code>
      <go_home>https://next-on.netlify.app</go_home>
    </root>`
  );
};
