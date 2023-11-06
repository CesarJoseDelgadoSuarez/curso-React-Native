// PickerComponent.jsx
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const PickerComponent = ({ options, onValueChange }) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);

  const handleValueChange = (itemValue) => {
    setSelectedValue(itemValue);
    onValueChange && onValueChange(itemValue);
  };

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={handleValueChange}
    >
      {options.map((option) => (
        <Picker.Item key={option.value} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
};

export default PickerComponent;
