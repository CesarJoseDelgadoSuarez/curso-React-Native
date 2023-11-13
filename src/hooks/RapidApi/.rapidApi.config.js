const optionsMovies = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};
const optionsMovie = {
  method: "GET",
  url: "https://moviesdatabase.p.rapidapi.com/titles/tt0000045",
  headers: {
    "X-RapidAPI-Key": "",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

export { optionsMovies, optionsMovie };
