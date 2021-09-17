import { useCallback, useEffect, useState } from "react";

export function useDarkMode() {
  
  const [darkMode, setDarkMode] = useState(false);

  const toggleUseDarkMode = useCallback((ev: MediaQueryListEvent) => {
    setDarkMode(ev.matches);
  }, []);

  useEffect(() => {
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    matchMedia.addEventListener("change", toggleUseDarkMode);

    return () => {
      matchMedia.removeEventListener("change", toggleUseDarkMode);
    };
  }, [toggleUseDarkMode]);

  return { darkMode };
}
