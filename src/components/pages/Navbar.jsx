import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
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

  const navLinkClasses = ({ isActive }) =>
    `relative block py-2 text-[20px] lg:inline-block lg:mx-4 ${isActive ? 'text-white' : 'text-gray-300'}`;

  return (
    <nav className="w-full text-[#F5F5F5] fixed top-0 left-0 flex items-center justify-between z-10 lg:py-1">
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          onClick={toggleLogoColor}
          className={`w-8 cursor-pointer relative top-2 left-2 transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] ${isLogoInversed ? 'filter invert' : ''}`}
        />
      </div>

      <ul
        className={`
    fixed top-0 bottom-0 bg-[#000] w-[150px] pt-[70px] transition-all duration-500 z-10
    ${mobileMenu ? "right-0" : "right-[-200px]"}
    border-1 border-[#1E1E1E] lg:border-0
    lg:static lg:flex lg:items-center lg:bg-transparent lg:pt-0 lg:right-auto lg:w-auto
  `}
      >

        <li className="group my-[20px] mx-[20px] lg:my-[5px] lg:mx-[20px]">
          <NavLink to="/" onClick={toggleMenu} className={navLinkClasses}>
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </li>
        <li className="group my-[20px] mx-[20px] lg:my-[5px] lg:mx-[20px]">
          <NavLink to="/games" onClick={toggleMenu} className={navLinkClasses}>
            Games
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </li>
        <li className="group my-[20px] mx-[20px] lg:my-[5px] lg:mx-[20px]">
          <NavLink to="/album" onClick={toggleMenu} className={navLinkClasses}>
            Album
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </li>
        <li className="group my-[10px] mx-[20px] lg:my-[5px] lg:mx-[20px]">
          <NavLink to="/tech" onClick={toggleMenu} className={navLinkClasses}>
            Tech
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </li>
        <li className="group my-[20px] mx-[20px] lg:my-[5px] lg:mx-[20px]">
          <NavLink to="/about" onClick={toggleMenu} className={navLinkClasses}>
            About
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
          </NavLink>
        </li>
      </ul>

      <div className="relative w-8 h-8 lg:hidden right-6 top-6 z-20">
        <img
          src={menu_open}
          alt="menu open"
          onClick={toggleMenu}
          className={`absolute w-[24px] h-[24px] transition-opacity duration-300 cursor-pointer ${mobileMenu ? 'opacity-0' : 'opacity-100'}`}
        />
        <img
          src={menu_close}
          alt="menu close"
          onClick={toggleMenu}
          className={`absolute w-[24px] h-[24px] transition-opacity duration-300 cursor-pointer ${mobileMenu ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
