import './App.css';
import Experiences from './components/experiences';
import Hero from './components/hero';
import Navbar from './components/navbar';
import Skills from './components/skills';

function App() {
  return (
    <div className='px-44 bg-black text-white'>
      <Navbar />
      <Hero />
      <Experiences />
      <Skills />
    </div>
  );
}

export default App;
