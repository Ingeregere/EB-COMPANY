import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import {MdFingerprint} from "react-icons/all";

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>

        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Apropos</h2>
            <Link to='/'>Apropos</Link>
            <Link to='/'>Activités</Link>
            <Link to='/'>Confidentialité</Link>

          </div>
          <div className='footer-link-items'>
            <h2>Contactez-nous</h2>
            <Link to='/'>Par Email</Link>
            <Link to='/'>Whatsapp</Link>
            <Link to='/'>Téléphone</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>

          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <MdFingerprint className='navbar-icon' />
              EB-COMPANY
            </Link>
          </div>
          <small className='website-rights'>EB-COMPANY © {new Date().getFullYear()}{" "}</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <FaFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <FaInstagram />
            </Link>
            <Link
              className='social-icon-link'
              to={
                '/'
              }
              target='_blank'
              aria-label='Youtube'
            >
              <FaYoutube />
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
