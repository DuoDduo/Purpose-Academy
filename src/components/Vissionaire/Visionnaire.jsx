// import React from 'react'
// import about_img from "../../assets/pflo.jpg"
// import "./Visionnaire.css"

// const Visionnaire = () => {
//   return (
 
//          <div className='about' >
                    
//                 <div className="about-left">
//                     <img src={about_img} alt=""className='about-img' />
//                     {/* <img src={play_icon} alt="" className='play-icon'/> */}
//                 </div>
//                 <div className="about-right">
//                     <h3>
//                     PASTOR MRS FUNMILOLA OMOBOWOJE
//                     </h3>
//                     <h2> VISIONNAIRE</h2>
//                     <p>School of Purpose Academy is is a structured  avenue to delve into the subject of Purpose Discovery and Fulfilment. 
//                         It is an arm of the School of Purpose where there is an expansion of what the Ministry represents (Purpose Discovery and Fulfilment).
//                     </p>
//                 </div>
    
//         </div>
//   )
// }

// export default Visionnaire
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
            Purpose Academy is a dynamic learning hub dedicated to equipping individuals 
            with the skills, knowledge, and mentorship they need to excel in their careers. 
            Our programs are designed to be industry-relevant, practical, and transformational.
          </p>
          <p>
            Whether you are a beginner or an experienced professional, our structured courses 
            and hands-on training will help you reach new heights. Join us and be part of a 
            community that values learning, growth, and purpose.
          </p>
        </div>
      </div>

      {/* About the Visionnaire */}
      <div className="about-card reverse">
        <div className="about-content">
          <h2>About the Visionnaire</h2>
          <p>
            The visionary behind Purpose Academy is a passionate leader committed to 
            empowering individuals with education and mentorship. With years of experience 
            in education, leadership, and career development, our founder believes in the 
            power of knowledge to create lasting impact.
          </p>
          <p>
            Their mission is to cultivate an environment where people are inspired to grow, 
            innovate, and lead with purpose. Through Purpose Academy, they aim to bridge the 
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
