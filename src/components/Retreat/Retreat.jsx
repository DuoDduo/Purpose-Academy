import React, { useEffect, useState } from "react";
import "./Retreat.css";
import bannerImage from "../../assets/academy-1.jpg";

const Retreat = () => {
  // Target date: third weekend in December 2025
  const targetDate = new Date("2025-12-19T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [targetDate]);

  // Format single digits (e.g., 2 → 02)
  const formatTime = (t) => t.toString().padStart(2, "0");

  return (
    <section className="retreat-wrapper">
      <div className="retreat-card">
        <div className="retreat-inner">
          <div className="retreat-image">
            <img src={bannerImage} alt="2025 December Retreat" />
          </div>
          <div className="retreat-text">
            <h3>2025 December Retreat</h3>
            <p className="highlight">A time for diverse moves of God</p>
            <p>
              Join us this December for salvation, healing, deliverance,
              outpouring, revival, clarity, and more!
            </p>

            <ul className="retreat-list">
              <li>Experience healing and deliverance</li>
              <li>Receive an outpouring and revival</li>
              <li>Gain divine clarity for the new year</li>
            </ul>

            <div className="enrollment-box">
              <p className="date">
                Date: December 19th – 20th, 2025 (Third Weekend)
              </p>
              <p className="note">Countdown to Event Start:</p>

              <div className="countdown-timer">
                <span>
                  <strong>{formatTime(timeLeft.days)}</strong> Days
                </span>
                <span>
                  <strong>{formatTime(timeLeft.hours)}</strong> Hrs
                </span>
                <span>
                  <strong>{formatTime(timeLeft.minutes)}</strong> Min
                </span>
                <span>
                  <strong>{formatTime(timeLeft.seconds)}</strong> Sec
                </span>
              </div>

              <a
                href="https://forms.gle/mht6nQsReSaiCW3k8"
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

export default Retreat;
