import React, { useState } from "react";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import StyledText from "../StyledText";
const SelectComponent = ({ options, handleSelectedOption }) => {
  // Estado local para realizar un seguimiento de la opción seleccionada
  const selectedOption = undefined;

  return (
    <View>
      <StyledText>Selecciona una opción:</StyledText>
      <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) =>
          handleSelectedOption(itemValue)
        }
      >
        {/* Mapeamos las opciones proporcionadas como prop */}
        {options.map((option) => (
          <Picker.Item
            key={option.value}
            label={option.label}
            value={option.value}
          />
        ))}
      </Picker>
    </View>
  );
};

export default SelectComponent;
