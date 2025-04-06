
const ProjectCard = ({title="Project", desc, codeLink, websiteLink, imgSrc}) => {

    return (
      <div className="flex w-[45%] max-w-[650px] h-auto rounded-[15px] p-[1%] gap-5 bg-[var(--lighter-grey)] hover:bg-[var(--light-grey)] ">
        
        <div className="flex-[2]">
            <img src={imgSrc} alt="project logo" style={{ width: '100%', height: 'auto', borderRadius: '15px' }}/>
        </div>
        
        <div className="flex-[3] flex flex-col">
            <div className="font-bold pb-2">
                {title}
            </div> 

            <div className="text-sm pb-2">
                {desc}
            </div>

            <div className="flex gap-2 text-xs mt-auto"> 
                <button onClick={() => window.open(codeLink, "_blank", "noopener,noreferrer")}>
                    Code
                </button>
                <button onClick={() => window.open(websiteLink, "_blank", "noopener,noreferrer")}>
                    Live
                </button>
            </div>
        </div>

      </div>
    );
};

export default ProjectCard;
