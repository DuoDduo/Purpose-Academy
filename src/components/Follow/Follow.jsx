import React from 'react';
import './Follow.css';
import { FaFacebookF, FaInstagram, FaTelegramPlane, FaMixcloud, FaTiktok, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { motion } from 'framer-motion';

const socials = [
  {
    title: 'Facebook – School of Purpose',
    description: 'Join our online family, live streams & updates.',
    icon: <FaFacebookF style={{ color: '#1877F2' }} />,
    link: 'https://facebook.com/schoolofpurposesop?mibextid=ZbWKwL',
  },
  {
    title: 'Facebook – Pastor Flo',
    description: 'Follow our visionary for wisdom and insights.',
    icon: <FaFacebookF style={{ color: '#1877F2' }} />,
    link: 'https://facebook.com/oyedeji.flo?mibextid=ZbWKwL',
  },
  {
    title: 'Instagram – SOP',
    description: 'See our impact and visual stories.',
    icon: <FaInstagram style={{ color: '#C13584' }} />,
    link: 'https://instagram.com/schoolofpurpose?igsh=MTNweXYwNnE1NXppMQ==',
  },
  {
    title: 'Instagram – Pastor Flo',
    description: 'Follow her moments, messages and heart.',
    icon: <FaInstagram style={{ color: '#C13584' }} />,
    link: 'https://instagram.com/pastor.flo?igsh=dXlvcXF4N3gzOHM=',
  },
  {
    title: 'Telegram – Messages',
    description: 'Listen to daily teachings and archives.',
    icon: <FaTelegramPlane style={{ color: '#0088cc' }} />,
    link: 'https://t.me/schofpurpose',
  },
  {
    title: 'Telegram – Broadcast',
    description: 'Get exclusive ministry updates & links.',
    icon: <FaTelegramPlane style={{ color: '#0088cc' }} />,
    link: 'https://t.me/SchoolOfPurposeSOP',
  },
  {
    title: 'X (Twitter) – SOP',
    description: 'Follow us for real-time updates & threads.',
    icon: <SiX style={{ color: '#000' }} />,
    link: 'https://x.com/Schofpurpose?t=OJyuUpWCI1NYY-HuWzMlBA&s=09',
  },
  {
    title: 'Mixlr – SOP Radio',
    description: 'Tune in for live radio messages.',
    icon: <FaMixcloud style={{ color: '#541B8B' }} />,
    link: 'https://school-of-purpose.mixlr.com',
  },
  {
    title: 'TikTok – SOP',
    description: 'Watch short messages & inspiration.',
    icon: <FaTiktok style={{ color: '#000' }} />,
    link: 'https://vm.tiktok.com/ZMrQmLEjg',
  },
  {
    title: 'Telegram – Testimonies',
    description: 'Read what God is doing in lives.',
    icon: <FaTelegramPlane style={{ color: '#0088cc' }} />,
    link: 'https://tinyurl.com/mysoptestimonies',
  },
  {
    title: 'Email – Contact Us',
    description: 'Reach out for enquiries and prayer.',
    icon: <FaEnvelope style={{ color: '#EA4335' }} />,
    link: 'mailto:officialschoolofpurpose@gmail.com',
  },
  {
    title: ' Waystream– SOP Radio',
    description: 'Tune in for live radio messages.',
    icon: <FaEnvelope style={{ color: '#EA4335' }} />,
    link: 'https://app.waystream.io/schoolofpurpose',
  },
];

const Follow = () => {
  return (
    <section className="follow-section">
      <div className="follow-wrapper">
        {/* <div className="follow-header">
          <h2>Stay Connected with SOP</h2>
          <p>Follow us across all platforms and never miss a moment of purpose.</p>
        </div> */}

        <div className="follow-grid">
          {socials.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="follow-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="icon">{item.icon}</div>
              <div className="text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Follow;
