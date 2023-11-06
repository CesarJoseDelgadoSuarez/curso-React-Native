import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// Importa las traducciones
import translationEN from "../assets/translation/en.json";
import translationES from "../assets/translation/es.json";

const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: "v3",
    resources,
    lng: "es",
    ikeySeparator: false, // No uses punto y coma como separador de claves
    interpolation: {
      escapeValue: false, // No escapa las cadenas para React
    },

  });

export default i18n;
