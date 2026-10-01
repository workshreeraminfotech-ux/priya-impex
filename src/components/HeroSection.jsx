import React from 'react';
import { ArrowRight, CheckCircle2, Globe2 } from 'lucide-react';
import heroBgVideo from '../assets/hero-bg.mp4';
import heroPosterImg from '../assets/hero-poster.webp';

export default function HeroSection() {
  return (
    <section className="jrp-hero-section" id="hero">
      {/* Background Video */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline 
        preload="metadata"
        poster={heroPosterImg}
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="hero-video-overlay"></div>

      <div className="container">
        <div className="jrp-hero-content-wrapper">
          <div className="jrp-hero-badge">
            <Globe2 size={14} />
            <span>World-Class Spices Exports</span>
          </div>

          <div className="jrp-hero-content">
            <h1>
              Indian Spices, <br />
              <span>Rooted in Purity</span>
            </h1>

            <p className="jrp-hero-description">
              Choose Priya Impex for premium whole spices, seed spices, and ground spices that meet the highest international standards. Delivering trust, exporting excellence.
            </p>

            <ul className="jrp-hero-list">
              <li>
                <CheckCircle2 size={18} />
                <span>Harvesting Trust, Shipping Quality</span>
              </li>
              <li>
                <CheckCircle2 size={18} />
                <span>From India's Soil to the World's Table</span>
              </li>
            </ul>

            <div className="jrp-hero-actions">
              <a href="#about" className="btn-primary" style={{ padding: '16px 36px', fontSize: '16px' }}>
                <span>Explore Spices</span>
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

