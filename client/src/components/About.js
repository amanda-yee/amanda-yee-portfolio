const About = () => {
    return (
    <div className="flex gap-8 text-sm">
        <div className="flex-1">
            <p className="text-xl">
                I'm Amanda. <br></br>New York based web developer, data scientist, and problem solver.<br></br><br></br>
            </p>
            <p>
                My interest in coding began early on, unbeknownst to me. 
                <br></br><br></br>

                It all started when I was 12, customizing my MySpace profile by tweaking HTML and CSS (a true throwback). 
                At the time, I had no idea that this could turn into a career.
                <br></br><br></br>

                As time passed and society moved on to Facebook and Instagram, I completed my Bachelors degree and found my way into the data science field.
                One of my favorite parts of my job is <b>coding and problem solving</b>. 
                I love building end-to-end pipelines for my team, whether for feature engineering or machine learning.
                <br></br><br></br>

                After 5 years in the field, I decided to pause and reflect on how I could better align my career with my creative passions. 
                This led me to pursue a Master's in Software Development while continuing my full-time data science role.
                <br></br><br></br>

                Currently I'm freelancing part-time, building websites for local businesses, and I'm eager to take the next step - fully transitioning into a career in web development.
                <br></br><br></br>

                My background in data science has sharpened my problem solving skills, <b>attention to detail</b>, and <b>ability to work through complexity</b>. 
                I thrive in collaborative environments, love learning new technologies, and am always eager to take on new challenges. 
                I'm excited to bring my technical expertise, creativity, and strong work ethic to a team where I can contribute and continue to grow as a developer.
            </p>
        </div>

        <div className="flex-1 flex flex-col gap-4">
            <div className="flex justify-start">
                <img src="/media/me-malaysia.jpg" alt="me in malaysia" style={{ maxWidth: '65%', height: 'auto' }} />
            </div>
            <div className="flex justify-end">
                <div className="flex flex-col items-end ">
                    <img src="/media/tally-creek.jpg" alt="tallebudgera creek" style={{ maxWidth: '65%', height: 'auto' }} />
                    <p className="pt-2">My hometown - Gold Coast, Australia</p>
                </div>
            </div>
        </div>
        
    </div>
    );
};

export default About;
