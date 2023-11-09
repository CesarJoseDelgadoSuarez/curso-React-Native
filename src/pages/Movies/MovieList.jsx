import { FlatList, View, StyleSheet } from "react-native";
import StyledText from "../../components/StyledText";
import MovieItem from "./MovieItem";
import useGetMovies from "../../hooks/useMovies.js";
import { useEffect } from "react";
import MiBoton from "../../components/MiBoton";
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";

const MovieList = ({ style, ...props }) => {
  const navigation = useNavigation();

  const { t, i18n } = useTranslation();
  const { movies, updateMovies } = useGetMovies();

  useEffect(() => {
    updateMovies();
  }, []);

  const handleBoton = () => {
    let params = {};
    params.titleType = "movie";
    updateMovies(params);
  };

  const handleFinish = (movieId) => {
    navigation.navigate("Informacion de Pelicula", { movieId: movieId });
  };

  return (
    <View style={styles.contenedorLista}>
      <View style={styles.filtros}>
        <MiBoton onPress={handleBoton}>{t("pressHere")}</MiBoton>
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          ItemSeparatorComponent={<StyledText />}
          data={movies}
          renderItem={({ item: movie }) => (
            <MovieItem movie={movie} getMovieID={handleFinish} />
          )}
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

export default MovieList;
