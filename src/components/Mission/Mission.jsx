import React, { useState } from "react";
import "./Mission.css";

const Mission = () => {
  const [showMoreMission, setShowMoreMission] = useState(false);
  const [showMoreVision, setShowMoreVision] = useState(false);
  const [showMoreGoals, setShowMoreGoals] = useState(false);

  return (
    <div className="mission-vision-section">
      {/* Vision with Read More */}
      <div className="section-card">
        <h2>Our Vision</h2>
        <p>
          The discovery and fulfilment of God's divine purpose is achieved through 
          the undiluted teachings of God's Word, Holy Spirit impartations, mentorship 
          classes, and other means revealed by God to bring about the fulfilment of 
          the divine mandate.
        </p>

        {showMoreVision && (
          <p>
            The subject of purpose is all-encompassing, necessitating the need for 
            instruction, stability, direction, and empowerment in every area of life, 
            which in turn affects purpose fulfilment. Hence, School of Purpose focuses 
            on teachings, impartations, and mentorship in every aspect of life that 
            affects the fulfilment of Purpose. God's desire is for our lives to be 
            filled with His glory, reflecting heaven on earth, and securing our 
            eternal place with Him.
          </p>
        )}

        <button className="read-more-btn" onClick={() => setShowMoreVision(!showMoreVision)}>
          {showMoreVision ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Mission with Read More */}
      <div className="section-card">
        <h2>Our Mission</h2>
        <p>
          "The Spirit of the Lord is upon me, because he hath anointed me to preach 
          the gospel to the poor..."
        </p>

        {showMoreMission && (
          <>
            <p>
              "He hath sent me to heal the brokenhearted, to preach deliverance to 
              the captives, and recovering of sight to the blind, to set at liberty 
              them that are bruised..."
            </p>
            <p><strong>Matthew 4:23</strong> - Teaching, preaching, and healing all manner of sickness.</p>
            <p><strong>Jeremiah 1:4-5</strong> - Purpose discovery and fulfilment.</p>
          </>
        )}

        <button className="read-more-btn" onClick={() => setShowMoreMission(!showMoreMission)}>
          {showMoreMission ? "Read Less" : "Read More"}
        </button>
      </div>

      {/* Goals with Read More */}
      <div className="section-card">
        <h2>Our Goals</h2>
        <ul>
          <li>Raising Kingdom Generals</li>
          <li>Grooming from base level to peak impact</li>
          <li>Meeting you where you are but not leaving you there</li>
        </ul>

        {showMoreGoals && (
          <>
            <ul>
              <li>Making disciples of all nations</li>
              <li>Advancing the Kingdom of God through mentorship</li>
              <li>Fostering a collective chain of responsibility</li>
            </ul>
            <p>
              Furthermore, Purpose Academy aims to play its role in advancing the Kingdom of God, 
              just as Jesus poured out Himself into His disciples, who in turn made countless 
              disciples, including YOU. The ultimate goal is to make disciples of all Nations 
              through a collective chain of responsibility within each individual's sphere of influence.
            </p>
          </>
        )}

        <button className="read-more-btn" onClick={() => setShowMoreGoals(!showMoreGoals)}>
          {showMoreGoals ? "Read Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default Mission;
