
const ProjectCard = ({title="Project", desc, codeLink, websiteLink, imgSrc}) => {

    return (
      <div className="project">
        <img src={imgSrc} alt="website screenshot" style={{ width: '100%', height: 'auto', borderRadius: '15px' }}/>

        <div className="buttons-code-website font-s">
            <button onClick={() => window.open(codeLink, "_blank", "noopener,noreferrer")}>
                code
            </button>
            <button onClick={() => window.open(websiteLink, "_blank", "noopener,noreferrer")}>
                live
            </button>
        </div>
        
        <div className="project-title font-bold">
            {title}    
        </div> 

        <div className="text-sm">
            {desc}
        </div>

        

      </div>
    );
};

export default ProjectCard;
