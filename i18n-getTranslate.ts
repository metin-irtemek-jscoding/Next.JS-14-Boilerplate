import 'server-only';

import type { Lang } from './i18n-config';

const langFile = {
  en: () => import('./lang/en.json').then((module) => module.default),
  de: () => import('./lang/de.json').then((module) => module.default),
};

export const getTranslate = async (locale: Lang) => langFile[locale]();
