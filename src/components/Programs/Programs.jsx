import React from "react";
import "./Programs.css";
import { FaLaptopCode, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const programsData = [
  {
    icon: <FaLaptopCode className="program-icon" />,
    title: "Purpose Academy",
    description: "Purpose Academy is the perfect destination where major life questions are unraveled, empowering you to discover your true identity and purpose; and to become the best version of who God made YOU to be."

  },
  {
    icon: <FaChalkboardTeacher className="program-icon" />,
    title: "One-on-One Coaching",
    description: "Personalized mentorship and coaching sessions tailored to accelerate your growth."
  },
  {
    icon: <FaUserGraduate className="program-icon" />,
    title: "Junior Academy",
    description: "A program designed for older preteens and Teenagers to unlock their purpose and equip them for the future."
  }
];

const Programs = () => {
  return (
    <div className="programs">
      {programsData.map((program, index) => (
        <div className="program-card" key={index}>
          <div className="program-icon-container">{program.icon}</div>
          <div className="program-content">
            <h3>{program.title}</h3>
            <p>{program.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Programs;
