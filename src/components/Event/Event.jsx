import React from 'react';
import './Event.css';
import { motion } from 'framer-motion';
import bg1 from '../../assets/bg-1.jpg';
import hangout from '../../assets/hangout.jpg';
import ca from '../../assets/ca.jpg';  // Fallback image if needed

const events = [
  {
    id: 1,
    title: 'Heaven on Earth Experience',
    description: 'A monthly power-packed service filled with worship, word, and wonders. Don’t miss divine encounters.',
    date: 'Every Last Sunday | 4 PM WAT',
    registerLink: '#',
    image: bg1,
  },
  {
    id: 2,
    title: 'Special Hangout For Children, Pre-Teens And Teenager',
    description: 'Give your child the gift of a transformative experience this long vacation! 🌞 Join us for an unforgettable experience',
    date: 'Saturday | 30th August 2025',
    registerLink: 'https://tinyurl.com/CPC-And-TPC-Hang-Out',
    image: hangout,
  },
  {
    id: 3,
    title: 'Celebration and Anointing Servvice',
    description: "August Edition Of Celebration And Anointing Service, Don't miss out on Sunday, 3.8.2025 as we approach the new month with a grateful heart and receive the oil for destiny alignment.",
    date: 'Sunday | 3rd August 2025',
    registerLink: '#',
    image: ca,
  },
  {
    id: 4,
    title: 'School of Purpose Impartation',
    description: 'A quarterly gathering of visionaries to receive impartation for destiny activation.',
    date: 'Quarterly | Check announcement updates',
    registerLink: '#',
    image: bg1,
  },
];

const Event = () => {
  return (
    <section className="event-section">
      <div className="container">
        {/* <motion.h2
          className="section-title"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Upcoming Events
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Mark your calendar. Encounter God. Experience Heaven on Earth.
        </motion.p> */}

        <div className="event-grid">
          {events.map((event, index) => (
            <motion.div
              className="event-card"
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="event-img">
                <img src={event.image} alt={event.title} />
              </div>
              <div className="event-content">
                <h3 className="event-title">{event.title}</h3>
                <p className="event-date">{event.date}</p>
                <p className="event-desc">{event.description}</p>
                <a
                  href={event.registerLink}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Event;
