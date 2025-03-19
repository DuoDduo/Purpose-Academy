import React from "react";
import { motion } from "framer-motion";
import "./Programs.css";
import { FaBookOpen, FaUserTie, FaUserGraduate, FaChurch } from "react-icons/fa";

const programsData = [
  {
    icon: <FaBookOpen className="program-icon" />,
    title: "Purpose Academy",
    description: "Purpose Academy is the perfect destination where major life questions are unraveled, empowering you to discover your true identity and purpose; and to become the best version of who God made YOU to be."
  },
  {
    icon: <FaUserTie className="program-icon" />,
    title: "One-on-One Coaching",
    description: "Personalized mentorship and coaching sessions tailored to accelerate your growth."
  },
  {
    icon: <FaUserGraduate className="program-icon" />,
    title: "Junior Academy",
    description: "A program designed for older preteens and Teenagers to unlock their purpose and equip them for the future."
  },
  {
    icon: <FaChurch className="program-icon" />,
    title: "Heaven on Earth",
    description: "The Heaven on Earth program serves as the ministry extension of the School of Purpose (SOP), creating transformative spiritual experiences through worship, prophetic ministrations, healing services, and purpose clubs."
  }
];

const Programs = () => {
  return (
    <motion.div 
      className="programs"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {programsData.map((program, index) => (
        <motion.div 
          className="program-card" 
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <motion.div 
            className="program-icon-container"
            initial={{ rotateY: 180 }}
            whileHover={{ rotateY: 0, scale: 1.1 }}
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
