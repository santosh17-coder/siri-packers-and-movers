import React from 'react';
import BookingForm from '../components/BookingForm.jsx';
import { PRIMARY_PHONE, SECONDARY_PHONE, TERTIARY_PHONE, EMAIL, WHATSAPP_NUM } from '../utils/constants.js';

const Contact = () => {
  return (
    <div className="contact-page" style={{ paddingTop: '0' }}>
      <div className="page-header">
        <div className="container">
          <h1>Contact Siri Packers &amp; Movers Hyderabad</h1>
          <p>Get a free quote for house shifting, packing loading unloading &amp; transportation services!</p>
        </div>
      </div>
      <div className="container section-padding" style={{ paddingTop: '0' }}>
        <div className="contact-container">
          <div className="contact-info-panel">
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Our Office</h4>
                <p>Mansoorabad, Hyderabad, Telangana - 500068</p>
              </div>
            </div>
            <div className="info-card">
              <i className="fas fa-phone-alt"></i>
              <div>
                <h4>Call Us</h4>
                <p>
                  <a href={`tel:${PRIMARY_PHONE.replace(/ /g, '')}`}>{PRIMARY_PHONE}</a><br/>
                  <a href={`tel:${SECONDARY_PHONE.replace(/ /g, '')}`}>{SECONDARY_PHONE}</a><br/>
                  <a href={`tel:${TERTIARY_PHONE.replace(/ /g, '')}`}>{TERTIARY_PHONE}</a>
                </p>
              </div>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email Us</h4>
                <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
              </div>
            </div>
            <div className="info-card">
              <i className="fab fa-whatsapp"></i>
              <div>
                <h4>WhatsApp</h4>
                <p><a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi Siri Packers, I need a quote for house shifting`} target="_blank" rel="noreferrer">{PRIMARY_PHONE}</a></p>
              </div>
            </div>
            <div className="map-container shadow-card" style={{ marginTop: '20px' }}>
              <iframe
                src="https://maps.google.com/maps?q=17%C2%B020'57.7%22N%2078%C2%B034'05.7%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                title="Siri Packers and Movers office location in Mansoorabad Hyderabad"
              ></iframe>
            </div>
          </div>
          <div className="contact-form shadow-card" style={{ padding: '30px' }}>
            <BookingForm title="Get a Free Quote for Your Move" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
