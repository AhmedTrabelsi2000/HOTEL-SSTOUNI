import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Hotel Donia

          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Acceuil
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/chambres'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Chambres
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/hotel'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Resto-Bar & Lounge
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/apropos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                A propos
              </Link>
            </li>



          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
