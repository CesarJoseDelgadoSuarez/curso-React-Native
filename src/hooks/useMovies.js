import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://moviesdatabase.p.rapidapi.com/titles";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ef8ef4548msh2b3c98b67ab0a14p13e72fjsnc3aae9dd4511",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const getData = async () => {
  try {
    const response = await axios.get(url, options);
    return response.data; // Actualiza el estado con la nueva información
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return error;
  }
};

const useGetMovie = async () => {
  const optionsMovie = {
    method: "GET",
    url: "https://moviesdatabase.p.rapidapi.com/titles/tt0000045",
    headers: {
      "X-RapidAPI-Key": "26501aa9f6mshbd64b71e8674369p10dcf7jsn4905f35973d3",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };
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
