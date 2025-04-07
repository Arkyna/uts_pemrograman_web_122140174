import React from 'react';
import bgImage from "../../assets/Untitled-1a.png";

const About = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="min-h-screen flex flex-col items-center justify-center text-[#F5F5F5] p-8">
                <div className="max-w-3xl text-center">
                    <h1 className="text-4xl font-bold mb-6">About Me</h1>
                    <p className="text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar tempor euismod. Nunc scelerisque tempor libero, egestas tempus velit maximus non. Vestibulum sed tristique purus. Duis feugiat condimentum quam et commodo. Fusce vel pulvinar nunc. Integer aliquam urna ante, id consequat turpis aliquet vitae. Integer sed felis sed erat dapibus venenatis eu a erat. Integer vitae ante sit amet quam pretium blandit sed in tellus.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
