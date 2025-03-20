
const ProjectCard = ({title="Project", year, desc, codeLink, websiteLink, imgSrc}) => {

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
        
        <div className="project-title">
            <div className="font-bold">{title}</div> 
            <div>{year}</div>
        </div>

        <div className="font-s">
            {desc}
        </div>

        

      </div>
    );
};

export default ProjectCard;
