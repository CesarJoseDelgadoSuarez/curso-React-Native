// TranslationComponent.jsx
import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import PickerComponent from '../../components/Filters/PickerComponent';
import StyledText from '../../components/StyledText.jsx'
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../../../config/i18n.js";
import languageArray from '../../../assets/translation/idiomas';

const TranslationComponent = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    console.log(`Idioma seleccionado: ${selectedLanguage}`);
  }, [selectedLanguage]);

  const handleLanguageChange = (newLanguage) => {
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);

    console.log('Nuevo idioma seleccionado:', newLanguage);
  };


  return (
    <View style={{ flex: 1 }}>
      <View>
        <StyledText>{t("selectLanguage")}</StyledText>
        <PickerComponent options={languageArray} onValueChange={handleLanguageChange} />
        <StyledText>{t("selectedLanguage")}</StyledText>
      </View >
      <View style={styles.container}>
        <StyledText>{t("greeting")}</StyledText>
      </View>
    </View>);
};

export default TranslationComponent;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
