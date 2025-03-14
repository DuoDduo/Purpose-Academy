import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import "./Footer.css"; // Importing the CSS file
import logo from "../../assets/plogo.png";

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
                            We are a purpose-driven academy focused on delivering high-quality education and training for the future.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Program</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="footer-section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Support</a></li>
                            <li><a href="#">Community</a></li>
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
                    <div className="footer-section footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-links">
                            <a href="#"><FaInstagram /> Instagram</a>
                            <a href="#"><FaFacebook /> Facebook</a>
                            <a href="#"><FaYoutube /> YouTube</a>
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
