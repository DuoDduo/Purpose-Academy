import React from 'react';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import Visionnaire from '../../components/Vissionaire/Visionnaire';
import Mission from '../../components/Mission/Mission';

// Import background image for About page hero
import bgAbout from '../../assets/academy.jpg'; // update the path & filename as needed
import PurposeTable from '../../components/PurposeTable/PurposeTable';

const About = () => {
  return (
    <>
      <Hero
        title="Who We Are"
        subtitle="Discover the mission and vision that drive us at School of Purpose."
        buttonText="Visit Academy"
        buttonLink="/academy"
        backgroundImage={bgAbout}
      />
      <div className="containe">
        <Title subTitle="About Us" title="Who We Are" />c
        <PurposeTable/>
        <Title subTitle="About The Visionnaire" title="Meet the Visionanaire" />
        <Visionnaire  />

        <Title subTitle="Vision, Mission, Goals, Core Values" title="Statement" />
        <div className="container">
        <Mission/>
        </div>
       
      </div>
    </>
  );
};

export default About;
