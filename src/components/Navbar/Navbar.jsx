import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';
import plogo from "../../assets/soplogo.png";
import menu_icon from "../../assets/menu.png";
import close_icon from "../../assets/close.png"; // Add a close icon

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenu && !event.target.closest(".navbar-container")) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenu]);

  return (
    <nav className="navbar-container">
      <img src={plogo} alt="Logo" className='logo' />

      {/* Navigation Menu */}
      <ul className={mobileMenu ? "mobile-menu show-menu" : "mobile-menu"}>
        <li><Link to="hero" smooth={true} offset={0} duration={500} onClick={() => setMobileMenu(false)}>Home</Link></li>
        <li><Link to="visionnaire" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>About Us</Link></li>
        <li><Link to="programs" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Program</Link></li>
        
        <li><Link to="cohorts" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Cohorts</Link></li>
        <li><Link to="testimonials" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>Testimonials</Link></li>
        <li><Link to="faqs" smooth={true} offset={-260} duration={500} onClick={() => setMobileMenu(false)}>FAQ's</Link></li>
        <li><Link to="contact" smooth={true} offset={-260} duration={500} className='btn' onClick={() => setMobileMenu(false)}>Contact us</Link></li>
      </ul>

      {/* Toggle Menu Icon */}
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
