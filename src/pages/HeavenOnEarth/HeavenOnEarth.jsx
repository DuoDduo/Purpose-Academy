// pages/HeavenOnEarth/HeavenOnEarth.jsx
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
        <p className="text-gray-700 mt-4">
          Welcome to the HeavenOnEarth page. Coming Soon...
        </p>
      </div>
    </>
  );
};

export default HeavenOnEarth;
