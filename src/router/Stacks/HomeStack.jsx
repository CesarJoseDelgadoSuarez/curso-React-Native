// MovieStack.jsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
// import MovieList from "../../pages/Movies/MovieList";
// import MovieInfo from "../../pages/Movies/MovieInfo";
import MovieInfo from "../../pages/TMDB/MovieInfo";
import MovieList from "../../pages/TMDB/listaTMDB";
const Stack = createStackNavigator();

const MovieStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="MovieList"
      component={MovieList}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Informacion de Pelicula"
      component={MovieInfo}
      options={({ route }) => ({
        title: Platform.OS === "web" ? "" : "Movie Info",
        headerShown: Platform.OS === "web" ? false : true,
        // Pasa el ID de la película como parámetro a MovieInfo
        movieId: route.params?.movieId, // Se asegura de que movieId existe
      })}
    />
  </Stack.Navigator>
);

export default MovieStack;
