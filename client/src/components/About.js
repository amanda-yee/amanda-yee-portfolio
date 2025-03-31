import Contact from './Contact';

const About = () => {
    return (
    <div className="about text-sm">
        <div className="flex-1">
            <p className="text-xl">
                I'm Amanda. <br></br>A web developer, data scientist, and problem solver.<br></br><br></br>
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
                But, over time I felt like there was something missing.
                <br></br><br></br>

                I took a step back and reflected on what I loved about my work, and to align my career more with my creative passions I pursued a MS in Software Development while continuing my full-time data science role
                (during this, I found some creative outlets in film photography, crocheting, and sewing).
                <br></br><br></br>

                Now, I'm freelancing, building websites for local businesses, and I'm excited to take the next step - fully pivoting into a career in web development!
                <br></br><br></br>

                My background in data science has sharpened my problem solving skills, <b>attention to detail</b>, and <b>ability to work through complexity</b>. 
                I thrive in collaborative environments, love learning new technologies, and am always eager to take on new challenges. 
                I'm excited to bring my technical expertise, creativity, and strong work ethic to a team where I can contribute and continue to grow as a developer.

            </p>
            <br></br>
            <Contact />
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
