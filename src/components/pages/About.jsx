import React from 'react';
import bgImage from "../../assets/Untitled-1a.png";

const About = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="min-h-screen flex flex-col items-center justify-center text-[#F5F5F5] p-8">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-6">About Me and this little project</h1>
                    <p className="text-lg">
                    I had a great time working on this project, even though I had very little time—an all-too-familiar habit of mine. I managed to finish it, albeit just barely. After numerous consultations, I finally submitted it on time. Most of the time was lost in developing the website's concept and theme, but overall, it was an enjoyable journey despite the learning curves, no need to read all of this honestly this is just a placeholder!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
