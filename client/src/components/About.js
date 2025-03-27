const About = () => {
    return (
    <div className="about">
        <div className="flex-1 text-sm">
            <p className="text-xl">
                I'm Amanda. <br></br>A web developer, data scientist, and problem solver.<br></br><br></br>
            </p>
            <p>
                My interest in coding began early on, unbeknownst to me. 
                It all started when I was 12, customizing my MySpace profile by tweaking HTML and CSS (a true throwback). 
                At the time, I had no idea that this could turn into a career.
                <br></br><br></br>

                As time passed and society moved on to Facebook and Instagram, I completed my Bachelors degree and found my way into the data science field.
                One of my favorite parts of my job is coding and problem solving. 
                I love building end-to-end pipelines for my team, whether for feature engineering or machine learning. 
                But, over time I felt like there was something missing - creativity.
                <br></br><br></br>

                So I took a step back and reflected on what I loved about my work, and to align my career more with my passions I pursued a MS in Software Development while continuing my full-time data science role.
                During this, I found some creative outlets in film photography, crocheting, and most recently, sewing.
                <br></br><br></br>

                Now, I'm freelancing, building websites for local businesses, and I'm excited to take the next step - fully pivoting into a career in web development!
                <br></br><br></br>

                My background in data science has sharpened my problem-solving skills, attention to detail, and ability to work through complex challenges. 
                I thrive in collaborative environments, love learning new technologies, and am always eager to take on new challenges. 
                I'm excited to bring my technical expertise, creativity, and strong work ethic to a team where I can contribute and grow as a developer.

            </p>
        </div>
        <div className="flex-1">
            <img src="/media/me-malaysia.jpg" alt="me in malaysia" style={{ maxWidth: '75%', height: 'auto' }} />
            <br></br>
            <img src="/media/tally-creek.jpg" alt="me in malaysia" style={{ maxWidth: '75%', height: 'auto' }} />
        </div>
    </div>
    );
};

export default About;
