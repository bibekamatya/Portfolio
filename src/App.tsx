import { Element } from "react-scroll";
import { NAVITEMS as Sections } from "./dataSheet";
import { SectionProps } from "./interfaces";
import useDarkMode from "./hooks/useDarkmode";
import { useEffect } from "react";
import "./index.css";
import "./App.css";
import Navbar from "./components/landingPage/navbar";
import Contact from "./components/landingPage/contact";

const Section = ({ title, component }: SectionProps) => (
  <Element name={title} className="section lg:pb-32 pb-20">
    {component}
  </Element>
);

const App = () => {
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
      <Navbar />
      <div className="lg:px-44 px-5 md:mt-16">
        {Sections.map(({ title, Component }) => (
          <div key={title}>
            {Component && (
              <Section key={title} title={title} component={<Component />} />
            )}
          </div>
        ))}
      </div>
      <Element name="Contact" className="section">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
