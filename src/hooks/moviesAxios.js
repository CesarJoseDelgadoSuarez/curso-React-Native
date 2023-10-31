// useAxios.js
import { useState, useEffect } from "react";
import axios from "axios";

const getMovies = () => {
  const url = "https://moviesdatabase.p.rapidapi.com/titles";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2ef8ef4548msh2b3c98b67ab0a14p13e72fjsnc3aae9dd4511",
      "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
    },
  };

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(url, options);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Las dependencias están vacías para que se ejecute solo una vez al montar el componente

  return { data, error, loading };
};

export default getMovies;
