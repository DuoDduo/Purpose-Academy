import React from 'react';

import Title from '../../components/Title/Title';
import Visionnaire from '../../components/Vissionaire/Visionnaire';
import Programs from '../../components/Programs/Programs';
import Mission from '../../components/Mission/Mission';
import Faqs from '../../components/FAQS/Faqs';
import Contact from '../../components/Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
// import MasterClass from '../../components/MasterClass/MasterClass';
import Retreat  from  "../../components/Retreat/Retreat"

// Import the home page background image
import bgHome from '../../assets/academy-1.jpg'; // adjust the path and filename as needed
import PurposeTable from '../../components/PurposeTable/PurposeTable';
import Follow from '../../components/Follow/Follow';
// import Event from '../../components/Event/Event';
import JuniorTestimonials from '../../components/Testimonials/JuniorTestimonials';
import Testimonials from '../../components/Testimonials/Testimonials';

const HomePage = () => {
  return (
    <>
      <Navbar />
      
     <Hero
  title="Experience Divine Flow, Receive Clarity."
  subtitle={
    <>
      Join us this <b>December </b>for diverse moves of God: salvation, healing, deliverance, outpouring, and revival. 
      The Retreat holds on the <b>Third Weekend in December, 19th – 20th, 2025</b>
    </>
  }
  buttonText="Register Now"
  buttonLink="https://forms.gle/mht6nQsReSaiCW3k8"
  backgroundImage={bgHome} // Replace 'bgHome' with the retreat image import (e.g., 'bgRetreat')
/>
       <Title subTitle="About Us" title="School of Purpose " />
      <PurposeTable/>
      <Title subTitle="Ongoing Registration" title="December Retreat" />
      <Retreat/>
      {/* <Title subTitle="Ongoing Registration" title="Purpose & Leadership Masterclass" />
      <MasterClass/> */}
      
     
      {/* <Title subTitle="About The Visionnaire" title="Our Founder" />
      <Visionnaire /> */}
     
      
        {/* <Title subTitle="Upcoming Events" title="Mark Your Calendar" />
      <Event/> */}
      <div className="container">
         
      <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        
        {/* <Title subTitle="Vision, Mission, Goals, Core Values" title="Statement" />
        <Mission /> */}

        <Title subTitle="Testimonials" title="Junior Academy" />
          <JuniorTestimonials/>
          
        <Title subTitle="Testimonials" title="Stories of Transformation" />
        <Testimonials />
        
        <Title subTitle="Purpose Academy FAQ'S" title="Frequently Asked Questions" />
        <Faqs />
        
      </div>
      <Title subTitle="Stay Connected" title="Follow Us" />
        <Follow/>
        
        <Title subTitle="Contact Us" title="Get in Touch" />
        <Contact />
    </>
  );
};

export default HomePage;
