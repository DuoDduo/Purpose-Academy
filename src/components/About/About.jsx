import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      body: formData,
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
      <div className="about">
        {/* Left Image Animation */}
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={about_img} alt="" className="about-img" />
        </motion.div>

        {/* Right Content Animation */}
        <motion.div
          className="about-right"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <h3>EXCLUSIVE ONE-ON-ONE COACHING</h3>
          <h2>Discover Your Unique Life Journey with PFlo'</h2>
          <p>
            Are you ready to fulfill your destiny? Register now for a transformative virtual coaching session with PFlo!
          </p>
          <p>
            Join Pastor (Mrs) Funmilola Omobowoje (PFlo') for an exclusive one-on-one virtual coaching session. Discover and
            deploy the tools needed to fulfill God's original plan through your life's unique journey.
          </p>

          {/* Button Animation */}
          <motion.button
            className="btn"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setIsModalOpen(true)}
          >
            Enquire Now <img src={white_arrow} alt="" />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal Animation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal-overlay"
            onClick={() => setIsModalOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <span className="close-button" onClick={() => setIsModalOpen(false)}>
                &times;
              </span>
              <h2 className="modal-title">Contact Us</h2>
              <p className="modal-sub-title">Have questions? Fill out the form below.</p>

              <form className="contact-form" onSubmit={onSubmit}>
                <label>Name</label>
                <input type="text" name="name" placeholder="Enter your name" required />

                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email" required />

                <label>Contact Number</label>
                <input type="tel" name="tel" placeholder="Enter your contact details" required />

                <label>Enquiry</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

                <motion.button
                  type="submit"
                  className="btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Submit Now <img src={white_arrow} alt="" />
                </motion.button>
                <span>{result}</span>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
