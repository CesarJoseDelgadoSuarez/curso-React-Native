import { useState, useEffect } from "react";
import { fetchMovieById } from "./tmdbApiUtils";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";
const url = "https://api.themoviedb.org/3/movie/575264?language=en-US";

const useTMDBMovie = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieById = async (movieId) => {
      setLoading(true);
      try {
        const url = `${TMDB_BASE_URL}/movie/${movieId}?language=en-US`;
        const movieById = await fetchMovieById(url, movieId);
        setMovie(movieById);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error:", error);
      }
    };
    getMovieById();
  }, []);
  return { movie, loading, error };
};

export default useTMDBMovie;
