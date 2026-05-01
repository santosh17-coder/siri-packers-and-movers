import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRIMARY_PHONE, SECONDARY_PHONE, TERTIARY_PHONE, EMAIL } from '../utils/constants.js';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const closeNav = () => setIsNavOpen(false);

  return (
    <header className="header" id="header">
      <div className="top-bar">
        <div className="container">
          <div className="contact-info">
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
              <i className="fas fa-phone-alt"></i>
              <a href={`tel:${PRIMARY_PHONE.replace(/ /g, '')}`} style={{ margin: 0 }}>{PRIMARY_PHONE}</a> /{' '}
              <a href={`tel:${SECONDARY_PHONE.replace(/ /g, '')}`} style={{ margin: 0 }}>{SECONDARY_PHONE}</a> /{' '}
              <a href={`tel:${TERTIARY_PHONE.replace(/ /g, '')}`} style={{ margin: 0 }}>{TERTIARY_PHONE}</a>
            </span>
            <span style={{ margin: '0 15px', color: 'rgba(255,255,255,0.4)' }}>|</span>
            <a href={`mailto:${EMAIL}`}><i className="fas fa-envelope"></i> {EMAIL}</a>
          </div>
          <div className="hours">
            <i className="fas fa-clock"></i> 24/7 Service | 14+ Years Exp
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo" onClick={(e) => {
            closeNav();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <img 
              src="/homelogo.png" 
              alt="Siri Packers & Movers Logo" 
              style={{ height: '60px', width: 'auto' }} 
              fetchpriority="high"
            />
          </Link>
          <ul className={`nav-links ${isNavOpen ? 'active' : ''}`}>
            <li><Link to="/" onClick={(e) => {
              closeNav();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>Home</Link></li>
            <li><a href="/#about" onClick={closeNav}>About Us</a></li>
            <li><a href="/#services" onClick={closeNav}>Services</a></li>
            <li><a href="/#why-choose" onClick={closeNav}>Why Choose Us</a></li>
            <li><a href="/#gallery" onClick={closeNav}>Gallery</a></li>
            <li><a href="/#contact" onClick={closeNav}>Contact Us</a></li>
          </ul>
          <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
            <i className={`fas ${isNavOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
