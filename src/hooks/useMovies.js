import { useState, useEffect } from "react";
import axios from "axios";
import { optionsMovie, optionsMovies } from "./rapidApi.config";
const url = "https://moviesdatabase.p.rapidapi.com/titles";

const getData = async () => {
  try {
    const response = await axios.get(url, optionsMovies);
    return response.data; // Actualiza el estado con la nueva información
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return error;
  }
};

const useGetMovie = async () => {
  try {
    const response = await axios.request(optionsMovie);
    return response.data.results;
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return error;
  }
};

const useGetMovies = () => {
  const [movies, setMovies] = useState(null);

  const updateMovies = async (params) => {
    params ? (options.params = params) : null;
    const response = await getData();
    setMovies(response.results);
  };

  return { movies, updateMovies };
};
export { useGetMovie };
export default useGetMovies;
