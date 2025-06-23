import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import sopLogo from "../../assets/soplogo.png";
import academyLogo from "../../assets/plogo.png"; // Academy logo
import heavenLogo from "../../assets/hoe.png"; // Add HeavenOnEarth logo here
import menu_icon from "../../assets/menu.png";
import close_icon from "../../assets/close.png";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();  // to detect current route

  const toggleMenu = () => setMobileMenu(!mobileMenu);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenu && !event.target.closest(".navbar-container")) {
        setMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobileMenu]);

  // Detect which page to show logo and text for
  const isAcademyPage = location.pathname.startsWith('/academy');
  const isHeavenPage = location.pathname.startsWith('/heaven');

  let logoSrc = sopLogo;
  let logoAlt = "School of Purpose Logo";
  let logoText = "School of Purpose";

  if (isAcademyPage) {
    logoSrc = academyLogo;
    logoAlt = "Purpose Academy Logo";
    logoText = "Purpose Academy";
  } else if (isHeavenPage) {
    logoSrc = heavenLogo;
    logoAlt = "HeavenOnEarth Logo";
    logoText = "Heaven On Earth";
  }

  return (
    <nav className="navbar-container">
      <RouterLink to={isAcademyPage ? "/academy" : isHeavenPage ? "/heaven" : "/"} onClick={() => setMobileMenu(false)} className="logo-container">
        <img 
          src={logoSrc} 
          alt={logoAlt} 
          className='logo' 
        />
        <p className="logo-text">{logoText}</p>
      </RouterLink>

      <ul className={mobileMenu ? "mobile-menu show-menu" : "mobile-menu"}>
        <li>
          <RouterLink to="/" onClick={() => setMobileMenu(false)}>Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/academy" onClick={() => setMobileMenu(false)}>Academy</RouterLink>
        </li>
        <li>
          <RouterLink to="/heaven" onClick={() => setMobileMenu(false)}>HOE</RouterLink>
        </li>
        <li>
          <RouterLink to="/about" onClick={() => setMobileMenu(false)}>About</RouterLink>
        </li>
        <li>
          <RouterLink to="/contact" onClick={() => setMobileMenu(false)} className="btn">Contact</RouterLink>
        </li>
      </ul>

      <img
        src={mobileMenu ? close_icon : menu_icon}
        alt="Menu Icon"
        className='menu-icon'
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
