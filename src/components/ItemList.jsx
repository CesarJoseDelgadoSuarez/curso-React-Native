import { FlatList, View, Image } from "react-native";
import StyledText from "./StyledText";
import MovieItem from "./MovieItem";

const ItemList = ({ data, error, loading, ...props }) => {
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
        ItemSeparatorComponent={<StyledText />}
        data={movies}
        renderItem={({ item: movie }) => <MovieItem movie={movie} />}
      ></FlatList>
    );
  }
};

export default ItemList;
