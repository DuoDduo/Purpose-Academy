import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ProgramModal.css";
// import white_arrow from "../../assets/white-arrow.png";
import creative_img from "../../assets/pcreative.jpg";
import junior_img from "../../assets/jacademy.png";
import oneonone_img from "../../assets/one.jpg";
import main_img from "../../assets/cohort-4.png";

const ProgramModal = ({ programKey, onClose }) => {
  const [result, setResult] = useState("");
  const formRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    setResult("Submitting...");

    const serviceID = "service_h1jcos9";
    const adminTemplateID = "template_b58ell6";
    const userTemplateID = "template_1lmbivn";
    const publicKey = "a2TQqhu_uUo85MHKA";

    const form = formRef.current;

    // Send to admin
    emailjs
      .sendForm(serviceID, adminTemplateID, form, publicKey)
      .then(() => {
        // Send confirmation to user
        emailjs
          .send(
            serviceID,
            userTemplateID,
            {
              name: form.name.value,
              email: form.email.value,
              title: form.title.value,
              website_link: "https://www.schoolofpurpose-sop.com", // Replace with your real URL
              company_name: "Session with Flo",
            },
            publicKey
          )
          .then(() => {
            setResult("Your enquiry has been submitted! Please check your email.");
            form.reset();
          })
          .catch(() => {
            setResult("Message sent to admin, but confirmation failed.");
          });
      })
      .catch(() => {
        setResult("Something went wrong. Please try again.");
      });
  };

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
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSep2udqz1n9BwHiW7qdELuLHBw7RNKuwXMrSCbKBSR5UDKgGQ/viewform?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            Register Now
          </a>
        </>
      )
    },

    oneonone: {
      title: "One-on-One Session",
      image: oneonone_img,
      content: (
        <>
          <p>
            Are you ready to embark on a life-changing journey tailored just for you? Secure your spot now for an exclusive one-on-one virtual coaching session with Pastor (Mrs.) Funmilola Omobowoje (PFlo’), designed specifically to meet your unique needs and aspirations.
          </p>
          <p>
            This personalized session will provide you with deep insights, strategic guidance, and spiritual clarity to align with God’s original plan for your life. Together, we’ll uncover your true identity, refine your vision, and equip you with the tools to confidently walk in your divine purpose.
          </p>

          <h2>To make Enquiries, Kindly fill this form</h2>
          <form ref={formRef} className="contact-form" onSubmit={onSubmit}>
            {/* Hidden fields to pass meta data */}
            <input type="hidden" name="title" value="One-on-One Session" />
            <input type="hidden" name="website_link" value="https://www.schoolofpurpose-sop.com" />
            <input type="hidden" name="company_name" value="Purpose Academy" />
            <input type="hidden" name="to_email" value="sessionwithflo@gmail.com" /> {/* Admin receives */}

            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />

            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email" required />

            <label>Contact Number</label>
            <input type="tel" name="tel" placeholder="Enter your contact details" required />

            <label>Enquiry</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

            <button type="submit" className="btn">
              Submit Now 
            </button>
            <span className="form-result">{result}</span>
          </form>
        </>
      )
    },

    junior: {
  title: "Junior Academy",
  image: junior_img,
  content: (
    <>
      <p>
        The Junior Academy is designed to guide <strong>preteens and teenagers</strong> (ages 9–19) into a journey of purpose discovery and value formation from a young age.
      </p>
      <p>
        Through interactive teachings, relatable stories, creative activities, and guided discussions, students will explore their identity, understand godly values, and build confidence in who they are becoming.
      </p>
      <p>
        This program lays a strong spiritual and moral foundation in a fun, safe, and engaging virtual space.
      </p>
      <a href="#" className="btn">
        Register Now
      </a>
    </>
  )
},

main: {
  title: "Purpose Academy",
  image: main_img,
  content: (
    <>
      <p>
        The Purpose Academy is a <strong>13-week intensive virtual program</strong> for <strong>young adults and adults</strong> seeking to gain clarity, healing, and deep alignment with God’s original blueprint for their lives.
      </p>
      <p>
        It features transformational teachings, weekly assignments, personal development tasks, and direct mentorship — all structured to help you uncover your identity, refine your vision, and live a purpose-driven life.
      </p>
      <p>
        <strong>Note:</strong> Registration for the current cohort is closed. You can join the waitlist to be notified when the next cycle opens.
      </p>
      <a href="#" className="btn" style={{ backgroundColor: "#aaa", cursor: "not-allowed" }}>
        Registration Closed
      </a>
    </>
  )
}

  };

  const program = modalData[programKey];
  if (!program) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={program.image} alt={program.title} />
        <h3>{program.title}</h3>
        <div className="modal-body">{program.content}</div>
      </div>
    </div>
  );
};

export default ProgramModal;
