"use client";
import { getCookie } from "cookies-next";
import en from "./locales/en.json";
import de from "./locales/de.json";
import { Languages, Locale } from "./languages";

const dictionaries = {
  en,
  de,
};

export const getLang = () => {
  const hasLang = Languages.locales.some((item) => item === getCookie("lang"));
  //@ts-ignore
  const lang: Locale = hasLang ? getCookie("lang") : Languages.defaultLocale;
  return lang;
};

export const getTranslate = () => dictionaries[getLang()];
