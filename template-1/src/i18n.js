import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
    },
  },
  ar: {
    translation: {
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
