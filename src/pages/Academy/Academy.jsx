import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Mission from '../../components/Mission/Mission';
import Visionnaire from '../../components/Vissionaire/Visionnaire';
import Programs from '../../components/Programs/Programs';
import About from '../../components/About/About';
import Cohorts from '../../components/Cohorts/Cohorts';
import Testimonials from '../../components/Testimonials/Testimonials';
import Faqs from '../../components/FAQS/Faqs';
import Contact from '../../components/Contact/Contact';
import Creative from '../../components/Creative/Creative';
import Footer from '../../components/Footer/Footer';

// Import the background image for Academy Hero
import bgAcademy from '../../assets/bg-1.jpg';  // Adjust path/name as needed
import AcademyProgram from '../../components/AcademyProgram/AcademyProgram';
import AboutAcademy from '../../components/About/AboutAcademy';
import JuniorTestimonials from '../../components/Testimonials/JuniorTestimonials';

const Academy = () => {
  return (
    <div>
      <Navbar />
      
      <Hero
        title="Welcome to Purpose Academy"
        subtitle={
          <>
            Enrollment for Junior Academy Cohort 2 is ongoing! Secure your spot before registration closes on <strong>Wednesday, 6th August, 2025</strong>.
          </>
        }
        buttonText="Register Now"
        buttonLink="https://forms.gle/N3ZHxRFGRudVWyp38"
        backgroundImage={bgAcademy}
      />

      <Title subTitle="About Purpose Academy" title="Discover & Fulfill Your God-Given Purpose" />
      <AboutAcademy />

      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
      
      <AcademyProgram/>

        {/* <Title subTitle="Vision, Mission, Goals & Core Values" title="Our Foundation" />
        <Mission /> */}
        {/* <Creative/> */}
        <Title subTitle="Testimonials" title="Junior Academy" />
          <JuniorTestimonials/>
        <Title subTitle="Cohort Gallery" title="How Far We've Come" />
        <Cohorts />

        {/* <Title subTitle="Mentorship Experience" title="Transformative Coaching Sessions" />
        <About /> */}

        <Title subTitle="Testimonials" title="Stories of Transformation" />
        <Testimonials />

        <Title subTitle="FAQs" title="Your Questions Answered" />
        <Faqs />

        <Title subTitle="Contact Us" title="We'd Love to Hear from You" />
        <Contact />
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Academy;
