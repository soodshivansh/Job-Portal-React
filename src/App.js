import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Changed to 'Routes'
import JobOpenings from './components/JobOpenings';
import JobPage from './components/JobPage/JobPage';
import Testimonials from './components/Testimonials';
import WrapperQuick from './components/WrapperQuick';
import Footer from './components/footer/Footer';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import LogoSlider from './components/slider';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jobpage" element={<JobPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

const HomePage = () => (
  <>
    <Hero />
    <LogoSlider />
    <WrapperQuick />
    <JobOpenings />
    <Testimonials />
  </>
);

export default App;
