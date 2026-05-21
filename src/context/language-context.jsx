import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../i18n/translations";

const STORAGE_KEY = "portfolio-language-preference";
const LanguageContext = createContext(null);

const getInitialLanguage = () => {
  if (typeof window === "undefined") {
    return "es";
  }

  const savedLanguage = window.localStorage.getItem(STORAGE_KEY);

  if (savedLanguage === "es" || savedLanguage === "en") {
    return savedLanguage;
  }

  const browserLanguage = window.navigator.language?.toLowerCase() ?? "";

  return browserLanguage.startsWith("en") ? "en" : "es";
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: translations[language],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }

  return context;
}
