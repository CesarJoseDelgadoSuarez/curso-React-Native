import { StyleSheet, View } from "react-native";

import useGetMovies from "./hooks/useMovies";
import MiBoton from "./components/MiBoton";
import { useEffect } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

const Main = (props) => {
  const { data, fetchData } = useGetMovies();

  useEffect(() => {
    fetchData(null);
  }, []);

  return (
    <View style={styles.container}>
      <MiBoton onPress={() => fetchData("movie")} title="Presionar aquí" />
    </View>
  );
};

export default Main;

// 0:null
// 1:"movie"
// 2:"musicVideo"
// 3:"podcastEpisode"
// 4:"podcastSeries"
// 5:"short"
// 6:"tvEpisode"
// 7:"tvMiniSeries"
// 8:"tvMovie"
// 9:"tvPilot"
// 10:"tvSeries"
// 11:"tvShort"
// 12:"tvSpecial"
// 13:"video"
// 14:"videoGame"
