import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import arrrow_dwn from "../../assets/arrow-dwn.png";

const Hero = ({ defaultName, description }) => {
  const [name, setName] = useState(() => localStorage.getItem("heroName") || defaultName);

  useEffect(() => {
    localStorage.setItem("heroName", name);
  }, [name]);

  const handleScroll = () => {
    const element = document.getElementById("previews");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center text-white animate-fadeIn">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative z-10 text-center max-w-3xl px-4">
        <h1 className="font-bold mb-4 drop-shadow-lg">
          <span className="inline-flex items-center justify-center gap-2">
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Welcome,</span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-transparent text-blue-400 focus:outline-none text-center 
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                         w-32 sm:w-40 md:w-[200px] appearance-none border-none cursor-pointer"
            />
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed drop-shadow-md">
          {description}
        </p>
        <button
          onClick={handleScroll}
          className="hover:bg-blue-700 transition-all duration-300 text-[#F5F5F5] font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105"
        >
          <img src={arrrow_dwn} alt="Arrow Down" className="w-6 h-auto object-contain" />
        </button>
      </div>
    </section>
  );
};

Hero.propTypes = {
  defaultName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;