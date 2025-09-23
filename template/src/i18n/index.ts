import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../locales/en';
import es from '../locales/es';

const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en', // Fallback language
  debug: __DEV__, // Enable debug mode in development

  interpolation: {
    escapeValue: false, // React already does escaping
  },

  // React Native specific options
  react: {
    useSuspense: false, // Disable suspense for React Native
  },
});

export default i18n;
