import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import en from './translations/en.json';
import hi from './translations/hi.json';
import as from './translations/as.json';
import bn from './translations/bn.json';
import es from './translations/es.json';
import fr from './translations/fr.json';
import de from './translations/de.json';
import ru from './translations/ru.json';
import te from './translations/te.json';

const resources = {
  en: { translation: en },
  hi: { translation: hi },
  as: { translation: as },
  bn: { translation: bn },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  ru: { translation: ru },
  te: { translation: te }
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (callback: (lang: string) => void) => {
    const locales = RNLocalize.getLocales();
    callback(locales[0]?.languageCode ?? 'en');
  },
  init: () => {},
  cacheUserLanguage: () => {}
};

i18n.use(languageDetector).use(initReactI18next).init({
  resources,
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: { escapeValue: false }
});

export default i18n;

