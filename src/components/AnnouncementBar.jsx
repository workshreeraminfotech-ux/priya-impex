import React from 'react';
import { Phone, Mail, Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="announcement-left">
          <a href="tel:+919328602931" className="announcement-item">
            <Phone size={14} color="var(--gold)" />
            <span>+91 9328602931</span>
          </a>
          <a href="mailto:sales@priyaimpexs.com" className="announcement-item">
            <Mail size={14} color="var(--gold)" />
            <span>sales@priyaimpexs.com</span>
          </a>
        </div>

        <div className="announcement-center-badge" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200, 148, 10, 0.15)', border: '1px solid rgba(200, 148, 10, 0.4)', padding: '3px 12px', borderRadius: '100px', fontSize: '12px', color: 'var(--gold-light)', fontWeight: 600 }}>
          <span style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', animation: 'pulse 1.5s infinite' }}></span>
          <span>🚢 <strong>Live Milestone:</strong> 100% Full Container Cargo Exported & Dispatched to Malaysia! 🇲🇾</span>
        </div>

        <div className="announcement-right">
          <span style={{ fontSize: '12px', opacity: 0.8, fontWeight: 600 }}>Follow Us:</span>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
              <Instagram size={14} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
              <Linkedin size={14} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
              <Facebook size={14} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=919328602931&text=Hi%20Priya%20Impex!%20I%20would%20like%20to%20enquire%20about%20your%20export%20commodities." target="_blank" rel="noopener noreferrer" className="social-icon" title="Business WhatsApp">
              <MessageCircle size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
