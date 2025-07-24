import React from 'react';
import './Sermons.css';
import { FaYoutube, FaTelegramPlane, FaSpotify } from 'react-icons/fa';

const sermonsData = [
  {
    id: 1,
    title: 'YouTube Live & Video Sermons',
    description: 'Watch past and upcoming sermon videos directly on our YouTube channel.',
    link: 'https://www.youtube.com/embed/TsSzdq74IH4',
    icon: <FaYoutube />,
    color: '#FF0000',
  },
  {
    id: 2,
    title: 'Telegram Audio Sermons',
    description: 'Download or stream sermon audio via our Telegram channel.',
    link: 'https://t.me/schofpurpose',
    icon: <FaTelegramPlane />,
    color: '#0088cc',
  },
  {
    id: 3,
    title: 'Spotify (Coming Soon)',
    description: 'We’re preparing to launch our audio sermons on Spotify for easy access.',
    icon: <FaSpotify />,
    color: '#1DB954',
    comingSoon: true,
  },
];

const Sermons = () => {
  return (
    <section className="sermon-section" aria-label="Sermons platforms">
      <div className="sermon-container">
        {/* <h2 className="sermon-heading">Watch or Listen to Our Sermons</h2>
        <p className="sermon-subtext">
          Stay connected and be transformed through powerful teachings across platforms.
        </p> */}
        <div className="sermon-grid">
          {sermonsData.map(({ id, title, description, link, icon, color, comingSoon }) => (
            comingSoon ? (
              <div key={id} className="sermon-card coming-soon" aria-label={`${title} coming soon`}>
                <div className="sermon-img-wrapper" style={{ borderColor: color }}>
                  <span className="sermon-logo" style={{ color }}>{icon}</span>
                  <div className="coming-soon-overlay">Coming Soon</div>
                </div>
                <div className="sermon-content">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </div>
            ) : (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="sermon-card"
                aria-label={title}
              >
                <div className="sermon-img-wrapper" style={{ borderColor: color }}>
                  <span className="sermon-logo" style={{ color }}>{icon}</span>
                </div>
                <div className="sermon-content">
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              </a>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sermons;
