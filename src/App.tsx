import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from "./components/details.tsx";
import Index from "./index.tsx";
import PageNotFound from "./components/pageNotFound.tsx";
import Test from "./components/test.tsx";

export const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects/:name" element={<Details />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  </BrowserRouter>
);
