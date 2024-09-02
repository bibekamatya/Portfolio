import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Details from "./components/details.tsx";
import Index from "./index.tsx";
import useDarkMode from "./hooks/useDarkmode.ts";
import { useEffect } from "react";

export const App = () => {
  const [isDarkMode] = useDarkMode();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects/:name" element={<Details />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
