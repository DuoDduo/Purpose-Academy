import React from 'react';
import './LiveExperience.css';
import { FaVideo, FaHeadphones } from 'react-icons/fa';

const LiveExperience = () => {
  return (
    <section className="live-section">
      <div className="live-container">
        {/* Reminder Section */}
        <div className="live-reminder">
          <p className="reminder-text">
            🕘 <strong>Join Pastor Flo every Wednesday at 9PM WAT</strong> for our YouTube livestream.
            You can also tune in via audio during our physical services using Waystream.
          </p>
        </div>

        <div className="live-cards">
          {/* Watch Live Section */}
          <div className="live-card">
            <div className="icon-wrapper video-icon">
              <FaVideo />
            </div>
            <h3 className="card-title">Watch on YouTube</h3>
            <p className="card-text">
              Be part of Heaven on Earth live sessions every Wednesday at 9PM WAT on YouTube — powerful worship and life-transforming teachings.
            </p>
            <div className="video-embed-wrapper">
              <iframe
                className="live-embed"
                width="100%"
                height="250"
                src="https://www.youtube.com/embed/TsSzdq74IH4"
                title="Pastor Flo Latest Live"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            <a
              href="https://youtube.com/@pastorflo"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn card-btn video-btn"
            >
              Visit Channel
            </a>
          </div>

          {/* Listen Live Section */}
          <div className="live-card">
            <div className="icon-wrapper audio-icon">
              <FaHeadphones />
            </div>
            <h3 className="card-title">Listen Live</h3>
            <p className="card-text">
              Prefer audio? Tune in via Waystream during our physical services for a powerful radio experience from anywhere in the world.
            </p>
            <div className="audio-embed-wrapper">
              <iframe
                className="live-embed"
                src="https://app.waystream.io/schoolofpurpose"
                width="100%"
                height="300"
                frameBorder="0"
                scrolling="no"
                allow="autoplay"
                title="Waystream Audio"
              ></iframe>
            </div>
            <a
              href="https://app.waystream.io/schoolofpurpose"
              target="_blank"
              rel="noopener noreferrer"
              className="live-btn card-btn audio-btn"
            >
              Listen Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveExperience;
