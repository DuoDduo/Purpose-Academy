import React from 'react';
import "./Contact.css";
import msg_icon from "../../assets/chat-bubble.png";
import mail_icon from "../../assets/email.png";
import phone_icon from "../../assets/phone-call.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d0d75211-cae8-4f89-8e24-a7e88cf65768");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact-container contact'>
      <div className="contact-box">
        <div className="contact-info">
          <h3>Send us a message <img src={msg_icon} alt="message icon" /></h3>
          <p>
            Feel free to reach out through this contact form or find our contact information below. 
            Your feedback, questions, and suggestions are important to us.
          </p>
          <ul>
            <li><img src={mail_icon} alt="email icon" /> growth.purposeacademy@gmail.com</li>
            <li><img src={phone_icon} alt="phone icon" /> 08164191133</li>
            <li><img src={phone_icon} alt="phone icon" /> 08168636031</li>
          </ul>
        </div>
        
        <div className="contact-form">
          <form onSubmit={onSubmit}>
            <label>Name</label>
            <input type="text" name="name" placeholder="Enter your name" required />
            
            <label>Email Address</label>
            <input type="email" name="email" placeholder="Enter your email address" required />
            
            <label>Contact Number</label>
            <input type="tel" name="tel" placeholder="Enter your contact details" required />
            
            <label>Enquiry</label>
            <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
            
            <button type='submit' className='btn'> 
              Submit Now <img src={white_arrow} alt="arrow icon" />
            </button>
          </form>
          <span>{result}</span>
        </div>  
      </div>
    </div>
  );
}

export default Contact;
