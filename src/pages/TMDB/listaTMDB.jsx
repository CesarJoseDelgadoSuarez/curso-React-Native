// /components/MovieList.js
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Picker,
  Button,
} from "react-native";
import useTMDBMovies from "../../hooks/TMDB/useTMDBMovies";

const MovieList = () => {
  const {
    movies,
    genres,
    loading,
    error,
    selectedGenre,
    setGenre,
    fetchMovies,
  } = useTMDBMovies();

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  const handleFilter = () => {
    // Llama al método fetchMovies para realizar una nueva consulta con los filtros actuales
    fetchMovies();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Listado de películas:</Text>
      <Picker
        selectedValue={selectedGenre}
        onValueChange={(itemValue) => setGenre(itemValue)}
        style={styles.genrePicker}
      >
        <Picker.Item label="Todos los géneros" value="" />
        {genres.map((genre) => (
          <Picker.Item
            key={genre.id}
            label={genre.name}
            value={genre.id.toString()}
          />
        ))}
      </Picker>
      <Button title="Buscar" onPress={handleFilter} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image
              style={styles.moviePoster}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
              }}
            />
            <View style={styles.movieInfo}>
              <Text style={styles.movieTitle}>{item.title}</Text>
              <Text style={styles.movieOverview}>{item.overview}</Text>
            </View>
          </View>
        )}
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
  genrePicker: {
    height: 40,
    marginBottom: 16,
  },
  movieContainer: {
    flexDirection: "row",
    marginBottom: 16,
  },
  moviePoster: {
    width: 120,
    height: 180,
    resizeMode: "cover",
    borderRadius: 8,
  },
  movieInfo: {
    flex: 1,
    marginLeft: 16,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  movieOverview: {
    fontSize: 14,
  },
});

export default MovieList;
