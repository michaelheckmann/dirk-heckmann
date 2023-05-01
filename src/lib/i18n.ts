export const languages = {
  en: "English",
  de: "Deutsch",
};

export const defaultLang = "en";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}
