import Contact from "./Contact";

const Intro = () => {
    return (
      <div className="flex flex-col text-center fade-in-diagonal pt-20">

        <div className="text-4xl sm:text-6xl font-bold pb-8 font-custom">
          hi, i'm amanda
        </div>

        <div className="text-3xl sm:text-4xl pb-8 font-custom">
          software engineer <br></br>
          & data scientist <br></br> <br></br>
          based in new york.
        </div>
        <div className="flex justify-center pb-8">
          <Contact />
        </div>

        <a href="/amanda-yee-resume.pdf" target="_blank" rel="noopener noreferrer">
          <button>
            view resume
          </button>
        </a>
        
      </div>
    );
};

export default Intro;
