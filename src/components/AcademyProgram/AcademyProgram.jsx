import React, { useState } from "react";
import ProgramModal from "./AcademyModal";
import "./AcademyProgram.css";

// ✅ Import images properly
import imageCreative from "../../assets/pcreative.jpg";
import imageOneOnOne from "../../assets/one.jpg";
import imageJunior from "../../assets/jacademy.png";
import imageMain from "../../assets/cohort-4.png";

const programs = [
  {
    title: "Purpose Creative Academy",
    description: "A hands-on program for teens exploring creative talents like media, design, and digital skills in line with purpose.",
    image: imageCreative,
    key: "creative",
  },
  {
    title: "One-on-One Session",
    description: "Personalized mentorship and purpose discovery sessions with Pastor Flo to gain clarity and direction.",
    image: imageOneOnOne,
    key: "oneonone",
  },
  {
    title: "Junior Academy",
    description: "Empowering pre-teens to discover identity, values, and purpose through interactive teachings and fun learning.",
    image: imageJunior,
    key: "junior",
  },
  {
    title: "Main Academy",
    description: "A transformative cohort-based program for teens and young adults on identity, vision, and living on purpose.",
    image: imageMain,
    key: "main",
  },
];

const AcademyProgram = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const openModal = (key) => {
    setSelectedProgram(key);
  };

  const closeModal = () => {
    setSelectedProgram(null);
  };

  return (
    <section className="purpose-section">
      {/* <div className="purpose-header">
        <h2>Explore Our Purpose Programs</h2>
        <p>Empowering every generation to discover and walk in purpose.</p>
      </div> */}

      <div className="program-grid">
        {programs.map((program, index) => (
          <div
            className="program-card"
            key={index}
            onClick={() => openModal(program.key)}
          >
            <img src={program.image} alt={program.title} />
            <div className="card-content">
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <button className="register-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>

      {selectedProgram && (
        <ProgramModal programKey={selectedProgram} onClose={closeModal} />
      )}
    </section>
  );
};

export default AcademyProgram;
