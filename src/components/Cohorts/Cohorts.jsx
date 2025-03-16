import React from 'react'
import "./Cohorts.css"
import gallery_1 from "../../assets/cohort-2.png"
import gallery_2 from "../../assets/cohort-3.jpg"
import gallery_3 from "../../assets/cohort-4.png"
import gallery_4 from "../../assets/junior.jpg"
import white_arrow from "../../assets/white-arrow.png"

const Cohorts = () => {
  return (
    <div className='cohorts'>
       <div className="gallery">
       <img src={gallery_3} alt="" />
       <img src={gallery_2} alt="" />
       <img src={gallery_4} alt="" />
        <img src={gallery_1} alt="" />
    </div> 
   <a href="https://forms.gle/V4zmFmwj2smdtjoAA" target='blank'> <button className='btn'>Register Now <img src={white_arrow} alt="" /> </button></a>
    </div>
  )
}

export default Cohorts