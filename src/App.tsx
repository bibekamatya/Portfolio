import "./App.css";
import ContactSection from "./components/contact";
import Education from "./components/education";
import Experiences from "./components/experiences";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="lg:px-44 px-5 bg-gradient-to-b from-gray-900 to-gray-800 text-white space-y-40 lg:pb-32 pb-20">
        <Hero />
        <Experiences />
        <Skills />
        <Education />
        <Projects />
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
