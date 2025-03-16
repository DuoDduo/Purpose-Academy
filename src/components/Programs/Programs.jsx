import React from "react";
import { motion } from "framer-motion";
import "./Programs.css";
import { FaLaptopCode, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const programsData = [
  {
    icon: <FaLaptopCode className="program-icon" />,
    title: "Purpose Academy",
    description: "Purpose Academy is the perfect destination where major life questions are unraveled, empowering you to discover your true identity and purpose; and to become the best version of who God made YOU to be."
  },
  {
    icon: <FaChalkboardTeacher className="program-icon" />,
    title: "One-on-One Coaching",
    description: "Personalized mentorship and coaching sessions tailored to accelerate your growth."
  },
  {
    icon: <FaUserGraduate className="program-icon" />,
    title: "Junior Academy",
    description: "A program designed for older preteens and Teenagers to unlock their purpose and equip them for the future."
  }
];

const Programs = () => {
  return (
    <motion.div 
      className="programs"
      initial={{ opacity: 0, y: 50 }} // Fade in and slide up
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {programsData.map((program, index) => (
        <motion.div 
          className="program-card" 
          key={index}
          initial={{ opacity: 0, scale: 0.8 }} // Start smaller and invisible
          whileInView={{ opacity: 1, scale: 1 }} // Animate when in view
          viewport={{ once: true, amount: 0.3 }} // Ensures smooth appearance
          transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered animation
        >
          <motion.div 
            className="program-icon-container"
            initial={{ rotateY: 180 }} // Flip effect
            whileHover={{ rotateY: 0, scale: 1.1 }} // Unflip & scale up on hover
            transition={{ duration: 0.5 }}
          >
            {program.icon}
          </motion.div>
          <div className="program-content">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Programs;
