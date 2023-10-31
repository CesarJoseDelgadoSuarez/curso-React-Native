import { StyleSheet } from "react-native";
import ItemList from "./components/ItemList";
import Movies from "./data/moviesRepository";

import getMovies from "./hooks/moviesAxios";
import StyledText from "./components/StyledText";

const Main = (props) => {
  const { data, error, loading } = getMovies();
  console.log("----------------");
  console.log(data);
  console.log(error);
  console.log(loading);
  console.log("----------------");
  return <ItemList data={{ data, error, loading }} />;
};

export default Main;
