// /components/MovieItem.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const MovieItem = ({ movie }) => (
  <View style={styles.movieContainer}>
    <Image
      style={styles.moviePoster}
      source={{
        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      }}
    />
    <View style={styles.movieInfo}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.movieOverview}>{movie.overview}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
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

export default MovieItem;
