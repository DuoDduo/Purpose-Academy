import React from 'react'
import { Analytics } from "@vercel/analytics/react"
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

import Mission from './components/Mission/Mission'
import Creative from './components/Creative/Creative'
const App = () => {
  return (
    <div>
        <Analytics />
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subTitle="Purpose Creative Academy" title="Unlock Your Creative Potential"></Title>
      <Creative></Creative>
     
      <Title subTitle="About Us" title="Who We Are"></Title> 

      <Visionnaire></Visionnaire>
      <Title subTitle="Our Progams" title="What We Offer"></Title>
      <div className="container">

      <Programs></Programs>
      
     
      
      <Title subTitle="Vision, Mission, Goals,Core Values
" title="Statement"></Title> 
      <Mission></Mission>
      <Title subTitle=" PURPOSE ACADEMY Cohort Gallery" title="How Far We've Come"></Title>
      <Cohorts></Cohorts>
      <Title subTitle="Personalized Mentorship Experience" title="Transformative Sessions"></Title>
      <About></About>

      
      <Title subTitle="TESTIMONIALS" title="Purpose Academy Success Stories"></Title>
      <Testimonials></Testimonials>
      <Title subTitle=" purpose Academy FAQ'S" title="Frequently Asked Questions"></Title>
      <Faqs></Faqs>
      <Title subTitle="Contact Us" title="Get in Touch"></Title>
      <Contact></Contact>
      <Footer></Footer>
    
      </div>
    
      </div>
  )
}

export default App