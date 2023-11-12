// /hooks/TMDB/useTMDBMovies.js
import { useState, useEffect } from "react";
import fetch from "node-fetch";
import config from "./config";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: config.Authorization,
  },
};

const useTMDBMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const getDataFromTMDB = async () => {
    try {
      console.log("obteniendo datos...");
      const response = await fetch(url, options);
      console.log("Parseando datos...");
      const json = await response.json();
      console.log("datos parseados");
      setLoading(false);
      console.log(json);
      setMovies(json.results);
    } catch (err) {
      setLoading(false);
      setError(err);
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    getDataFromTMDB();
  }, []);

  return { movies, genres, loading, error };
};

export default useTMDBMovies;
