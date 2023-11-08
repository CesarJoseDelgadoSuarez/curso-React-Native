import axios from "axios";

const useGetMovieInfo = async () => {
  try {
    const response = await axios.get(url, options);
    return response.data; // Actualiza el estado con la nueva información
  } catch (error) {
    console.error("Error al obtener datos:", error);
    return error;
  }
};

export default useGetMovieInfo;
