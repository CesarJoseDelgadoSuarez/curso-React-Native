import fetch from "node-fetch";
import config from "./config";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: config.Authorization,
  },
};

const fetchData = async (url) => {
  const response = await fetch(url, options);
  const json = await response.json();
  console.log("Respuesta obtenida: ", json);
  return json;
};

const fetchGenres = async (url) => {
  return fetchData(url);
};

const fetchMovies = async (url) => {
  return fetchData(url);
};

const fetchMovieById = async (url, movieId) => {
  return fetchData(url, movieId);
};

export { fetchGenres, fetchMovies, fetchMovieById };
