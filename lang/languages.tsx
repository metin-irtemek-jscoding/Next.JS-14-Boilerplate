export const Languages = {
  defaultLocale: "en",
  locales: ["en", "de"],
} as const;

export type Locale = (typeof Languages)["locales"][number];
