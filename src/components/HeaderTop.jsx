import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';

export default function HeaderTop() {
  return (
    <div 
      className="header-top-section style-v01 d-lg-block d-none" 
      style={{ 
        background: 'var(--navy-dark)', 
        color: '#ffffff', 
        padding: '12px 0', 
        fontSize: '14.5px', 
        borderBottom: '1px solid rgba(255,255,255,0.1)' 
      }}
    >
      <div className="container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '9px', color: 'rgba(255,255,255,0.92)', fontWeight: 500 }}>
              <MapPin size={16} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
              Global Export Hubs: Rajkot (India) & Johannesburg (SA)
            </span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '26px' }}>
            <a href="tel:+918200712955" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.92)', textDecoration: 'none', fontWeight: 600 }}>
              <Phone size={16} style={{ color: 'var(--accent-cyan)' }} />
              +91 82007 12955
            </a>
            <a href="mailto:marvexinternational@gmail.com" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'rgba(255,255,255,0.92)', textDecoration: 'none', fontWeight: 600 }}>
              <Mail size={16} style={{ color: 'var(--accent-cyan)' }} />
              marvexinternational@gmail.com
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '10px', borderLeft: '1px solid rgba(255,255,255,0.2)', paddingLeft: '18px' }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silver-glow)', transition: 'color 0.2s' }} aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silver-glow)', transition: 'color 0.2s' }} aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--silver-glow)', transition: 'color 0.2s' }} aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


