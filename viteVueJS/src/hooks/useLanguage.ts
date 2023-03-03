import en from "../locales/en";
import vn from "../locales/vn";

export const useLanguage = () => {
  const language = localStorage.getItem("language");
  const t = language ? (language === "en" ? en : vn) : vn;
  return { t };
};
