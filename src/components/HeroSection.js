import React from 'react';
import '../App.css';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>BIENVENUE </h1>
      <p>A notre site web</p>
    </div>
  );
}

export default HeroSection;
