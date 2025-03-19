import React from "react";
import { motion } from "framer-motion";
import "./Mission.css";

const Mission = () => {
  return (
    <div className="mission-vision-section">
      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Vision</h2>
        <p>
          To raise kingdom leaders who discover, develop, and deploy their God-given purpose and potentials, transforming their spheres and mountains of influence by establishing the mandate of heaven on earth. (Jer 1:4-5, Gen 1-2)
        </p>
      </motion.div>

      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Our Mission</h2>
        <p>
          To teach, train, coach, and mentor kingdom leaders through a holistic approach, connecting them with their originality, unlocking and deploying their potentials, and equipping them to fulfill their purpose.
        </p>
      </motion.div>

      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Our Goals</h2>
        <p> To embed purpose-driven education in schools, establish a comprehensive campus for learning and mentorship, and expand the "Heaven on Earth" program globally to promote purposeful living through media, technology, and conventions.</p>
        {/* <ul>
          <li>Raising Kingdom Generals</li>
          <li>Grooming from the base level to the genius, and from genius to the peak of kingdom impact</li>
          <li>Meeting you where you are but not leaving you there</li>
        </ul> */}
      </motion.div>

      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2>Our Values</h2>
        <p>
          <strong>GILEADC:</strong>
        </p>
        <ul>
          <li>G - Growth</li>
          <li>I - Intimacy/Initiative</li>
          <li>L - Love/Loyalty</li>
          <li>E - Excellence</li>
          <li>A - Accountability</li>
          <li>D - Diligence/Discipline</li>
          <li>C - Commitment</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Mission;
