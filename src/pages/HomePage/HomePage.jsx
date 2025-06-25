import React from 'react';

import Title from '../../components/Title/Title';
import Visionnaire from '../../components/Vissionaire/Visionnaire';
import Programs from '../../components/Programs/Programs';
import Mission from '../../components/Mission/Mission';
import Faqs from '../../components/FAQS/Faqs';
import Contact from '../../components/Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import MasterClass from '../../components/MasterClass/MasterClass';

// Import the home page background image
import bgHome from '../../assets/academy-1.jpg'; // adjust the path and filename as needed
import PurposeTable from '../../components/PurposeTable/PurposeTable';

const HomePage = () => {
  return (
    <>
      <Navbar />
      
      <Hero
        title="Discover Your Purpose, Fuel Your Impact."
        subtitle={
          <>
            Enrollment for Junior Academy Cohort 2 is ongoing! Secure your spot before registration closes on <strong>Wednesday, 6th August, 2025</strong>.
          </>
        }
        buttonText="Register Now"
        buttonLink="https://forms.gle/N3ZHxRFGRudVWyp38"
        backgroundImage={bgHome}
      />
      <Title subTitle="Ongoing Registration" title="Purpose & Leadership Masterclass" />
      <MasterClass/>
      
      <Title subTitle="About Us" title="School of Purpose Division" />
      <PurposeTable/>
      {/* <Title subTitle="About The Visionnaire" title="Our Founder" />
      <Visionnaire /> */}
      
      <Title subTitle="Our Programs" title="What We Offer" />
      <div className="container">
        <Programs />
        
        <Title subTitle="Vision, Mission, Goals, Core Values" title="Statement" />
        <Mission />
        
        <Title subTitle="Purpose Academy FAQ'S" title="Frequently Asked Questions" />
        <Faqs />
        
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
