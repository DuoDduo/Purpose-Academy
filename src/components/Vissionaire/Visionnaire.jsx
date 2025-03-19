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
          Pastor Mrs. Funmilola Omobowoje, fondly called Pastor Flo, is a dynamic and revelational preacher of God's Word, committed to guiding individuals toward a deeper personal relationship with God. She carries a divine mandate to set the hearts of people on fire for God, inspiring them to know Him intimately and fulfill their God-ordained assignments.
 <br></br>
  
  
 She is widely recognized for her ability to usher in God's presence and demonstrate the transformative power of His Word effortlessly. Through her ministry, countless lives have been transformed as she ministers under the leading of the Holy Spirit with prophetic insight and healing grace.

          
          </p>
          <p>
          Pastor Flo is happily married to her loving husband, Pastor Temitayo Omobowoje, and together, they serve as pastors in the Redeemed Christian Church of God.
  
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
