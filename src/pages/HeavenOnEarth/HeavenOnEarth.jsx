// pages/HeavenOnEarth/HeavenOnEarth.jsx
import React from 'react';
import Hero from '../../components/Hero/Hero';
import Title from '../../components/Title/Title';
import bgHome from '../../assets/academy-1.jpg';
import Sermons from '../../components/Sermons/Sermons';
import AboutHeaven from '../../components/About/AboutHeaven';
import LiveExperience from '../../components/Live/LiveExperience';
import Event from '../../components/Event/Event';
import Follow from '../../components/Follow/Follow';




const HeavenOnEarth = () => {
  return (
    <>
      <Hero
        title="Welcome to Heaven On Earth"
        subtitle={
          <>
            A transformative initiative dedicated to bringing spiritual enlightenment, peace,
            and purposeful living into everyday life.
          </>
        }
        buttonText="Explore Purpose Academy"
        buttonLink="/academy" // Navigates internally via useNavigate
        backgroundImage={bgHome}
      />

      <div className="container mx-auto px-4 py-12">
        <Title subTitle="HeavenOnEarth" title="Experience the Divine" />
        <AboutHeaven/>
      </div>
      <Title subTitle="LIVE" title="Experience Worship Live" />
      <LiveExperience/>
       <Title subTitle="Sermons" title="Hear the Word, Grow in Faith" />
      <Sermons/>
      
        <Title subTitle="Upcoming Events" title="Mark Your Calendar" />
      <Event/>
      <Title subTitle="Stay Connected" title="Follow Us" />
      <Follow/>

    </>
  );
};

export default HeavenOnEarth;