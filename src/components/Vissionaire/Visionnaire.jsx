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
          Purpose Academy is a structured  avenue to delve into the subject of Purpose Discovery and Fulfilment. 
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
          Pastor Mrs Funmilola Omobowoje, fondly called Pastor Flo', is a dynamic and revelational preacher of God's Word with a mandate of setting the hearts of people to knowing and building personal relationships with God. <br></br>
  
  
          She is the visionaire  of School of Purpose - (SOP) a Ministry created with the mandate of impacting lives for the discovery and fulfillment of purpose, knowing God experientially through the Ministry of the Holy Spirit, Worship and prophetic and healing encounters which in every month, holds virtually and physically.
          
          </p>
          <p>
          Pastor Mrs  Funmilola Omobowoje is a woman of God who has mastered the dynamics of hosting and introducing God’s presence and effortlessly demonstrates the power and potency of God’s Word. She is happily married to her loving husband, Pastor Temitayo Omobowoje and they both serve as pastors in the Redeemed Christian Church of God.
  
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
