import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/logo.png";
import menu_open from "../../assets/menu-open.png";
import menu_close from "../../assets/menu-close.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isLogoInversed, setIsLogoInversed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenu) {
        setMobileMenu(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenu]);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const toggleLogoColor = () => {
    setIsLogoInversed(!isLogoInversed);
  };

  return (
    <nav className="w-full text-[#F5F5F5] fixed top-0 left-0 flex items-center justify-between z-10 lg:py-1">
      <img
        src={logo}
        alt="logo"
        onClick={toggleLogoColor}
        className={`w-8 cursor-pointer relative top-2 left-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] ${
          isLogoInversed ? 'filter invert' : ''
        }`}
      />

      <ul
        className={`
          fixed top-0 bottom-0 bg-[#333] w-[150px] pt-[70px] transition-all duration-500 z-10
          ${mobileMenu ? "right-0" : "right-[-200px]"}
          lg:static lg:flex lg:items-center lg:bg-transparent lg:pt-0 lg:right-auto lg:w-auto
        `}
      >
        <li className="block my-[20px] mx-[40px] text-[20px] lg:inline-block lg:my-[5px] lg:mx-[20px]">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="block my-[20px] mx-[40px] text-[20px] lg:inline-block lg:my-[5px] lg:mx-[20px]">
          <Link to="/games" onClick={toggleMenu}>Games</Link>
        </li>
        <li className="block my-[20px] mx-[40px] text-[20px] lg:inline-block lg:my-[5px] lg:mx-[20px]">
          <Link to="/album" onClick={toggleMenu}>Album</Link>
        </li>
        <li className="block my-[20px] mx-[40px] text-[20px] lg:inline-block lg:my-[5px] lg:mx-[20px]">
          <Link to="/tech" onClick={toggleMenu}>Tech</Link>
        </li>
        <li className="block my-[20px] mx-[40px] text-[20px] lg:inline-block lg:my-[5px] lg:mx-[20px]">
          <Link to="/about" onClick={toggleMenu}>About</Link>
        </li>
      </ul>

      {mobileMenu ? (
        <img
          src={menu_close}
          alt="close menu"
          className="w-8 cursor-pointer lg:hidden relative right-4 top-4 z-20"
          onClick={toggleMenu}
        />
      ) : (
        <img
          src={menu_open}
          alt="menu"
          className="w-8 cursor-pointer lg:hidden relative right-4 top-4 z-20"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
