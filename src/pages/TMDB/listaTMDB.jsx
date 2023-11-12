// /components/MovieList.js
import React, { useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, Button } from "react-native";
import useTMDBMovies from "../../hooks/TMDB/useTMDBMovies";
import FiltersComponent from "./filters/FiltersComponent";
import MovieItem from "./MovieItem";

const MovieList = () => {
  const { movies, genres, loading, error } = useTMDBMovies();
  const [selectedGenre, setSelectedGenre] = useState("");

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleFilter = () => {
    // Llama al método fetchMovies para realizar una nueva consulta con los filtros actuales
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
        renderItem={({ item }) => <MovieItem movie={item} />}
        style={[styles.movieList, { marginTop: 16 }]} // Use array syntax
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
});

export default MovieList;
