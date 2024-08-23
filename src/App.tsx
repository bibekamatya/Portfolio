import { Element } from "react-scroll";
import "./App.css";
import Contact from "./components/contact";
import { NAVITEMS as Sections } from "./dataSheet";
import Navbar from "./components/navbar";
import { SectionProps } from "./interfaces";

const Section = ({ title, component }: SectionProps) => (
  <Element name={title} className="section lg:pb-32 pb-20">
    {component}
  </Element>
);

const App = () => {
  return (
    <>
      <Navbar />
      <div className="lg:px-44 px-5 bg-gradient-to-b from-gray-900 to-gray-800 text-white">
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
    </>
  );
};

export default App;
