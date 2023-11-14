import { useState, useEffect } from "react";
import { fetchGenres } from "./tmdbApiUtils";

const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const useTMDBGenres = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const genresRes = await fetchGenres(
          `${TMDB_BASE_URL}/genre/movie/list?language=en`
        );
        setGenres(genresRes.genres);
      } catch (error) {
        setLoading(false);
        setError(error);
        console.error("Error:", error);
      }
    };
    fetchData();
  }, []);
  return { genres, loading, error };
};

export default useTMDBGenres;
