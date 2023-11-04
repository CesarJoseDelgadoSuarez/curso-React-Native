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
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
