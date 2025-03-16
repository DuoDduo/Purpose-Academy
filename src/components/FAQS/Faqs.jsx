import React, { useState } from "react";
import "./Faqs.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Can you brief me about the academy?",
    answer:
      "Purpose Academy is the destination where profound life questions are answered, empowering YOU to discover your true identity and purpose, and enabling you to become the best version of who God made YOU to be.",
  },
  {
    question: "How do I belong to the academy?",
    answer:
      "To become a part of the academy, you can enroll through the link https://forms.gle/V4zmFmwj2smdtjoAA and await a notification email if you are shortlisted.",
  },
  {
    question: "How do I know more about the academy?",
    answer:
      "An orientation exercise will be organized for shortlisted candidates. This session will provide detailed information about the academy and its offers.",
  },
  {
    question: "How do I join the class?",
    answer:
      "You will be given access to the class after accepting the admission offer following the orientation exercise.",
  },
  {
    question: "Can children and teenagers enroll for the academy too?",
    answer:
      "Absolutely! Purpose discovery and fulfillment know no age limit. Junior Academy for children and younger teenagers will commence during the long vacation in 2025. Teenagers in higher institutions can enroll for the April 2025 Cohort, while those in secondary school are advised to join the Junior Academy.",
  },
  {
    question: "Would classes be physical or virtual?",
    answer:
      "The academy is designed to be flexible and inclusive. All classes will be conducted virtually, removing location barriers.",
  },
  {
    question: "What platform would be used for the class?",
    answer:
      "Classes will be held via a Telegram Group. Additionally, Google Classroom and Google Slides will be used for assignments and reports.",
  },
  {
    question: "How is the academy funded? Is it free?",
    answer:
      "The academy requires a small commitment, which will be communicated to you.",
  },
  {
    question: "Is the program going to be certified?",
    answer:
      "A Certificate of Completion (soft copy) will be issued after the internship. However, in purpose discovery, learning never truly ends.",
  },
  {
    question: "What are the requirements to be a part of the academy?",
    answer: (
      <ul>
        <li>✅ Interest and commitment to personal growth.</li>
        <li>✅ Attendance at the orientation session.</li>
        <li>✅ Access to an internet-enabled device.</li>
        <li>✅ Open-mindedness to new perspectives.</li>
        <li>✅ Basic English proficiency.</li>
        <li>✅ Willingness to invest time in learning.</li>
        <li>✅ Respect for others and adherence to guidelines.</li>
        <li>✅ Small financial commitment for specialized resources.</li>
        <li>✅ A positive, growth-oriented mindset.</li>
      </ul>
    ),
  },
  {
    question: "What is the class schedule like?",
    answer:
      "Classes will be held weekly, with specific days and times communicated to shortlisted candidates.",
  },
  {
    question: "Who organized the academy?",
    answer:
      "The academy is a divine vision birthed by God through Pastor Mrs. Funmilola Omobowoje (Flo'), the Visionaire of the School of Purpose.",
  },
  {
    question: "Will messages be available after the academy?",
    answer:
      "Yes, recorded audio sessions will be available in the classroom after each class.",
  },
];

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="faq-container faqs">
      <div className="faq-list">
        {faqData.slice(0, showAll ? faqData.length : 5).map((faq, index) => (
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
        <button className="btn" onClick={toggleShowAll}>
          {showAll ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};

export default Faqs;
