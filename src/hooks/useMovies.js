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

const useGetMovies = () => {
  const [data, setData] = useState("");

  const fetchData = async (titleTypes) => {
    options.params = {};
    if (titleType !== null) {
      options.params.titleType = "movie";
    } else {
      options.params.titleType = "musicvideo";
    }
    try {
      const response = await axios.get(url, options);
      setData(response.data); // Actualiza el estado con la nueva información
      console.log(data);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  return { data, fetchData };
};

export default useGetMovies;
