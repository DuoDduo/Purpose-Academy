import React from 'react';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import bgHome from '../../assets/academy-1.jpg'; 

const HeavenOnEarth = () => {
  return (
    <>

     <Hero
        title="Welcome to Heaven On Earth"
        subtitle={
          <>
             A transformative initiative dedicated to bringing spiritual enlightenment, peace, and purposeful living into everyday life.
    
          </>
        }
        buttonText="Register Now"
        buttonLink="https://forms.gle/V4zmFmwj2smdtjoAA"
        backgroundImage={bgHome}
      />
      <div className="container">
        <Title subTitle="HeavenOnEarth" title="Experience the Divine" />
        <p>Welcome to the HeavenOnEarth page. Here, you can add content describing your mission, vision, and offerings related to this initiative.</p>
        {/* Add more components or content as needed */}
      </div>
    </>
  );
};

export default HeavenOnEarth;
