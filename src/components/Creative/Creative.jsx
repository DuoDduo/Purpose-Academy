import React from 'react';
import "./Creative.css";
import about_img from "../../assets/pcreative.jpg";
import white_arrow from "../../assets/white-arrow.png";

const Creative = () => {
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSep2udqz1n9BwHiW7qdELuLHBw7RNKuwXMrSCbKBSR5UDKgGQ/viewform?usp=sharing"; 

  return (
    <div className='creative' >
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
      </div>
      <div className="about-right">
        <h3> Purpose Creative Academy</h3>
        <p>Lights, mic, action – let's unlock your creative voice! Your first step into the world of speaking, performing, and purposeful expression. Unlock your creativity with hands-on training from Pastor Flo', an experienced radio OAP, public speaker, jingles artist, and actor with a background in church dramatizations, in:</p>

        <ul>
          <li>Public Speaking</li>
          <li>Broadcasting (audio and video)</li>
          <li>Jingles</li>
          <li>Acting</li>
        </ul>
        <br></br>

        <p>Perfect for aspiring voices, vibrant personalities, emerging media talents, and creative minds who want to speak, perform, and shine with purpose.</p>

        {/* Updated Purpose Creative Academy Description */}
        <p>The Purpose Creative Academy offers an exciting opportunity for individuals who are passionate about creative expression and purpose-driven performance. Whether you're looking to enhance your public speaking, learn broadcasting techniques, master the art of jingles, or explore acting, our academy provides the training you need to succeed.</p>

        <p>Our programs are designed to help participants of all ages unlock their creative potential. From children to adults, we welcome vibrant personalities and emerging talents who are eager to step into the spotlight.</p>

        {/* <p><strong>Enrollment for this exclusive 1-Week FREE Starter Pack closes at 11:59 PM on April 14, 2025. Don't miss your chance to join Purpose Creative Academy and start your journey toward creative excellence!</strong></p> */}

        {/* Link to Google Form */}
        <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className='btn'>
          Register Now <img src={white_arrow} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Creative;
