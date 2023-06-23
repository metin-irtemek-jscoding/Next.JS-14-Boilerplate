export const Languages = {
  defaultLocale: 'de',
  locales: ['de', 'en'],
  flags: ['/images/langFlag/de.png', '/images/langFlag/en.png'],
} as const;

export type Locale = typeof Languages['locales'][number];
