import React, { useState } from 'react';
import { Menu, X, ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (id) => {
    if (onNavigate) onNavigate(id);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const heroEl = document.getElementById('home') || document.querySelector('.hero-redesign-section') || document.querySelector('.hero-section') || document.querySelector('.jrp-hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    if (onNavigate) onNavigate('home');
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      const heroEl = document.getElementById('home') || document.querySelector('.hero-redesign-section') || document.querySelector('.hero-section') || document.querySelector('.jrp-hero');
      if (heroEl) {
        heroEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  return (
    <>
      <header className="jrp-header">
        <div className="container">
          <div className="jrp-header-inner" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '88px' }}>
            {/* Logo — Always scrolls to Hero Section */}
            <a href="#" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }} title="Priya Impex — Go to Home / Hero">
              <img 
                src={logoImg} 
                alt="Priya Impex" 
                className="jrp-header-logo-img" 
                style={{ 
                  height: '74px', 
                  width: 'auto', 
                  objectFit: 'contain',
                  filter: 'contrast(1.08) drop-shadow(0 2px 8px rgba(0,0,0,0.06))',
                  display: 'block'
                }} 
              />
            </a>

            {/* Desktop Navigation Menu — Clean links without hover popups */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="d-none-mobile">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('home'); }}
                style={{ fontWeight: 700, fontSize: '18px', color: activePage === 'home' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Home
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('about'); }}
                style={{ fontWeight: 700, fontSize: '18px', color: activePage === 'about' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                About Us
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('products'); }}
                style={{ fontWeight: 700, fontSize: '18px', color: activePage === 'products' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Products
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('blog'); }}
                style={{ fontWeight: 700, fontSize: '18px', color: activePage === 'blog' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Blogs
              </a>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleNav('contact'); }}
                style={{ fontWeight: 700, fontSize: '18px', color: activePage === 'contact' ? 'var(--gold)' : 'var(--navy)', textDecoration: 'none', transition: 'color 0.2s' }}
              >
                Contact Us
              </a>
            </nav>

            {/* Actions: CTA + Mobile Toggle */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
              <button
                className="btn btn-primary d-none-mobile"
                onClick={() => handleNav('contact')}
                style={{ fontSize: '15px', padding: '12px 24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Freight Quote</span>
                <ArrowRight size={16} />
              </button>

              <button
                className="mobile-menu-toggle-btn"
                onClick={() => setMobileOpen(true)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)', padding: '6px' }}
                aria-label="Toggle Navigation"
              >
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Offcanvas Drawer */}
      {mobileOpen && (
        <>
          <div className="jrp-offcanvas-overlay" onClick={() => setMobileOpen(false)} />
          <div className="jrp-offcanvas">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
              <div onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <img src={logoImg} alt="Priya Impex" style={{ height: '60px', width: 'auto', objectFit: 'contain', filter: 'contrast(1.08)' }} />
              </div>
              <button onClick={() => setMobileOpen(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--navy)' }}>
                <X size={24} />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '30px' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('home'); }} style={{ fontWeight: 700, fontSize: '18px', color: 'var(--navy)' }}>Home</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('about'); }} style={{ fontWeight: 700, fontSize: '18px', color: 'var(--navy)' }}>About Us</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('products'); }} style={{ fontWeight: 700, fontSize: '18px', color: 'var(--navy)' }}>Products</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('blog'); }} style={{ fontWeight: 700, fontSize: '18px', color: 'var(--navy)' }}>Blogs</a>
              <a href="#" onClick={(e) => { e.preventDefault(); handleNav('contact'); }} style={{ fontWeight: 700, fontSize: '18px', color: 'var(--navy)' }}>Contact Us</a>
            </div>

            {/* Offcanvas Contact Info */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <h4 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '14px', color: 'var(--navy)' }}>Contact Info</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px', color: 'var(--gray)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={16} style={{ color: 'var(--gold)' }} />
                  <span>Rajkot, Gujarat-360004, INDIA</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={16} style={{ color: 'var(--gold)' }} />
                  <span>sales@priyaimpexs.com</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Phone size={16} style={{ color: 'var(--gold)' }} />
                  <span>+91 9328602931</span>
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <button className="btn btn-primary" onClick={() => handleNav('contact')} style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Get A Quote</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
