import React from "react";
import "./AboutAcademy.css";
import aboutImage from "../../assets/academy-1.jpg"; // Replace with your actual image

const AboutAcademy = () => {
  return (
    <section className="about-academy">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About the Academy" />
        </div>
        <div className="about-content">
          {/* <h2>About Purpose Academy</h2> */}
          <p>
            Purpose Academy is a life-transforming learning hub committed to helping children, teenagers, and young adults discover who they are, why they exist, and how to maximize their gifts and identity in a God-centered way.
          </p>
          <p>
            Through creative, spiritual, and purpose-driven programs, we provide an environment where participants are empowered to grow in character, leadership, and personal development.
          </p>
          <p>
            Our programs are fun, interactive, and designed to meet individuals at different stages of life—from preteens in the Junior Academy to aspiring creatives and one-on-one mentees seeking clarity and direction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAcademy;
