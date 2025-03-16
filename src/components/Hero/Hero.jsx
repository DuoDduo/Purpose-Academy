import React from 'react'
import "./Hero.css"
import white_arrow from "../../assets/white-arrow.png"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">

        <h1>Unlock Your Potential!
        </h1>
        <p>Join the next cohort of Purpose Academy and take the first step toward a brighter future.</p>
      <p> Enrollment Now Open!
      Don't miss out— Register today as enrolment closes 30th March 2025 and transform your journey!</p>
      <a href="https://forms.gle/V4zmFmwj2smdtjoAA" target='blank'><button className='btn'>Register Now <img src={white_arrow} alt="" /> </button></a>
      
      </div>
    </div>
  )
}

export default Hero