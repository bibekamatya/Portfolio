import React from "react";
import { Element } from "react-scroll";
import "./App.css";
import Contact from "./components/contact";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

// Define the type for Section component props
interface SectionProps {
  id: string;
  component: React.ReactNode;
}

const sections = [
  { id: "hero", component: <Hero /> },
  { id: "experiences", component: <Experiences /> },
  { id: "skills", component: <Skills /> },
  { id: "education", component: <Education /> },
  { id: "projects", component: <Projects /> },
];

const Section: React.FC<SectionProps> = ({ id, component }) => (
  <Element name={id} className="section">
    {component}
  </Element>
);

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:px-44 px-5 bg-gradient-to-b from-gray-900 to-gray-800 text-white space-y-40 lg:pb-32 pb-20">
        {sections.map(({ id, component }) => (
          <Section key={id} id={id} component={component} />
        ))}
      </div>
      <Element name="contact" className="section">
        <Contact />
      </Element>
    </div>
  );
};

export default App;
