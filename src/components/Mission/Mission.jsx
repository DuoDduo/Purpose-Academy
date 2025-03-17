import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Mission.css";

const Mission = () => {
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreVision, setShowMoreVision] = useState(false);
  const [showMoreGoals, setShowMoreGoals] = useState(false);

  return (
    <div className="mission-vision-section">
      {/* Vision with Read More */}
      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Our Vision</h2>
        <p>
          The discovery and fulfilment of God's divine purpose is achieved through 
          the undiluted teachings of God's Word, Holy Spirit impartations, mentorship 
          classes, and other means revealed by God to bring about the fulfilment of 
          the divine mandate.
        </p>

        <AnimatePresence>
          {showMoreVision && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
            >
              The subject of purpose is all-encompassing, necessitating the need for 
              instruction, stability, direction, and empowerment in every area of life, 
              which in turn affects purpose fulfilment. Hence, School of Purpose focuses 
              on teachings, impartations, and mentorship in every aspect of life that 
              affects the fulfilment of Purpose. God's desire is for our lives to be 
              filled with His glory, reflecting heaven on earth, and securing our 
              eternal place with Him after our sojourn. <strong>This is the core 
              focus of the School of Purpose.</strong>
            </motion.p>
          )}
        </AnimatePresence>

        <motion.button
          className="read-more-btn"
          onClick={() => setShowMoreVision(!showMoreVision)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {showMoreVision ? "Read Less" : "Read More"}
        </motion.button>
      </motion.div>

      {/* Mission with Read More */}
      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2>Our Mission</h2>
        <p>
       <strong> Isaiah 61:1-4/Luke 4:18:</strong> The Spirit of the Lord is upon me, because he hath anointed me to preach 
          the gospel to the poor "He hath sent me to heal the brokenhearted, to preach deliverance to 
                the captives, and recovering of sight to the blind, to set at liberty 
                them that are bruised...
        </p>

        <AnimatePresence>
          {showMoreMission && (
            <>
              {/* <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
              
              </motion.p> */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <strong>Matthew 4:23</strong> - And Jesus went about all Galilee, teaching in their synagogues (indoor platforms), and 
                preaching the gospel of the kingdom (proclaiming the gospel via outdoor platforms) and 
                healing all manner of sickness and all manner of disease among the people.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <strong>Jeremiah 1:4-5: </strong>  (Purpose discovery and fulfilment) Then the word of the LORD came unto me, saying, 
                Before I formed thee in the belly, I knew thee; and before thou camest forth out of the womb I 
                sanctified thee, and I ordained thee a prophet unto the nations.

              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <strong>Jer 1:10: </strong>(Pulling down the old and building the new) see, I have this day set thee over the 
                nations and over the kingdoms, to root out, and to pull down, and to destroy, and to throw down, 
                to build , and to plant.
               <strong> (Raising and grooming in the prophetic to serve as prophets to the nations)</strong>

              </motion.p>
            </>
          )}
        </AnimatePresence>

        <motion.button
          className="read-more-btn"
          onClick={() => setShowMoreMission(!showMoreMission)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {showMoreMission ? "Read Less" : "Read More"}
        </motion.button>
      </motion.div>

      {/* Goals with Read More */}
      <motion.div
        className="section-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2>Our Goals</h2>
        <p>The primary goal of Purpose Academy is to facilitate individual’s discovery and 
        fulfilment of Purpose. We are committed to actualising the following;
        </p>
        <ul>
          <li>Raising Kingdom Generals</li>
          <li>Grooming from the base level to the genius, and from genius to the peak of kingdom impact
          </li>
          <li>Meeting you where you are but not leaving you there</li>
        </ul>

        <AnimatePresence>
          {showMoreGoals && (
            <>
              {/* <motion.ul
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <li>Making disciples of all nations</li>
                <li>Advancing the Kingdom of God through mentorship</li>
                <li>Fostering a collective chain of responsibility</li>
              </motion.ul> */}
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                Furthermore, Purpose Academy aims to play her role in advancing the Kingdom of God, 
                just as Jesus poured out Himself into His disciples, who in turn made countless 
                disciples, including YOU. <strong>The ultimate goal is to make disciples of all nations 
                through a collective chain of responsibility within each individual's sphere of influence.</strong>
              </motion.p>
            </>
          )}
        </AnimatePresence>

        <motion.button
          className="read-more-btn"
          onClick={() => setShowMoreGoals(!showMoreGoals)}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {showMoreGoals ? "Read Less" : "Read More"}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Mission;
