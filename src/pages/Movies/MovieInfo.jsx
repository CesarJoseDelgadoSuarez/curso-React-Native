import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useGetMovie } from "../../hooks/useMovies";
import { useRoute } from "@react-navigation/native";

const MovieInfo = () => {
  const route = useRoute();

  const { movieId } = route.params;
  let movie = null;
  useGetMovie().then((res) => {
    movie = res;
    console.log("peli: ", movie);
  });

  console.log(`${movieId}, id de la peli`);

  return (
    <View style={styles.container}>
      <Text>Hola!</Text>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alingItems: "center",
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 150,
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
  },
});
