import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Visionnaire from './components/Vissionaire/Visionnaire'
import Cohorts from './components/Cohorts/Cohorts'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Faqs from './components/FAQS/Faqs'
import Footer from './components/Footer/Footer'
import Foot from './components/Footer/Foot'
import Mission from './components/Mission/Mission'
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
     
      <Title subTitle="Our Progams" title="What We Offer"></Title>
      <div className="container">

      <Programs></Programs>
      <Title subTitle="About Us" title="Who We Are"></Title> 

      <Visionnaire></Visionnaire>
     
      <About></About>
      <Title subTitle="Vision, Mission, Goals" title="Statement"></Title> 
      <Mission></Mission>
      <Title subTitle="Cohort Showcase" title="How Far We've Come"></Title>
      <Cohorts></Cohorts>
      
      <Title subTitle="TESTIMONIALS" title="What Student Says"></Title>
      <Testimonials></Testimonials>
      <Title subTitle="FAQ'S" title="Frequently Asked Questions"></Title>
      <Faqs></Faqs>
      <Title subTitle="Contact Us" title="Get in Touch"></Title>
      <Contact></Contact>
      <Footer></Footer>
      <Foot></Foot>
      </div>
    
      </div>
  )
}

export default App