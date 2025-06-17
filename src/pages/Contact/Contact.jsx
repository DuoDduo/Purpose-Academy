import React from 'react';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import ContactForm from '../../components/Contact/Contact';
import bgContact from '../../assets/academy-2.jpg'; 

const Contact = () => {
  return (
    <>
     <Hero
        title="Reach Out to Us"
        subtitle="Discover the mission and vision that drive us at School of Purpose."
        buttonText="Learn More About SOP"
        buttonLink="/about"
        backgroundImage={bgContact}
      />
      <div className="container">
        <Title subTitle="Contact Us" title="Get in Touch" />
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
