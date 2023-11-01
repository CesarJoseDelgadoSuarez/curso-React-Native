import { StyleSheet, View } from "react-native";
import ItemList from "./pages/Movies/ItemList";
import useGetMovies from "./hooks/useMovies";
import MiBoton from "./components/MiBoton";
import { useEffect, useState } from "react";

const url = "https://moviesdatabase.p.rapidapi.com/titles";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ef8ef4548msh2b3c98b67ab0a14p13e72fjsnc3aae9dd4511",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Main = (props) => {
  const { movies, updateMovies } = useGetMovies();

  useEffect(() => {
    updateMovies(url, options);
  }, []);

  const handleBoton = () => {
    options.params = {};
    options.params.titleType = "movie";
    updateMovies(url, options);
  };

  return (
    <View style={styles.container}>
      <ItemList data={movies} />
      <MiBoton onPress={handleBoton} title="Presionar aquí" />
    </View>
  );
};

export default Main;

// 0:null
// 1:"movie"
// 2:"musicVideo"
// 3:"podcastEpisode"
// 4:"podcastSeries"
// 5:"short"
// 6:"tvEpisode"
// 7:"tvMiniSeries"
// 8:"tvMovie"
// 9:"tvPilot"
// 10:"tvSeries"
// 11:"tvShort"
// 12:"tvSpecial"
// 13:"video"
// 14:"videoGame"
