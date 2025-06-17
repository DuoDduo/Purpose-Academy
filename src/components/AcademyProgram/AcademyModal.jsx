import React from "react";
import "./ProgramModal.css";
import white_arrow from "../../assets/white-arrow.png";
import creative_img from "../../assets/pcreative.jpg";
import junior_img from "../../assets/junior.jpg";
import cohort_img from "../../assets/cohort-4.png";

const modalData = {
  creative: {
    title: "Purpose Creative Academy",
    image: creative_img,
    content: (
      <>
        <p>Lights, mic, action – let's unlock your creative voice! Your first step into the world of speaking, performing, and purposeful expression.</p>
        <ul>
          <li>Public Speaking</li>
          <li>Broadcasting (audio and video)</li>
          <li>Jingles</li>
          <li>Acting</li>
        </ul>
        <p>Perfect for aspiring voices, vibrant personalities, emerging media talents, and creative minds who want to speak, perform, and shine with purpose.</p>
        <p><strong>Virtual Only:</strong> All training sessions will be completely virtual.</p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSep2udqz1n9BwHiW7qdELuLHBw7RNKuwXMrSCbKBSR5UDKgGQ/viewform?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn">
          Register Now <img src={white_arrow} alt="" />
        </a>
      </>
    )
  },
  oneonone: {
    title: "One-on-One Session",
    image: cohort_img,
    content: (
      <>
        <p>Get personal mentorship and purpose discovery direction from Pastor Flo in private virtual sessions tailored to your life’s calling.</p>
        <a href="#" className="btn">
          Register Now <img src={white_arrow} alt="" />
        </a>
      </>
    )
  },
  junior: {
    title: "Junior Academy",
    image: junior_img,
    content: (
      <>
        <p>Interactive teachings and fun learning for pre-teens to discover their identity and God-given values early.</p>
        <a href="#" className="btn">
          Register Now <img src={white_arrow} alt="" />
        </a>
      </>
    )
  },
  main: {
    title: "Main Academy",
    image: cohort_img,
    content: (
      <>
        <p>A transformative program for teens and young adults to master identity, vision, and purpose.</p>
        <a href="#" className="btn">
          Register Now <img src={white_arrow} alt="" />
        </a>
      </>
    )
  },
};

const ProgramModal = ({ programKey, onClose }) => {
  const program = modalData[programKey];
  if (!program) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={program.image} alt={program.title} />
        <h3>{program.title}</h3>
        <div className="modal-body">{program.content}</div>
      </div>
    </div>
  );
};

export default ProgramModal;
