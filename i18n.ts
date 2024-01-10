import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
  // 默认当前语言为中文
  fallbackLng: "en",
  debug: true,
});

export default i18n;
