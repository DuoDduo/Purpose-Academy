import React from "react";
import { motion } from "framer-motion";
import "./Cohorts.css";
import gallery_1 from "../../assets/cohort-2.png";
import gallery_2 from "../../assets/cohort-3.jpg";
import gallery_3 from "../../assets/cohort-4.png";
import gallery_4 from "../../assets/junior.jpg";
import white_arrow from "../../assets/white-arrow.png";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

const Cohorts = () => {
  return (
    <div className="cohorts">
      <div className="gallery">
        {[gallery_3, gallery_2, gallery_4, gallery_1].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt=""
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          />
        ))}
      </div>
      <a href="https://forms.gle/V4zmFmwj2smdtjoAA" target="_blank" rel="noopener noreferrer">
        <motion.button
          className="btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Register Now <img src={white_arrow} alt="" />
        </motion.button>
      </a>
    </div>
  );
};

export default Cohorts;
