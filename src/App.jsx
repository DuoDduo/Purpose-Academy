import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './index.css';

import HomePage from './pages/HomePage/HomePage';
import Academy from './pages/Academy/Academy';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import HeavenOnEarth from './pages/HeavenOnEarth/HeavenOnEarth';
import AllSermonsPage from "./pages/AllSermons/AllSermons" // ✅ Add this line

const App = () => {
  return (
    <Router>
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/heaven" element={<HeavenOnEarth />} />
        <Route path="/sermons" element={<AllSermonsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
