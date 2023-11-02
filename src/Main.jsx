import { StyleSheet, View } from "react-native";
import MovieList from "./pages/Movies/MovieList";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const Main = (props) => {
  return (
    <View style={styles.container}>
      <MovieList />
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
