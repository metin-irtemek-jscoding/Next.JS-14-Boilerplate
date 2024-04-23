import 'server-only';
import { cookies } from 'next/headers';
import en from './locales/en.json';
import de from './locales/de.json';
import { Languages, Locale } from './languages';

const dictionaries = {
  en,
  de,
};

export const getLang = () => {
  const hasLang = Languages.locales.some(
    (item) => item === cookies().get('lang')?.value
  );
  //@ts-ignore
  const lang: Locale = hasLang
    ? cookies().get('lang')?.value
    : Languages.defaultLocale;

  return lang;
};
export const getTranslate = () => dictionaries[getLang()];
