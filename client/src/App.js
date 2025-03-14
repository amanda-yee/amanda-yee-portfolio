import Header from './components/Header';
import Intro from './components/Intro';
import Film from './components/Film';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import './App.css';

function App() {
  return (
    <div>

      <div id="home">
        <Header />
        <Intro />
      </div>

      <div id="projects">
        <h3>PROJECTS PLACEHOLDER</h3>
      </div>
      <div id="film">
        <Film />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
