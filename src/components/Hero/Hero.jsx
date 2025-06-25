import React from 'react';
import { motion } from 'framer-motion';
import "./Hero.css";
import white_arrow from "../../assets/white-arrow.png";

const Hero = ({ 
  title = '"Discover Your Purpose, Fuel Your Impact."', 
  subtitle, 
  buttonText = 'Register Now', 
  buttonLink = 'https://forms.gle/V4zmFmwj2smdtjoAA', 
  hideButton = false, 
  backgroundImage 
}) => {
  const bgStyle = backgroundImage ? {
    backgroundImage: `
      linear-gradient(rgba(11, 0, 1, 0.7), rgba(0, 0, 0, 0.7)), 
      url(${backgroundImage})
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  } : {};

  return (
    <div className="hero-wrapper">
      <motion.div 
        className='hero container'
        style={bgStyle}
        initial={{ scale: 1.05 }} // zoomed in
        animate={{ scale: 1 }}    // zooms out
        transition={{ duration: 6, ease: "easeOut" }}
      >
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }} 
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {subtitle}
            </motion.p>
          )}

          {!hideButton && (
            <motion.a 
              href={buttonLink} 
              target='_blank' 
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button className='btn'>
                {buttonText} <img src={white_arrow} alt="arrow" />
              </button>
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
