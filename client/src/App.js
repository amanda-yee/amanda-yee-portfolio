import './App.css';

import Header from './components/Header';
import Intro from './components/Intro';
import ProjectCard from './components/ProjectCard';
import Film from './components/Film';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <div id="home" className="bg-skyline bg-cover bg-center h-screen">
        <div className="mx-[5%]">
          <Header />
        </div>
        <div>
          <Intro />
        </div>
      </div>

      <div id="projects" className="mx-[5%]">
        <div className="custom-heading">selected projects</div>
        <div className="project-container">
          <ProjectCard 
            title="Southside Badminton Club"
            desc="Reworked the website for a local non-profit badminton club using React, featuring a user-friendly interface and integration with Google APIs for location and reviews."
            imgSrc="/media/southside-screenshot.png"
            codeLink="https://github.com/amanda-yee/southside-badminton-club" 
            websiteLink="https://southsidebadmintonclub.netlify.app/"
          />
          <ProjectCard 
            title="Inside Edit"
            desc="Project starting soon - revamping the website for a New York based interior designer."
            imgSrc="/media/wip-screenshot.png"
            codeLink=""
            websiteLink=""
          />
        </div>
      </div>

      <div id="about" className="mx-[5%]">
        <div className="custom-heading">about</div>
        <About />
      </div>

      <div id="film" className="mx-[5%]">
        <div className="custom-heading">film</div>
        <Film />
      </div>

      <div id="contact" className="mx-[5%]">
        <div className="custom-heading">get in touch</div>
        <Contact />
      </div>
      <Footer/>

    </div>
  );
}

export default App;
