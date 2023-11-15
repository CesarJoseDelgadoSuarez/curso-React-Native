import { View, Text, Image, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import useTMDBMovie from "../../hooks/TMDB/useTMDBMovie";
import useTMDBGenres from "../../hooks/TMDB/useTMDBGenres";
import LoadingComponent from "../../components/loading/Loading";

const MovieInfo = () => {
  const route = useRoute();
  const { movieId } = route.params;
  const { movie, loading, error } = useTMDBMovie(movieId);
  const {
    genres,
    loading: loadingGenres,
    error: errorGenres,
  } = useTMDBGenres();
  if (loading || loadingGenres) {
    return <LoadingComponent />;
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.poster}
        source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.overview}>{movie.overview}</Text>
        <Text style={styles.genres}>
          Genres: {movie.genres.map((genre) => genre.name).join(", ")}
        </Text>
        <Text style={styles.releaseDate}>
          Release Date: {movie.release_date}
        </Text>
        {/* Agrega más detalles según sea necesario */}
      </View>
    </View>
  );
};

export default MovieInfo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  poster: {
    width: 120,
    height: 180,
    resizeMode: "cover",
    borderRadius: 8,
  },
  details: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  overview: {
    fontSize: 14,
    marginTop: 5,
  },
  genres: {
    fontSize: 14,
    marginTop: 5,
    color: "gray",
  },
  releaseDate: {
    fontSize: 14,
    marginTop: 5,
    color: "gray",
  },
});
