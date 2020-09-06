export default async (req, res) => {
  // Get the ID to show
  const { query } = req;
  const { slug } = query;
  const id = slug[0];

  // Get the data
  const fetchRes = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await fetchRes.json();

  // Show could not be found
  if (fetchRes.status > 200) {
    res.status(404);
    res.json({
      error: "Show could not be found :(",
    });
    return;
  }

  res.status(200);
  res.json({
    title: "API route: catch-all endpoint",
    description:
      "This endpoint fetches a TV show from an external API. " +
      "It is a catch-all endpoint. " +
      "The first URL parameter determines the ID of the show to fetch. " +
      "You can change the URL to anything else, such as /api/1871/whatever/path/you/want",
    slug: slug,
    viewCode:
      "https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/[...slug].js",
    goHome: "https://next-on.netlify.app",
    show: {
      id: show.id,
      name: show.name,
      type: show.type,
      language: show.language,
      status: show.status,
      premiered: show.premiered,
      officialSite: show.officialSite,
      averageRating: show.rating?.average,
    },
  });
};
