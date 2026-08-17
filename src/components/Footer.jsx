import React from 'react';
import { Instagram, Linkedin, Facebook, MessageCircle } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="footer" style={{ background: '#0B2240', color: '#fff', padding: '60px 0 20px', borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '40px', marginBottom: '40px' }}>
          <div className="footer-brand">
            <div style={{ marginBottom: '20px' }}>
              <img src={logoImg} alt="Priya Impex Logo" style={{ height: '60px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.75)', margin: '16px 0 20px', lineHeight: 1.6 }}>
              Priya Impex is a premier Indian exporter of high-grade agro commodities, spices, seeds, and food products. Delivering trust, exporting excellence globally.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/people/Priya-impex/61586308456903/" target="_blank" rel="noopener noreferrer" className="social-icon" title="Facebook">
                <Facebook size={15} />
              </a>
              <a href="https://www.instagram.com/priya_impex_in?igsh=OGtwdjdzeDdvOWZ6" target="_blank" rel="noopener noreferrer" className="social-icon" title="Instagram">
                <Instagram size={15} />
              </a>
              <a href="https://in.linkedin.com/company/priyaimpex-india" target="_blank" rel="noopener noreferrer" className="social-icon" title="LinkedIn">
                <Linkedin size={15} />
              </a>
              <a href="https://api.whatsapp.com/send?phone=919328602931&text=Hi%20Priya%20Impex!" target="_blank" rel="noopener noreferrer" className="social-icon" title="Business WhatsApp">
                <MessageCircle size={14} />
              </a>
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#about" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>About Us</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Products</a></li>
              <li><a href="#blog" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Blog</a></li>
              <li><a href="#faq" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>FAQ</a></li>
              <li><a href="#contact" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Categories</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px' }}>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Ground Spices</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Whole Spices</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Herbal Powders</a></li>
              <li><a href="#products" style={{ color: 'rgba(255, 255, 255, 0.75)' }}>Agricultural Seeds</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '20px' }}>Connect Desk</h4>
            <div className="footer-contact">
              <strong>Phone / WhatsApp:</strong> +91 9328602931
            </div>
            <div className="footer-contact">
              <strong>Email:</strong> sales@priyaimpexs.com
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.75)' }}>
              <strong>Location:</strong> Rajkot, Gujarat (India)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Priya Impex. All Rights Reserved.</p>
          <p>
            Developed by{' '}
            <a 
              href="https://www.matrixtechx.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ color: '#F5C542', fontWeight: 800, textDecoration: 'none' }}
              onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
            >
              MatrixTechX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
