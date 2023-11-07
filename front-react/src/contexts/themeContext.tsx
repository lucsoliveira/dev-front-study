import { createContext, useContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";

/* 1 - Criação do Contexto, utilizando função nativa do React */
export const ThemeContext = createContext();

/* 2 - Criação do Provider que irá repassar o tema para as rotas da aplicação */
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      return "dark";
    } else {
      return "light";
    }
  });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
