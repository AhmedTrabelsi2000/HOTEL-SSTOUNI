import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>

        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
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
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              HOTEL DONIA

            </Link>
          </div>
          <small class='website-rights'>HOTEL DONIA © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            
            
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
