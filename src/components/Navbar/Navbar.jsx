// import React, { useEffect, useState } from 'react'
import React, { useState } from 'react'
import { Link, Element } from 'react-scroll';
import './Navbar.css'
import plogo from "../../assets/plogo.png"
import menu_icon from"../../assets/menu.png"


const Navbar = () => {
  // const [sticky, setSticky] = useState(false)
  // useEffect(()=>{

  //   window.addEventListener("scroll", ()=>{
  //     window.scrollY >500 ? setSticky(true): setSticky(false);
  //   })
  // },[])
  const [mobileMenu, setMobileMenu] =useState(false);

  const toggleMenu=()=>{
    mobileMenu ? setMobileMenu (false) : setMobileMenu(true)
  }
  return (
    // <nav className={`container ${sticky ? "dark-nav": ""}`}>
    <nav className="container dark-nav">
        <img src={plogo} alt="" className='logo'/>
        <ul className={mobileMenu ? "":"hide-mobile-menu"}>
            <li> <Link to="hero" smooth={true}offset={0} duration={500} >Home</Link></li>
            <li>  <Link to="programs" smooth={true}offset={-260} duration={500} >Program</Link></li>
            <li> <Link to="visionnaire" smooth={true}offset={-260} duration={500}>About us</Link></li>
            <li> <Link to="cohorts" smooth={true}offset={-260} duration={500}>Cohorts</Link></li>
            <li> <Link to="testimonials" smooth={true}offset={-260} duration={500}>Testimonials</Link></li>
            <li> <Link to="faqs" smooth={true}offset={-260} duration={500}>Faq's</Link></li>
            <li><Link to="contact" smooth={true}offset={-260} duration={500} className='btn'>Contact us</Link></li>
       
        </ul>
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>

    </nav>
  )
}

export default Navbar