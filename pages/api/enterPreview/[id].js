export default (req, res) => {
  // Get the ID to redirect to
  const { query } = req;
  const { id } = query;

  // Enable Preview Mode by setting preview mode cookies
  res.setPreviewData({});

  // Redirect to a page with support for preview mode
  res.writeHead(307, { Location: `/previewMode/${id}` });
  res.end();
};
