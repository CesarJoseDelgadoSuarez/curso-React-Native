import { View } from "react-native";
import StyledText from "../../components/StyledText";
import { useRoute } from "@react-navigation/native";
import useTMDBApi from "../../hooks/TMDB/useTMDBMovies";
const MovieInfo = () => {
  const route = useRoute();
  const { movie, genres, loading, error, getFilteredMovies, getMovieById } =
    useTMDBApi();
  const { movieId } = route.params;

  return (
    <View>
      <StyledText>{movieId}!!</StyledText>
    </View>
  );
};

export default MovieInfo;
