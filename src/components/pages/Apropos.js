import React from 'react';
import '../../App.css';
import '../Apropos.css';
import Footer from '../Footer';

export default function Apropos() {
  return (
    <div className="apropos-container">
      <div className="apropos-image">
        <img src="images/apropos.jpg" alt="Ravi de vous accueillir" />
        <div className="apropos-text">
          <h2>Ravi de vous accueillir</h2>
          <p>Vous trouverez ci-dessous les informations nécessaires à propos de nous.</p>
        </div>
      </div>
      

      <Footer/>
    </div>
  );
}