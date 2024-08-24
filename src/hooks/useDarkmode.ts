import { useState, useEffect } from "react";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve the theme preference from localStorage or check system preference
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    // Apply the dark mode class to document.documentElement
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return [isDarkMode, toggleDarkMode] as const;
}

export default useDarkMode;
