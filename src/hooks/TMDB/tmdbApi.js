const axios = require("axios"); // Si estás trabajando fuera de un entorno que lo soporte, puedes utilizar import axios from 'axios';

const TMDB_API_KEY = "tuApiKey"; // Reemplaza con tu API key de TMDB
const TMDB_API_URL = "https://api.themoviedb.org/3";

const getGenres = async () => {
  try {
    const response = await axios.get(`${TMDB_API_URL}/genre/movie/list`, {
      params: {
        api_key: TMDB_API_KEY,
      },
    });

    return response.data.genres;
  } catch (error) {
    console.error("Error al obtener géneros:", error);
    throw error;
  }
};

export { getGenres };
