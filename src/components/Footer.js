import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        Nous vous souhaitons la bienvenue dans notre hôtel, où chaque détail est soigneusement pensé pour vous offrir un séjour parfait.
         Découvrez un mélange unique de confort,
         de style et d'attention personnalisée.
        </p>
        
        <div className='input-areas'>

        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>A propos</h2>
            <p>Adresse: Route de l'aéroport km 0.5 , Sfax, Tunisia </p>
            <br />
            <p>Phone: 70 253 565 </p>
            <br />
            <p>Email: hoteldonia@hoteldonia.com.tn </p>

          </div>

        </div>
        <div className='footer-link-wrapper'>


        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              HOTEL DONIA

            </Link>
          </div>
          <small className='website-rights'>HOTEL DONIA © 2023</small>
          <div className='social-icons'>
          <a
  className='social-icon-link facebook'
  href='https://www.facebook.com/hoteldonia'
  target='_blank'
  rel='noopener noreferrer'
  aria-label='Facebook'
>
  <i className='fab fa-facebook-f' />
</a>
            
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
