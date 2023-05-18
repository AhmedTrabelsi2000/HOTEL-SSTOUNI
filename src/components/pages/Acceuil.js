import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Acceuil() {
  return (
    <>
      <HeroSection />
      <div style={{ width: '100%', overflow: 'hidden' }}>
        <img src={process.env.PUBLIC_URL + '/images/chiffre.jpg'} style={{ width: '100%' }} alt="Image d'accueil" />
      </div>
      <Cards />
      <Footer />
    </>
  );
}

export default Acceuil;
