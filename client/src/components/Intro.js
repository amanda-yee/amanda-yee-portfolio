const Intro = () => {
    return (
      <div className="intro fade-in-diagonal">

        <div className="text-6xl font-bold pb-8">
          hi, i'm amanda
        </div>

        <div className="text-4xl pb-8">
          web developer <br></br>
          & data scientist
        </div>
        <div className="text-2xl pb-8">
          based in new york
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
