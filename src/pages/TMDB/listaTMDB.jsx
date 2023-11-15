// /components/MovieList.js
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import useTMDBMovies from "../../hooks/TMDB/useTMDBMovies";
import FiltersComponent from "./filters/FiltersComponent";
import MovieItem from "./MovieItem";
import LoadingComponent from "../../components/loading/Loading";
import useTMDBGenres from "../../hooks/TMDB/useTMDBGenres";

const MovieList = ({ navigation: { navigate } }) => {
  const { movies, loading, error, getFilteredMovies } = useTMDBMovies();
  const {
    genres,
    loading: loadingGenres,
    error: errorGenres,
  } = useTMDBGenres();
  const [selectedGenre, setSelectedGenre] = useState("");

  if (loading || loadingGenres) {
    return <LoadingComponent />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleFilter = () => {
    // console.log(selectedGenre);
    // getFilteredMovies(selectedGenre);
    console.log("movies: ", movies);
  };

  const onMoviePress = (movieId) => {
    console.log("me has pulsado: ", movieId);
    navigate("MovieDetail", { movieId: movieId, genres: genres });
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
      {movies.length > 0 ? (
        <FlatList
          data={movies}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item: movie }) => (
            <MovieItem movie={movie} onPress={onMoviePress} />
          )}
          style={[styles.movieList, { marginTop: 16 }]}
        />
      ) : (
        <Text>No hay películas para mostrar</Text>
      )}
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
