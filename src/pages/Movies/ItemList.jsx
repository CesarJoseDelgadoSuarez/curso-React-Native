import { FlatList, View, Image } from "react-native";
import StyledText from "../../components/StyledText";
import MovieItem from "./MovieItem";

const ItemList = ({ data, error, loading, style, ...props }) => {
  if (loading) {
    return <StyledText>Cargando...</StyledText>;
  }

  if (error) {
    return <StyledText>Error: {error.message}</StyledText>;
  }

  if (data.data) {
    const movies = data.data.results;
    console.log(data.data.results);
    return (
      <FlatList
        style={style}
        ItemSeparatorComponent={<StyledText />}
        data={movies}
        renderItem={({ item: movie }) => <MovieItem movie={movie} />}
      ></FlatList>
    );
  }
};

export default ItemList;
