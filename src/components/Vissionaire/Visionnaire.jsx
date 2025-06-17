import React from "react";
import visionnaireImage from "../../assets/pflo.jpg";
import "./Visionnaire.css";

const Visionnaire = () => {
  return (
    <section className="visionnaire-section">
      <div className="visionnaire-wrapper">
        <div className="visionnaire-image">
          <img src={visionnaireImage} alt="Pastor Funmilola Omobowoje (Pastor Flo')" />
        </div>
        <div className="visionnaire-content">
          {/* <h2>Meet the Visionnaire</h2> */}
          <p>
            Pastor Mrs. Funmilola Omobowoje, fondly known as Pastor Flo', is a highly respected mentor, coach, and visionary leader dedicated to helping individuals discover, embrace, and fulfil their purpose. Since founding the School of Purpose in 2016, she has empowered people from diverse backgrounds through Purpose Academy (Junior & Senior), mentorship programs, Purpose Clubs, retreats, outreaches, and more.
          </p>
          <p>
            With a passion for personal growth and transformation, Pastor Flo' has mentored hundreds locally and internationally, guiding them to refine their focus, develop their talents, and navigate life with clarity and direction.
          </p>
          <p>
            Beyond personal development, Pastor Flo' is a dynamic preacher with a divine mandate to ignite hearts for God. She ministers under the leading of the Holy Spirit with prophetic insight and healing grace, ushering people into deeper intimacy with God and their life’s purpose.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Visionnaire;
