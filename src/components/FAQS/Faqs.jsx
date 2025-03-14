import React, { useState } from "react";
import "./Faqs.css"; // Import the CSS file
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons

const faqData = [
  {
    question: "Can you brief me about the academy?",
    answer:
      "Purpose Academy is the destination where profound life questions are answered, empowering YOU to discover your true identity and purpose, and enabling you to become the best version of who God made YOU to be.",
  },
  {
    question: "What is the class schedule like?",
    answer:
      "Classes will hold on a weekly basis. Specific day and time would be communicated to shortlisted candidates.",
  },
  {
    question: "How do I belong to the academy?",
    answer:
      "To become a part of the academy, you can enroll through the link https://tinyurl.com/SOPAcademy-Cohort-4 and await a notification email if you are shortlisted as a candidate using the email address you registered with.",
  },
  {
    question: "How is the academy funded? Is it free?",
    answer:
      "The academy will require payment of a token which would be communicated to you.",
  },
  {
    question: "Would classes be physical or virtual?",
    answer:
      "The academy is designed to be flexible, enabling participation of all and sundry. Therefore, all classes will be conducted virtually, removing any location barriers.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container faqs">
      {/* <h2 className="faq-title">Frequently Asked Questions</h2> */}

      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleFaq(index)}>
              {faq.question}
              {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            <div className={`faq-answer ${openIndex === index ? "show" : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <a
          href="https://faqabout.me/iam/purpose-academy"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn">See More</button>
        </a>
      </div>
    </div>
  );
};

export default Faqs;
