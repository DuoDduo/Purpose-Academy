import React from 'react';
import { motion } from 'framer-motion';
import "./Hero.css";
import white_arrow from "../../assets/white-arrow.png";

const Hero = () => {
  return (
    <div className='hero container'>
      <motion.div 
        className="hero-text"
        initial={{ opacity: 0, y: 50 }} // Start invisible and slightly lower
        animate={{ opacity: 1, y: 0 }} // Fade in and move up
        transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Unlock Your Potential!
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Join the next cohort of Purpose Academy and take the first step toward a brighter future.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Enrollment Now Open! Don't miss out— Register today as enrolment closes 30th March 2025 and transform your journey!
        </motion.p>

        <motion.a 
          href="https://forms.gle/V4zmFmwj2smdtjoAA" 
          target='blank'
          initial={{ opacity: 0, scale: 0.8 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <button className='btn'>
            Register Now <img src={white_arrow} alt="arrow" />
          </button>
        </motion.a>

      </motion.div>
    </div>
  );
}

export default Hero;
