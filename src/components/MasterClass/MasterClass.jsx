import React from "react";
import "./MasterClass.css";
import bannerImage from "../../assets/masterclass.jpg";

const MasterClass = () => {
  return (
    <section className="masterclass-wrapper">
      <div className="masterclass-card">
        <div className="masterclass-inner">
          <div className="masterclass-image">
            <img src={bannerImage} alt="Masterclass" />
          </div>
          <div className="masterclass-text">
            <h3>Lead with Purpose. Live with Legacy.</h3>
            <p className="highlight">
              A 3-day virtual leadership experience for:
              <br />
              <strong>Professionals • Executives • Founders • Visionary Leaders</strong>
            </p>
            <p>
              Step into the next level of leadership — rooted in purpose and designed to create lasting impact.
            </p>
            <ul className="masterclass-list">
              <li>Elevate your purposeful leadership</li>
              <li>Inspire and mentor others</li>
              <li>Lead a life of legacy</li>
            </ul>

            <div className="enrollment-box">
              <p className="date">Date: 10th – 12th July, 2025</p>
              <p className="note">Enrollment closes: 8th July, 2025</p>
              <a
                href="https://forms.gle/QKRWMbQc82cgVYvo6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterClass;
