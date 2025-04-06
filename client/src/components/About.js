const About = () => {
    return (
    <div className="flex gap-8">
        <div className="flex-[3]">
            <p className="text-xl pb-4">
                I'm Amanda.
            </p>
            <p className="text-xl pb-4">
                New York based web developer, data scientist, and problem solver.
            </p>
            <p className="text-m">
                I'm curious, love to learn, and am always eager to take on a new challenge.
                My background in data science has sharpened my problem solving skills, attention to detail and ability to work through complexity. 
                <br></br><br></br>  

                Currently I'm freelancing part-time, building websites for local businesses, and I'm eager to take the next step to fully transition into a career in web development.
                <br></br><br></br>

                I'm excited to bring my technical expertise, creativity, and strong work ethic to a team where I can contribute and continue to grow as a developer.
            </p>
        </div>

        <div className="flex-[2] flex items-center justify-center">
            <img src="/media/me-malaysia.jpg" alt="me in malaysia" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
        
    </div>
    );
};

export default About;
