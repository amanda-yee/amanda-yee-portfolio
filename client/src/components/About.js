const About = () => {
    return (
    <div className="lg:flex gap-8">
        <div className="pb-4 lg:flex-[3]">
            <p className="text-lg sm:text-xl pb-4">
                I'm Amanda.
            </p>
            <p className="text-lg sm:text-xl pb-4">
                New York based web developer, data scientist, and problem solver.
            </p>
            <p className="text-sm sm:text-sm md:text-base">
                I'm curious, love to learn, and am always eager to take on a new challenge.
                My background in data science has sharpened my problem solving skills, attention to detail and ability to work through complexity. 
                <br></br><br></br>  

                Outside of working as a data scientist, I'm also freelancing part-time to build websites for local clients.
                I'm motivated to take the next step to fully transition into a career in web development.
                <br></br><br></br>

                I'm excited to bring my technical expertise, creativity, and strong work ethic to a team where I can contribute and continue to grow as a developer.
            </p>
        </div>

        <div className="lg:flex-[2] flex items-center justify-center">
            <img 
                src="/media/me-malaysia.jpg" 
                alt="me in malaysia" 
                className="h-auto w-full sm:max-w-md"
            />
        </div>
        
    </div>
    );
};

export default About;
