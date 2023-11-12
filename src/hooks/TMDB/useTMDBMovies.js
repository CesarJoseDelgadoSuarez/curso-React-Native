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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOWJkYjAzN2FiYzI2NDZhNTYzMjg3ZjY2MTkyMmZlYyIsInN1YiI6IjY1NGNlMWRkMjg2NmZhMTA5MjhiNzIxNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rfaVtcvgr5nzZ_xqNWPrw2eEZfE9Ze7BIpzaCoMFdfM",
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
