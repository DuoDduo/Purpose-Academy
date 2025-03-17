import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Importing the CSS file
import logo from "../../assets/plogo.png";
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Footer Sections */}
                <div className="footer-sections">
                    {/* About Us */}
                    <div className="footer-section">
                        <h3>About Us</h3>
                        <p>
                        Purpose Academy is a structured  avenue to delve into the subject of Purpose Discovery and Fulfilment. 
                        </p>
                    </div>

                   {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="hero" smooth={true} offset={0} duration={500}>Home</Link></li>
                            <li><Link to="programs" smooth={true} offset={-260} duration={500}>Program</Link></li>
                            <li><Link to="visionnaire" smooth={true} offset={-260} duration={500}>About Us</Link></li>
                            <li><Link to="contact" smooth={true} offset={-260} duration={500}>Contact</Link></li>
                        </ul>
                    </div>


                        {/* Resources */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><Link to="cohorts" smooth={true} offset={-260} duration={500}>Cohorts</Link></li>
                            <li><Link to="testimonials" smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                            <li><Link to="faqs" smooth={true} offset={-260} duration={500}>FAQ's</Link></li>
                        </ul>
                    </div>


                    {/* Legal */}
                    <div className="footer-section">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Cookies</a></li>
                        </ul>
                    </div>

                    {/* Social Media (As its own section) */}
                    <div className="footer-section">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                           <ul>
                            <li> <a href="https://www.instagram.com/schoolofpurpose?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><FaInstagram /> Instagram</a></li>
                            <li>
                            <a href="https://web.facebook.com/schoolofpurposesop"><FaFacebook /> Facebook</a></li>
                          <li><a href="https://youtube.com/@pastorflo?si=Cw6acQJYzGRSsGQU"><FaYoutube /> YouTube</a></li>
                           </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="footer-divider"></div>

                {/* Copyright with Logo */}
                <div className="footer-copyright">
                    <img src={logo} alt="Purpose Academy Logo" />
                    <p>&copy; {new Date().getFullYear()} Purpose Academy. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
