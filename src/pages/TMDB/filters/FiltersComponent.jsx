// /components/filters/FiltersComponent.js
import React from "react";
import { View, Text, Picker, StyleSheet } from "react-native";

const FiltersComponent = ({ selectedGenre, genres, onValueChange }) => (
  <View>
    <Text>Filtrar por género:</Text>
    <Picker
      selectedValue={selectedGenre}
      onValueChange={(itemValue) => onValueChange(itemValue)}
      style={styles.genrePicker}
    >
      <Picker.Item label="Todos los géneros" value="" />
      {genres.map((genre) => (
        <Picker.Item
          key={genre.id}
          label={genre.name}
          value={genre.id.toString()}
        />
      ))}
    </Picker>
  </View>
);

const styles = StyleSheet.create({
  genrePicker: {
    height: 40,
    marginBottom: 16,
  },
});

export default FiltersComponent;
