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
          <h2>About the Academy</h2>
          <p>
          The School of Purpose Academy is a structured  avenue to delve into the subject of Purpose Discovery and Fulfilment. 
          It is an arm of the School of Purpose where there is an expansion of what the Ministry represents (Purpose Discovery and Fulfilment).

          </p>
          <p>
          Purpose Academy is the perfect destination where major life questions are unraveled, empowering you to discover your true identity and purpose; and to become the best version of who God made YOU to be.

          </p>
        </div>
      </div>

      {/* About the Visionnaire */}
      <div className="about-card reverse">
        <div className="about-content">
          <h2>About the Visionnaire</h2>
          <p>
            Pastor Mrs. Funmilola Omobowoje (PFLO') is the Visionnaire of Purpose Academy. She is a passionate leader committed to 
            empowering individuals with education and mentorship. With years of experience 
            in education, leadership, and career development, she believes in the 
            power of knowledge to create lasting impact.
          </p>
          <p>
            The mission is to cultivate an environment where people are inspired to grow, 
            innovate, and lead with purpose. Through Purpose Academy, she aims to bridge the 
            gap between talent and opportunity, transforming lives one learner at a time.
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
