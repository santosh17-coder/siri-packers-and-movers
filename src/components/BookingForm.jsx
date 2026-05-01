import React, { useState } from 'react';
import { WHATSAPP_NUM, PRIMARY_PHONE, SECONDARY_PHONE, TERTIARY_PHONE, EMAIL } from '../utils/constants.js';

const BookingForm = ({ title = "Get a Free Quote", className = "" }) => {
  const [formData, setFormData] = useState({
    name: '', phone: '', pickup: '', drop: '', date: '', service: '', message: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

  // Get today's date in YYYY-MM-DD format for the date picker minimum
  const todayDate = new Date().toISOString().split('T')[0];

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const { name, phone, pickup, drop, date, service, message } = formData;

    // Phone validation (at least 10 digits)
    const digitsOnly = phone.replace(/\D/g, '');
    if (digitsOnly.length < 10) {
      alert('Please enter a valid phone number (at least 10 digits).');
      return;
    }

    // Pickup & Drop validation
    if (pickup.trim().toLowerCase() === drop.trim().toLowerCase()) {
      alert('Pickup and Drop locations cannot be the same.');
      return;
    }

    // Date validation (fallback in case browser bypasses min attribute)
    if (date < todayDate) {
      alert('Moving date cannot be in the past.');
      return;
    }

    const whatsappMessage = `New Booking:%0AName: ${name}%0APhone: ${phone}%0AFrom: ${pickup}%0ATo: ${drop}%0ADate: ${date}%0AService: ${service}%0AMessage: ${message ? message : ''}`;
    window.open(`https://wa.me/${WHATSAPP_NUM}?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', phone: '', pickup: '', drop: '', date: '', service: '', message: '' });
  };

  return (
    <div className={`contact-form ${className}`}>
      <h3>{title}</h3>
      <form id="bookingForm" onSubmit={handleBookingSubmit}>
        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div className="input-group" style={{ flex: 1 }}>
            <input type="text" id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
          </div>
        </div>
        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div className="input-group" style={{ flex: 1 }}>
            <input type="text" id="pickup" placeholder="Pickup (e.g. Hyd)" value={formData.pickup} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <input type="text" id="drop" placeholder="Drop Location" value={formData.drop} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }} />
          </div>
        </div>
        <div className="form-row" style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
          <div className="input-group" style={{ flex: 1, position: 'relative' }}>
            {!formData.date && (
              <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#757575', pointerEvents: 'none', fontSize: '0.95rem' }}>
                Moving Date
              </div>
            )}
            <input 
              type="date" 
              id="date" 
              value={formData.date} 
              min={todayDate} 
              onChange={handleChange} 
              required 
              style={{ 
                width: '100%', 
                padding: '12px', 
                border: '1px solid #ddd', 
                borderRadius: '6px',
                color: formData.date ? 'inherit' : 'transparent',
                backgroundColor: 'white',
                appearance: 'none',
                WebkitAppearance: 'none',
                minHeight: '45px'
              }} 
            />
          </div>
          <div className="input-group" style={{ flex: 1 }}>
            <select id="service" value={formData.service} onChange={handleChange} required style={{ width: '100%', padding: '12px', border: '1px solid #ddd', borderRadius: '6px' }}>
              <option value="" disabled>Select Service Type</option>
              <option value="Household Shifting">Household Shifting</option>
              <option value="Local Shifting">Local Shifting</option>
              <option value="Interstate Relocation">Interstate Relocation</option>
              <option value="Office Relocation">Office Relocation</option>
              <option value="Car Transportation">Car Transportation</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', whiteSpace: 'normal', textAlign: 'center', lineHeight: '1.4' }}>
          <i className="fab fa-whatsapp"></i> Send Details via WhatsApp
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
