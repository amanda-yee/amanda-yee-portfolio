import { GithubIcon, LinkedInIcon, EnvelopeIcon } from "./Icons";

const Contact = () => {
    return (
      <div className="">
        <ul className="list">
            <li>
                <a href="mailto: amandakyee@gmail.com">
                    <EnvelopeIcon />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/amanda-yee/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon /> 
                </a>
            </li>
            <li>
                <a href="https://github.com/amanda-yee" target="_blank" rel="noopener noreferrer">
                    <GithubIcon />
                </a>
            </li>
            

            
        </ul>
        
      </div>
    );
};

export default Contact;
