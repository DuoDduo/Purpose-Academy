import React from 'react'
import "./About.css"
import about_img from "../../assets/one.jpg"
// import about_img_2 from "../../assets/academy-1.jpg"
import white_arrow from "../../assets/white-arrow.png"
// import play_icon from"../../assets/play-icon.png"

const About = () => {
  return (
   <div>

     <div className='about'>
                
            <div className="about-left">
                <img src={about_img} alt=""className='about-img' />
            </div>
            <div className="about-right">
                <h3> EXCLUSIVE ONE-ON-ONE COACHING</h3>
                <h2>Discover Your Unique Life Journey with PFlo
                </h2>
                <p> Are you ready to fulfill your destiny? Register now for a transformative virtual coaching session with PFlo!

                </p>
                <p>Join Pastor (Mrs) Funmilola Omobowoje (PFlo) for an exclusive one-on-one virtual coaching session. Discover and deploy the tools needed to fulfill God's original plan through your life's unique journey. Step into the fullness of your God-given purpose, connect with your original self, and unlock your potentials to fulfill your divine purpose. Register now and get ready for a transformative experience!</p>
                  <a href="sessionwithflo@gmail.com" target='blank'><button className='btn'>Enquire Now <img src={white_arrow} alt="" /> </button></a>
            </div>

        </div>

        {/* <div className='about'>
            <div className="about-left">
                <img src={about_img_2} alt=""className='about-img' />
            </div>
            <div className="about-right">
                <h3>VISION OF PURPOSE ACADEMY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>
                    <p>The discovery and fulfilment of God's divine purpose, is achieved through the undiluted teachings of God's Word, HolySpirit Impartations, mentorship classes, and other means revealed by God to bring about the fulfilment of the divine mandate.</p>
                   <p> The subject of purpose is all-encompassing, necessitating the need for instruction, stability, direction and empowerment in every area of life, which in turn affects purpose fulfilment. Hence, School of Purpose focuses on teachings, impartations and mentorship in every aspect of life that affects the fulfilment of Purpose. </p>
                    God's desire is for our lives to be filled with His glory hereby reflecting heaven on earth, and for us to have an eternal place with Him after our sojourn. This is the core focus of the School of Purpose.
                </p>
            </div>
        </div>  */}
   </div>
    
    
  )
}

export default About