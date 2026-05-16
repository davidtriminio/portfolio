import "./App.css";
import AppRouter from "./routes/AppRouter.jsx";
import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme-preference";

const getInitialThemePreference = () => {
  if (typeof window === "undefined") {
    return "dark";
  }

  const storedTheme = window.localStorage.getItem(STORAGE_KEY);

  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return "dark";
};

function App() {
  const [themePreference, setThemePreference] = useState(getInitialThemePreference);

  useEffect(() => {
    document.documentElement.dataset.theme = themePreference;
    document.documentElement.style.colorScheme = themePreference;
    window.localStorage.setItem(STORAGE_KEY, themePreference);
  }, [themePreference]);

  return (
    <AppRouter
      themePreference={themePreference}
      setThemePreference={setThemePreference}
    />
  );
}

export default App;
