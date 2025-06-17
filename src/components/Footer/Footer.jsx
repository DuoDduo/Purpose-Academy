import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";
import "./Footer.css"; // Importing the CSS file
import logo from "../../assets/soplogo.png";

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
              The School of Purpose (SOP) is a divinely inspired ministry
              dedicated to helping individuals discover and fulfill their
              God-given purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <RouterLink to="/">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/about">About</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact">Contact</RouterLink>
              </li>
              <li>
                <RouterLink to="/academy">Academy</RouterLink>
              </li>
              <li>
                <RouterLink to="/heaven">HOE</RouterLink>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="footer-section">
            <h3>Legal</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/schoolofpurpose?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram /> Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://web.facebook.com/schoolofpurposesop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@pastorflo?si=Cw6acQJYzGRSsGQU"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube /> YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Copyright with Logo */}
        <div className="footer-copyright">
          <img src={logo} alt="Purpose Academy Logo" />
          <p>&copy; {new Date().getFullYear()} School of Purpose. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
