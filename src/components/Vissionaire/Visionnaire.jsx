import React from "react";
import { motion } from "framer-motion";
import "./Visionnaire.css";
import academyImage from "../../assets/academy.jpg";
import visionnaireImage from "../../assets/pflo.jpg";

const Visionnaire = () => {
  return (
    <div className="about-section visionnaire">
      {/* About the Academy */}
      <motion.div 
        className="about-card"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={academyImage} alt="Purpose Academy" />
        </motion.div>
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About the Academy</h2>
          <p>
            The School of Purpose Academy is a structured avenue to delve into the subject of Purpose Discovery and Fulfilment.
            It is an arm of the School of Purpose where there is an expansion of what the Ministry represents (Purpose Discovery and Fulfilment).
          </p>
          <p>
            Purpose Academy is the perfect destination where major life questions are unraveled, empowering you to discover your true identity and purpose; and to become the best version of who God made YOU to be.
          </p>
        </motion.div>
      </motion.div>

      {/* About the Visionnaire */}
      <motion.div 
        className="about-card reverse"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2>About the Visionnaire</h2>
          <p>
            Pastor Mrs. Funmilola Omoboje (PFLO') is the Visionnaire of Purpose Academy. She is a passionate leader committed to
            empowering individuals with education and mentorship. With years of experience
            in education, leadership, and career development, she believes in the
            power of knowledge to create lasting impact.
          </p>
          <p>
            The mission is to cultivate an environment where people are inspired to grow,
            innovate, and lead with purpose. Through Purpose Academy, she aims to bridge the
            gap between talent and opportunity, transforming lives one learner at a time.
          </p>
        </motion.div>
        <motion.div 
          className="about-image"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img src={visionnaireImage} alt="The Visionnaire" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Visionnaire;
