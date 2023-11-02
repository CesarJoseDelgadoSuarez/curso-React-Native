import { FlatList, View, StyleSheet } from "react-native";
import StyledText from "../../components/StyledText";
import MovieItem from "./MovieItem";
import useGetMovies from "../../hooks/useMovies.js";
import { useEffect } from "react";
import MiBoton from "../../components/MiBoton";

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
    padding: 10,
  },
});

const ItemList = ({ style, ...props }) => {
  const { movies, updateMovies } = useGetMovies();

  useEffect(() => {
    updateMovies(url, options);
  }, []);

  const handleBoton = () => {
    options.params = {};
    options.params.titleType = "movie";
    updateMovies(url, options);
    console.log(movies);
  };

  return (
    <View style={styles.container}>
      <MiBoton onPress={handleBoton} title="Presionar aquí" />
      <FlatList
        style={style}
        ItemSeparatorComponent={<StyledText />}
        data={movies}
        renderItem={({ item: movie }) => <MovieItem movie={movie} />}
      ></FlatList>
    </View>
  );
};

export default ItemList;
