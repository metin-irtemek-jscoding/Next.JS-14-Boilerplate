export const i18n = {
  defaultLocale: 'de',
  locales: ['en', 'de'],
} as const;

export type Lang = typeof i18n['locales'][number];
