import React from "react";
import "./AboutHeaven.css"
import aboutImage from "../../assets/academy-1.jpg";

const AboutHeaven = () => {
 return (
     <section className="about-academy">
       <div className="about-container">
         <div className="about-image">
           <img src={aboutImage} alt="About the Academy" />
         </div>
         <div className="about-content">
           {/* <h2>About Purpose Academy</h2> */}
           <p>
              Heaven On Earth is more than just a ministry; it's a movement
            dedicated to transforming lives through the power of faith,
            community, and divine purpose. Through spirit-filled gatherings,
            dynamic teachings, and outreach initiatives, we create
            environments where heaven meets earth and lives are changed.
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

export default AboutHeaven;
