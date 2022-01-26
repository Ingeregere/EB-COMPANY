import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,useLocation } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const mainContent = React.useRef(null);
  const location = useLocation();


  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
  }, [location]);

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
    window.addEventListener('resize', showButton);
    return (
        window.removeEventListener('resize', showButton)
    )
  }, []);

const alt = 'image logo'
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar' ref={mainContent}>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <img src={'images/logonobground.png'} className={'imagelogo'} alt={alt} />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/realisation' className='nav-links' onClick={closeMobileMenu}>
                  Accueil
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/android&ios'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Realisation
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/application&logiciel'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Produits
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
