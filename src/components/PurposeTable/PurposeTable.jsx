import React from "react";
import { Link, useLocation } from "react-router-dom";
import sopLogo from "../../assets/soplogo.png"; // replace with actual logo paths
import hoeLogo from "../../assets/hoe.png";
import academyLogo from "../../assets/plogo.png";
import "./PurposeTable.css"
// import "./Visionnaire.css";

const PurposeTable = () => {
  const location = useLocation();
  const isAcademyPage = location.pathname === "/academy";

  return (

    
    <div className="about-section">
      <div className="purpose-table">
         {/* School of Purpose Card */}
        <div className="purpose-card">
          <img src={sopLogo} alt="School of Purpose" className="purpose-logo" />
          <h3>School of Purpose</h3>
          <p>
            SOP is a divinely inspired ministry dedicated to helping individuals discover and fulfill their God-given purpose, realigning destinies and transforming lives. 
            It is structured into two key divisions:<br>
            </br>
            <strong>Purpose Academy </strong> and <strong>Heaven on Earth </strong>
          </p>
          <Link to="/about" className="btn read-more-btn">
            Learn More
          </Link>
        </div>
        {/* Purpose Academy Card */}
        <div className="purpose-card">
          <img src={academyLogo} alt="Purpose Academy" className="purpose-logo" />
          <h3>Purpose Academy</h3>
          <p>
            A structured platform designed to provide in-depth teachings, mentorship, and guidance on Purpose Discovery, Fulfillment, and Restoration to Your Originality.
          </p>
          <Link
            to={isAcademyPage ? "/about" : "/academy"}
            className="btn read-more-btn"
          >
            {isAcademyPage ? "Learn More" : "Learn More"}
          </Link>
        </div>

        {/* Heaven on Earth Card */}
        <div className="purpose-card">
          <img src={hoeLogo} alt="Heaven on Earth" className="purpose-logo" />
          <h3>Heaven on Earth</h3>
          <p>
            The ministry arm of SOP, dedicated to divine encounters through worship, prophetic ministrations, healing services, and Purpose Clubs for Singles, Teens, Children, and Couples.
          </p>
          <Link to="/about#heaven-on-earth" className="btn read-more-btn">
            Explore Heaven on Earth
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PurposeTable;
