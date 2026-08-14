import React from 'react';
import { Facebook, Instagram, Linkedin, MessageCircle, ChevronRight, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function FooterSection({ onNavigate }) {
  return (
    <footer className="footer-redesign-section">
      <div className="container">
        <div className="footer-top-grid">
          {/* Col 1: Brand & Bio */}
          <div className="footer-col-brand">
            <div 
              className="footer-logo-wrap" 
              onClick={() => { if (onNavigate) onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img src={logoImg} alt="Priya Impex" />
            </div>
            <p className="footer-bio-text">
              Priya Impex is a premier Indian exporter of high-grade food & agricultural products. Delivering trust, exporting excellence directly to global markets.
            </p>
            <div className="footer-social-row">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h3>Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('home'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Home
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('about'); }}>
                  <ChevronRight size={14} className="link-arrow" /> About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Products
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('blog'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Blogs
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('contact'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Product Categories */}
          <div className="footer-col">
            <h3>Spice Categories</h3>
            <ul className="footer-links-list">
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Ground Spices
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Whole Spices
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Seed Spices
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('products'); }}>
                  <ChevronRight size={14} className="link-arrow" /> Blended Spices
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="footer-col">
            <h3>Contact Us</h3>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Rajkot, Gujarat-360004, INDIA</span>
              </div>
              <a href="tel:+919328602931" className="footer-contact-item item-link">
                <Phone size={18} className="contact-icon" />
                <span>+91 9328602931</span>
              </a>
              <a href="mailto:sales@priyaimpexs.com" className="footer-contact-item item-link">
                <Mail size={18} className="contact-icon" />
                <span>sales@priyaimpexs.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom copyright bar */}
        <div className="footer-bottom-bar">
          <p>© {new Date().getFullYear()} Priya Impex. All Rights Reserved.</p>
          <div className="footer-bottom-right">
            <span>
              Developed by{' '}
              <a 
                href="https://www.matrixtechx.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ color: '#F5C542', fontWeight: 800, textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'}
                onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}
              >
                MatrixTechX
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}


