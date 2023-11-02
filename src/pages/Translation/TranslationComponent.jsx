import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../../../config/i18n.js";
import SelectComponent from "../../components/Filters/SelectComponent";
import languageArray from "../../../assets/translation/idiomas";
import StyledText from "../../components/StyledText.jsx";

const TranslationComponent = () => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState("es");

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    console.log(`Idioma seleccionado: ${selectedLanguage}`);
  }, [selectedLanguage]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <View style={{ flex: 1 }}>
        <SelectComponent
          options={languageArray}
          handleSelectedOption={handleLanguageChange}
        />
        <View style={styles.container}>
          <StyledText>{i18n.t("greeting")}</StyledText>
        </View>
      </View>
    </I18nextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TranslationComponent;
