'use client';
import { getCookie } from 'cookies-next';

import en from './locales/en.json';
import de from './locales/de.json';
import { Languages, Locale } from './languages';

const dictionaries = {
  en,
  de,
};

export const getLang = () => {
  const lang: Locale =
    getCookie('i18next') === Languages.locales[1]
      ? Languages.locales[1]
      : Languages.locales[0];

  return lang;
};

export const getTranslate = () => {
  const lang = getLang();

  return dictionaries[lang];
};
