import React from 'react';
import { motion } from 'framer-motion';
import "./Hero.css";
import white_arrow from "../../assets/white-arrow.png";

const Hero = () => {
  return (
    <div className='hero container'>
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
          "Disocver Your Purpose, Fuel Your Impact."
        </motion.h1>


        {/* <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          "Disocver Your Purpose. Fuel Your Impact."
        </motion.p> */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
        Enrollment for the next cohort is ongoing! Secure your spot before registration closes on <strong>30th March, 2025</strong>.  
        </motion.p>
        <motion.a 
          href="https://forms.gle/V4zmFmwj2smdtjoAA" 
          target='_blank'
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
