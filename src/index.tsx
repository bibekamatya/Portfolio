import { Element } from "react-scroll";
import Contact from "./components/contact";
import { NAVITEMS as Sections } from "./dataSheet";
import { SectionProps } from "./interfaces";
import Navbar from "./components/navbar";

const Section = ({ title, component }: SectionProps) => (
  <Element name={title} className="section lg:pb-32 pb-20">
    {component}
  </Element>
);

const Index = () => {
  return (
    <>
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
    </>
  );
};

export default Index;
