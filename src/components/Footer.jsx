import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_NUM, PRIMARY_PHONE, SECONDARY_PHONE, TERTIARY_PHONE, EMAIL } from '../utils/constants.js';

const Footer = () => (
  <footer className="footer" role="contentinfo">
    <div className="container footer-content">
      <div className="footer-about">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ display: 'inline-block', marginBottom: '15px' }}>
          <img src="/homelogo.png" alt="Siri Packers and Movers Hyderabad Logo" style={{ height: '60px', width: 'auto', background: 'white', padding: '5px', borderRadius: '8px' }} loading="lazy" />
        </Link>
        <h3>Siri Packers &amp; Movers</h3>
        <p>Hyderabad's most trusted packers and movers since 2010. Safe, reliable, and affordable household goods shifting, packing loading unloading, car transport &amp; office relocation services across India.</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/people/Siri-Packers-and-Movers/61580875941981/?rdid=C4upAbVFHrD4F8Dg&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DYrRPb8Ur%2F" target="_blank" rel="noreferrer" aria-label="Siri Packers and Movers on Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/siri_packers_and_movers?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer" aria-label="Siri Packers and Movers on Instagram"><i className="fab fa-instagram"></i></a>
          <a href="https://www.justdial.com/Hyderabad/Siri-Packers-and-Movers-Mansoorabad/040PXX40-XX40-120111130623-S4K2_BZDET" target="_blank" rel="noreferrer" aria-label="Siri Packers and Movers on JustDial"><span style={{ fontWeight: '900', fontSize: '1rem', fontStyle: 'italic' }}>Jd</span></a>
          <a href={`mailto:${EMAIL}`} aria-label="Email Siri Packers and Movers"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/#about">About Us</a></li>
          <li><a href="/#services">Our Services</a></li>
          <li><a href="/#why-choose">Why Choose Us</a></li>
          <li><a href="/#gallery">Gallery</a></li>
          <li><a href="/#faq">FAQs</a></li>
          <li><a href="/#contact">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3>Contact Us</h3>
        <p style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '5px' }}>
          <i className="fas fa-phone-alt" style={{ color: 'var(--primary-red)' }}></i>
          <a href={`tel:${PRIMARY_PHONE.replace(/ /g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>{PRIMARY_PHONE}</a> /{' '}
          <a href={`tel:${SECONDARY_PHONE.replace(/ /g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>{SECONDARY_PHONE}</a> /{' '}
          <a href={`tel:${TERTIARY_PHONE.replace(/ /g, '')}`} style={{ color: 'inherit', textDecoration: 'none' }}>{TERTIARY_PHONE}</a>
        </p>
        <p>
          <i className="fab fa-whatsapp" style={{ color: 'var(--primary-red)' }}></i>{' '}
          <a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi%20Siri%20Packers,%20I%20need%20a%20quote%20for%20house%20shifting`} target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{PRIMARY_PHONE}</a>
        </p>
        <p>
          <i className="fas fa-envelope" style={{ color: 'var(--primary-red)' }}></i>{' '}
          <a href={`mailto:${EMAIL}`} style={{ color: 'inherit', textDecoration: 'none' }}>{EMAIL}</a>
        </p>
        <p>
          <i className="fas fa-map-marker-alt" style={{ color: 'var(--primary-red)' }}></i>{' '}
          <a href="/#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Mansoorabad, Hyderabad - 500068</a>
        </p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; {new Date().getFullYear()} Siri Packers &amp; Movers. All Rights Reserved. | Best Packers and Movers in Hyderabad</p>
    </div>
  </footer>
);

export default Footer;
