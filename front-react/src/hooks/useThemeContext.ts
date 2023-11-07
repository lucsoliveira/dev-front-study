import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { darkTheme, lightTheme } from "../styles/theme";

/* 3 - Criação de um Hook para utilização do contexto de forma simplicada
pelos componentes da aplicação */
export const useThemeContext = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function changeTheme() {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  }

  function getTheme() {
    if (theme === "light") {
      return lightTheme;
    }
    if (theme === "dark") {
      return darkTheme;
    }
  }

  return {
    actualTheme: getTheme(),
    changeTheme,
  };
};
