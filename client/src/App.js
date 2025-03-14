import Header from './components/Header';
import Intro from './components/Intro';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import './App.css';

function App() {
  return (
    <div>

      <div className="container">
        <Header />
        <Intro />
      </div>

      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
