export default (req, res) => {
  // Get the ID to redirect to
  const { query } = req;
  const { id } = query;

  // Clear the preview mode cookies.
  // This function accepts no arguments.
  res.clearPreviewData();

  // Redirect to a page with support for preview mode
  res.writeHead(307, { Location: `/previewMode/${id}` });
  res.end();
};
