import 'server-only';

import en from './locales/en.json';
import de from './locales/de.json';
import { Locale } from './languages';

const dictionaries = {
  en,
  de,
};

export const getTranslate = (lang: Locale) => dictionaries[lang];
