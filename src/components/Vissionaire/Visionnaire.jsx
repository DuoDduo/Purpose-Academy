import React from "react";
import "./Visionnaire.css";
import academyImage from "../../assets/academy.jpg"; // Update with actual image
import visionnaireImage from "../../assets/pflo.jpg"; // Update with actual image

const Visionnaire = () => {
  return (
    <div className="about-section visionnaire">
      {/* About the Academy */}
      <div className="about-card">
        <div className="about-image">
          <img src={academyImage} alt="Purpose Academy" />
        </div>
        <div className="about-content">
          <h2>About School of Purpose</h2>
          <p>
          The School of Purpose (SOP) is a divinely inspired ministry dedicated to helping individuals discover and fulfill their God-given purpose. It is structured into two key divisions:<br></br>

          <strong>Purpose Academy</strong> – A structured platform designed to provide in-depth teachings, mentorship, and guidance on Purpose Discovery, Fulfillment, and Restoration to Your Originality.

          </p>
          <p>
          <strong>Heaven on Earth</strong> – The ministry arm of SOP, dedicated to fostering divine encounters through worship, prophetic ministrations, and healing services. It also houses the Purpose Clubs, which provide tailored mentorship for different groups: Singles, Children and teenagers and Couples . <br></br>
          Through SOP, lives are transformed, destinies are realigned, and individuals are empowered to fulfill their God-given purpose.

          </p>
        </div>
      </div>

      {/* About the Visionnaire */}
      <div className="about-card reverse">
        <div className="about-content">
          <h2>About the Visionnaire</h2>
          <p>
          Pastor Mrs. Funmilola Omobowoje, fondly known as Pastor Flo', is a highly respected mentor, coach, and visionary leader dedicated to helping individuals discover, embrace, and fulfil their purpose. Since founding the School of Purpose in 2016, she has empowered people from diverse backgrounds through Purpose Academy (Junior & Senior), mentorship programs, Purpose Clubs, retreats, outreaches, among others.

 <br></br>
  
  
 With a passion for personal growth and transformation, Pastor Flo' has mentored hundreds locally and internationally, guiding them to refine their focus, develop their talents, and navigate life with clarity and direction. Her holistic approach emphasizes values, strengths, and aspirations, helping individuals live authentically and create meaningful impact.

          
          </p>
          <p>
          Beyond personal development, Pastor Flo' is a dynamic preacher with a divine mandate to ignite hearts for God. She ministers under the leading of the Holy Spirit with prophetic insight and healing grace, ushering people into deeper intimacy with God and their life’s purpose.
          {/* <br></br> A true Originality Miner, she helps individuals uncover and refine their uniqueness, equipping them to make a lasting impact in their world. */}

  
          </p>
        </div>
        <div className="about-image">
          <img src={visionnaireImage} alt="The Visionnaire" />
        </div>
      </div>
    </div>
  );
};

export default Visionnaire;
