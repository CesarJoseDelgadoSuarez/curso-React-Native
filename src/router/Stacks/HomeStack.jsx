// MovieStack.jsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Platform } from "react-native";
import MovieInfo from "../../pages/TMDB/MovieInfo";
import MovieList from "../../pages/TMDB/listaTMDB";
const Stack = createStackNavigator();

const MovieStack = () => (
  <Stack.Navigator initialRouteName="MovieList">
    <Stack.Screen
      name="MovieList"
      component={MovieList}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MovieDetail"
      component={MovieInfo}
      options={({ route }) => ({
        title: Platform.OS === "web" ? "" : "Movie Info",
        headerShown: Platform.OS === "web" ? false : true,
        movieId: route.params?.movieId,
      })}
    />
  </Stack.Navigator>
);

export default MovieStack;
