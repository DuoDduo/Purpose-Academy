import React from 'react';
import './Event.css';
import { motion } from 'framer-motion';
import bg1 from '../../assets/bg-1.jpg';
import hangout from '../../assets/hangout.jpg';
import jacademy from '../../assets/jacademy.png';
import ca from '../../assets/ca.jpg';  // Fallback image if needed

const events = [
   {
    id: 4,
    title: '2025 Junior Academy',
    description: 'Enrollment for Junior Academy Cohort 2 is ongoing! Secure your spot before now ',
    date: 'Registration closes | 6th August, 2025',
    registerLink: 'https://forms.gle/N3ZHxRFGRudVWyp38',
    image: jacademy,
  },
  {
    id: 1,
    title: '2025 December Retreat',
    description: 'Join us this December for diverse moves of God; salvation, healing, deliverance, outpouring, revival, clarity and more',
    date: 'Third Weekend in december | Details coming soon',
    registerLink: 'https://forms.gle/mht6nQsReSaiCW3k8',
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
    title: 'August Celebration and Anointing Servvice',
    description: " Don't miss out as we approach the new month with a grateful heart and receive the oil for destiny alignment.",
    date: 'Sunday | 3rd August 2025',
    registerLink: '#',
    image: ca,
  },
  // {
  //   id: 4,
  //   title: 'August Virtual Healing and Prophetic Session',
  //   description: 'A Weekly session to receive healings and impartations for destiny activation.',
  //   date: 'Wednesday | 6th August 2025',
  //   registerLink: 'https://www.youtube.com/@Pastorflo/streams',
  //   image: bg1,
  // },
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
