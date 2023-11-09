// /hooks/TMDB/useTMDBMovies.js
import { useState, useEffect } from "react";
import axios from "axios";

const useTMDBMovies = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiKey = "YOUR_API_KEY";
        // Obtener la lista de géneros
        const genresResponse = await axios.get(
          `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`
        );
        setGenres(genresResponse.data.genres);

        // Si hay un género seleccionado, obtener la lista de películas para ese género
        if (selectedGenre) {
          const genreMoviesResponse = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${selectedGenre}`
          );
          setMovies(genreMoviesResponse.data.results);
        } else {
          // Si no hay un género seleccionado, obtener la lista de todas las películas
          const allMoviesResponse = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`
          );
          setMovies(allMoviesResponse.data.results);
        }

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedGenre]); // Agregamos selectedGenre a las dependencias del useEffect

  return { movies, genres, loading, error };
};

export default useTMDBMovies;
