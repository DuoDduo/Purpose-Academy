import React, { useEffect, useState } from "react";
import "./MasterClass.css";
import bannerImage from "../../assets/masterclass.jpg";

const MasterClass = () => {
  const targetDate = new Date("2025-08-18T23:59:59").getTime();

  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  return (
    <section className="masterclass-wrapper">
      <div className="masterclass-card">
        <div className="masterclass-inner">
          <div className="masterclass-image">
            <img src={bannerImage} alt="Masterclass" />
          </div>
          <div className="masterclass-text">
            <h3>Lead with Purpose. Live with Legacy.</h3>
            <p className="highlight">
              A 3-day virtual leadership experience for:
              <br />
              <strong>Professionals • Executives • Founders • Visionary Leaders</strong>
            </p>
            <p>
              Step into the next level of leadership — rooted in purpose and designed to create lasting impact.
            </p>
            <ul className="masterclass-list">
              <li>Elevate your purposeful leadership</li>
              <li>Inspire and mentor others</li>
              <li>Lead a life of legacy</li>
            </ul>

            <div className="enrollment-box">
              <p className="date">Date: 21st – 23rd August, 2025</p>
              <p className="note">Enrollment closes: 18th August, 2025</p>

              <div className="countdown-timer">
                <span><strong>{timeLeft.days}</strong> Days</span>
                <span><strong>{timeLeft.hours}</strong> Hrs</span>
                <span><strong>{timeLeft.minutes}</strong> Min</span>
                <span><strong>{timeLeft.seconds}</strong> Sec</span>
              </div>

              <a
                href="https://forms.gle/QKRWMbQc82cgVYvo6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterClass;
