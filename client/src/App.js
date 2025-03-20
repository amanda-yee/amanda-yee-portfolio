import Header from './components/Header';
import Intro from './components/Intro';
import ProjectCard from './components/ProjectCard';
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
        <h1>selected projects</h1>
        <div class="project-container">
          <ProjectCard 
            title="Southside Badminton Club" 
            year="2025"
            desc="Revamped the website for a local, non-profit badminton club using React. The UI / UX has been refreshed with a clean, user-friendly interface and integrates with Google APIs for location and reviews."
            imgSrc="/media/southside-screenshot.png"
            codeLink="https://github.com/amanda-yee/southside-badminton-club" 
            websiteLink="https://southsidebadmintonclub.netlify.app/"
          />
          <ProjectCard 
            title="Inside Edit" 
            year="2025" 
            desc="Revamping the website for a New York based interior designer."
            imgSrc="/media/wip-screenshot.png"
            codeLink=""
            websiteLink=""
          />
        </div>
      </div>
      <div id="film">
        <h1>film</h1>
        <Film />
      </div>

      <div id="contact">
        <h1>get in touch</h1>
        <Contact />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
