import 'server-only';

import type { Locale } from '@/i18n-config';
import de from '@/lang/de.json';
import en from '@/lang/en.json';

const langFile = { de, en };
export const getTranslate = (lang: Locale) => langFile[lang];
