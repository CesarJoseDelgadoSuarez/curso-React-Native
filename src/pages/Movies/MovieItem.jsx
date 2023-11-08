import { Image, StyleSheet, View } from "react-native";
import StyledText from "../../components/StyledText";
import ImageScaleAnimation from "../../animations/ImageScaleAnimation";
const MovieItem = ({ movie, getMovieID, ...props }) => {
  const movieImage =
    movie.primaryImage !== null
      ? { uri: movie.primaryImage.url }
      : require("../../../assets/images/imageNotFound.jpg");

  const handleFinishAnimation = () => {
    getMovieID(movie.id);
  };
  return (
    <View style={{ flexDirection: "row" }}>
      <View>
        <Image source={movieImage} style={styles.image}></Image>
      </View>
      <View>
        <StyledText bold style={styles.title}>
          {movie.titleText.text}
        </StyledText>
        <StyledText bold style={styles.titleType}>
          {movie.titleType.text}
        </StyledText>
        <StyledText style={styles.year}>{movie.releaseYear.year}</StyledText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 175,
  },
  title: {
    fontSize: 16,
    color: "black",
    marginBottom: 2,
  },
  titleType: {
    paddingVertical: 2,
  },
  year: {
    paddingVertical: 2,
  },
});

export default MovieItem;
