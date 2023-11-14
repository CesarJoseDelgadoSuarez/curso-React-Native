// /components/MovieList.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import useTMDBMovies from "../../hooks/TMDB/useTMDBMovies";
import FiltersComponent from "./filters/FiltersComponent";
import MovieItem from "./MovieItem";
import LoadingComponent from "../../components/loading/Loading";
import useTMDBGenres from "../../hooks/TMDB/useTMDBGenres";
const MovieList = () => {
  const { movies, loading, error, getFilteredMovies } = useTMDBMovies();
  const {
    genres,
    loading: loadingGenres,
    error: errorGenres,
  } = useTMDBGenres();
  const [selectedGenre, setSelectedGenre] = useState("");

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleFilter = () => {
    console.log(selectedGenre);
    getFilteredMovies(selectedGenre);
  };

  const onMoviePress = (movieId) => {
    // navigation.navigate("Informacion de Pelicula", { movieId: movieId });
    console.log("me has pulsado: ", movieId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de películas:</Text>
      <FiltersComponent
        selectedGenre={selectedGenre}
        genres={genres}
        onValueChange={(itemValue) => setSelectedGenre(itemValue)}
      />
      <Button title="Buscar" onPress={handleFilter} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <MovieItem movie={item} onPress={onMoviePress} />
        )}
        style={[styles.movieList, { marginTop: 16 }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  movieList: {
    marginTop: 5,
  },
  cargando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MovieList;
