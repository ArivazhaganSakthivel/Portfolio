import './App.css';
import Home from './component/home/Home';
import Contact from './component/contact/Contact';
import Navbar from './component/navbar/Navbar';
import About from './component/about/About';
import Experience from './component/experience/Experience';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="section">
        <Home />
        <About />
        <Experience/>
        <Contact />
      </div>
    </div>
  );
}

export default App;
