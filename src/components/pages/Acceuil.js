import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Acceuil() {
  return (
    <>
      <HeroSection />    
      <div className="number-section">
        <img src="images/apropos.jpg" alt="Mon Hôtel en chiffres" />
        <div className="number-container">
        
          <div className="number">
            <span>45</span>
            <p>Chambres</p>
          </div>
          <div className="number">
            <span>12</span>
            <p>Mois d'ouverture</p>
          </div>
          <div className="number">
            <span>4</span>
            <p>Etoiles</p>
          </div>
          <div className="number">
            <span>1</span>
            <p>Lieu unique</p>
          </div>
        </div>
      </div>  
      <Cards />
      <Footer />
    </>
  );
}

export default Acceuil;
