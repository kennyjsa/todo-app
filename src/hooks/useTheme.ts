import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function useTheme() {
  const { theme, setTheme } = useContext(ThemeContext);

  return { theme, setTheme };
}
