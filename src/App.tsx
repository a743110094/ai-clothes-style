import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ShaderBackground from './components/ShaderBackground';
import './App.css';

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-800 to-slate-700">
      {/* Shader Background */}
      <ShaderBackground />
      
      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;