import React, { useState } from 'react';
import "./About.css";
import about_img from "../../assets/one.jpg";
import white_arrow from "../../assets/white-arrow.png";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "d0d75211-cae8-4f89-8e24-a7e88cf65768");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      event.target.reset();
    } else {
      setResult("Error: " + data.message);
    }
  };

  return (
    <div>
      <div className='about'>
        <div className="about-left">
          <img src={about_img} alt="" className='about-img' />
        </div>
        <div className="about-right">
          <h3>Exclusive One-on-One Coaching</h3>
          <br />
          {/* <h2>Navigate Your Life’s Path with Confidence</h2> */}
          <p>Are you ready to embark on a life-changing journey tailored just for you? Secure your spot now for an exclusive one-on-one virtual coaching session with Pastor (Mrs.) Funmilola Omobowoje (PFlo’), designed specifically to meet your unique needs and aspirations.</p> 
          <p>This personalized session will provide you with deep insights, strategic guidance, and spiritual clarity to align with God’s original plan for your life. Together, we’ll uncover your true identity, refine your vision, and equip you with the tools to confidently walk in your divine purpose.</p>
          <button className='btn' onClick={() => setIsModalOpen(true)}>Enquire Now <img src={white_arrow} alt="" /></button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2 className='modal-title'>Contact Us</h2>
            <p className='modal-sub-title'>Have questions or need more details? Fill out the form below, and we’ll get back to you as soon as possible.</p>
            <form className="contact-form" onSubmit={onSubmit}>
              <label>Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />

              <label>Email Address</label>
              <input type="email" name="email" placeholder="Enter your email" required />

              <label>Contact Number</label>
              <input type="tel" name="tel" placeholder="Enter your contact details" required />

              <label>Enquiry</label>
              <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

              <button type="submit" className="btn">Submit Now <img src={white_arrow} alt="" /></button>
              <span>{result}</span>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
