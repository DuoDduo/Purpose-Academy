import React from "react";
import "./Programs.css";
import { FaLaptopCode, FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";

const programsData = [
  {
    icon: <FaLaptopCode className="program-icon" />,
    title: "Purpose Academy",
    description: "An immersive learning experience to help you master tech skills and career development."
  },
  {
    icon: <FaChalkboardTeacher className="program-icon" />,
    title: "One-on-One Coaching",
    description: "Personalized mentorship and coaching sessions tailored to accelerate your growth."
  },
  {
    icon: <FaUserGraduate className="program-icon" />,
    title: "Junior Academy",
    description: "A program designed for young minds to develop foundational skills in technology."
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
