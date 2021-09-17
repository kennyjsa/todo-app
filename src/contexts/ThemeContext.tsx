import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export enum Theme {
  dark = "dark",
  light = "light"
}

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>(
  {} as ThemeContextProps
);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  const { darkMode } = useDarkMode();

  useEffect(() => {
    if (darkMode) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme.toString()}>{children}</div>
    </ThemeContext.Provider>
  );
};
