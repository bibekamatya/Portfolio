import "./App.css";
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
      <div className="md:px-44 bg-darkBlue text-white space-y-40">
        <Hero />
        <Experiences />
        <Skills />
        <Education />
        <Projects />
      </div>
    </div>
  );
}

export default App;
