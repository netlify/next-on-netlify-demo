export default async (req, res) => {
  // Get the ID to show
  const { query } = req;
  const { id } = query;

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
    title: "API route: dynamic endpoint",
    description:
      "This endpoint fetches a TV show from an external API. " +
      "The ID is set in the URL: /api/:id. " +
      "You can change the ID to any number between 1-10000. Try it!",
    viewCode:
      "https://github.com/FinnWoelm/next-on-netlify-demo/tree/master/pages/api/[id].js",
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
