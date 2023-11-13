import { useState, useEffect } from "react";
import { fetchGenres, fetchMovies } from "./tmdbApiUtils"; // Archivo separado con funciones de utilidad

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const useTMDBApi = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getFilteredMovies = async (genresParam = "") => {
    setLoading(true);
    const genreQueryString =
      genresParam.trim() !== "" ? `&with_genres=${genresParam}` : "";
    const filteredUrl = `${TMDB_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc${genreQueryString}`;
    const res = await fetchMovies(filteredUrl);
    setMovies(res.results);
    setLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const genresRes = await fetchGenres(
          `${TMDB_BASE_URL}/genre/movie/list?language=en`
        );
        setGenres(genresRes.genres);

        const moviesRes = await fetchMovies(
          `${TMDB_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
        );
        setMovies(moviesRes.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return { movies, genres, loading, error, getFilteredMovies };
};

export default useTMDBApi;
