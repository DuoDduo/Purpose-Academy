import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from "../../assets/next-icon.png"
import back_icon from"../../assets/back-icon.png"
import user_1 from "../../assets/fol.jpg"
import user_2 from "../../assets/bthadd.png"
import user_3 from "../../assets/funke.jpg"
import user_4 from "../../assets/vgd.png"
import user_5 from "../../assets/promise.jpg"; // Import new user image
import user_6 from "../../assets/timi.jpg"; // Import new user image
// import white_arrow from "../../assets/white-arrow.png"

const Testimonials = () => {
     const slider = useRef(null);
    const txRef = useRef(0); // Persist tx across renders

    const slideForward = () => {
        if (txRef.current > -100 + 100 / 3) { 
            txRef.current -= 100 / 3;
            if (slider.current) {
                slider.current.style.transform = `translateX(${txRef.current}%)`;
            }
        }
    };

    const slideBackward = () => {
        if (txRef.current < 0) {
            txRef.current += 100 / 3;
            if (slider.current) {
                slider.current.style.transform = `translateX(${txRef.current}%)`;
            }
        }
    };

  return (
    <div className='testimonials'>
       <div>
       <img src={next_icon} alt="" className='next-btn'onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn'onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Folashade Steve-Bodunde</h3>
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>
                    <p>The teachings from the Pre-Purpose Academy have helped me to better understand my purpose. I learnt to set goals and work with timelines and this has made me more effective.
                    During the evangelism exercises, I was able to effectively use the gifts of the Spirit as taught by Pastor (Mrs.) Funmilola Omobowoje. Additionally, my grammatical constructions have improved and I have also gained clarity on my mission and the people I am sent to.</p>
                </div>
            </li>
            <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_5} alt="" />
                            <div>
                                <h3>Promise Olaoye</h3>
                                <span>Ogun,Nigeria</span>
                            </div>
                        </div>
                        <p>The Pre-Purpose Academy was a challenging and exciting ride for me. I was made to understand the importance of purpose and vision and how to create a plan for my future.
                        I also learnt to see the bigger picture of myself.
                        The materials shared stretched my mind and my capacity.
                        I am ready to go ahead and live life with purpose!</p>
                    </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Blessing Thaddeaus</h3>
                            <span>Lagos, Nigeria</span>
                        </div>
                    </div>
                    <p>I am grateful to God for clarity I have received while engaging the materials in the Purpose Academy. I used to have a problem with goal-setting. By reason of the academy, I have seen an obvious improvement on this. I am now able to set and meet up with my goals. I was recommended for a job and it required me to complete a task in a limited time. By applying what I learnt in the academy, I was able to compete the task and I got the job.</p>
                </div>
            </li>
            <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_6} alt="" />
                            <div>
                                <h3>Timilehin Akintunde</h3>
                                <span>Ogun, Nigeria</span>
                            </div>
                        </div>
                        <p>My time in the Pre-Purpose Academy was a time of stretching myself beyond what I thought was my limit. I have gained so much direction for my life through the academy. I now have a better picture of where I am going and so I can
                        journey accurately. Praise be to God!</p>
                    </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Olufunke Hezekiah</h3>
                            <span>Ogun, Nigeria</span>
                        </div>
                    </div>
                    <p>I am grateful for the process that God took me through in the purpose academy. God has done a great work in me.
                    At the inception of the Pre-Purpose Academy, I felt I did not need it since I had been in School of Purpose for a while but on starting the classes, I found out that it entailed so much more than I thought.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Victoria Odeleye</h3>
                            <span>Ibadan, Nigeria</span>
                        </div>
                    </div>
                    <p>During one of the Activation Nights in the Pre-Purpose Academy, I had an encounter where I felt the presence of God so strongly. I received prophetic words during that encounter. Glory to Jesus.
                    The teachings of the Pre-Purpose Academy have brought so much clarity to me in discovering my purpose. The assignments and resources have also pushed me to put in more effort in fulfilling my purpose. I am grateful to God in the life of Pastor Mrs. Funmilola Omobowoje (FLO)..</p>
                </div>
            </li>
               
             
            </ul>

        </div>
        <div>
       </div>
       
      </div>
      {/* <a href="https://www.instagram.com/p/CwqYQ9zAXgP/?igsh=MXlvNDUxcGJwbHhw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn testimony-btn">Read More <img src={white_arrow} alt="" /> </button>
        </a> */}
    </div>
  )
}

export default Testimonials