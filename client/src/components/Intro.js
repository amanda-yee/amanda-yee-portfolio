import Contact from "./Contact";

const Intro = () => {
    return (
      <div className="flex flex-col text-center fade-in-diagonal pt-20">

        <div className="text-6xl font-bold pb-8">
          hi, i'm amanda
        </div>

        <div className="text-4xl pb-8">
          web developer <br></br>
          & data scientist
        </div>
        <div className="flex justify-center pb-8">
          <Contact />
        </div>

        <a href="/amanda-yee-resume.pdf" target="_blank" rel="noopener noreferrer">
          <button>
            resume
          </button>
        </a>
        
      </div>
    );
};

export default Intro;
