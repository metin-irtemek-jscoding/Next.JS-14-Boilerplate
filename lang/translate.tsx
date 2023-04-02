'use client';
import type { Locale } from '@/i18n-config';
import { i18n } from '@/i18n-config';
import { useGlobalContext } from '@/context';

import en from './en.json';
import de from './de.json';

const dictionaries = {
  'en-US': en,
  'de-DE': de,
};

export const GetTranslate = () => {
  const { lang } = useGlobalContext();

  return dictionaries[(lang as Locale) || i18n.defaultLocale];
};
