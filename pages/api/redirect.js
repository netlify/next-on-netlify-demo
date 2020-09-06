export default (req, res) => {
  res.writeHead(307, { Location: "/you-have-been-redirected" });
  res.end();
};
