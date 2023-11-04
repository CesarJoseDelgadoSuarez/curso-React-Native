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

  // <View style={styles.container}>
  //   <MiBoton onPress={handleBoton} title="Presionar aquí" />
  //   <View
  //     style={{
  //       flexDirection: "row",
  //       justifyContent: "center",
  //       alignItems: "center",
  //       backgroundColor: "#222",
  //     }}
  //   >
  //     <StyledText>Hola mundo !</StyledText>
  //   </View>
  // </View>
  return (
    <View style={styles.contenedorLista}>
      <View style={styles.filtros}>
        <MiBoton onPress={handleBoton} title="Presionar aquí" />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          ItemSeparatorComponent={<StyledText />}
          data={movies}
          renderItem={({ item: movie }) => <MovieItem movie={movie} />}
        ></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedorLista: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  filtros: {
    padding: 5,
  },
});

export default ItemList;
