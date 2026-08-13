import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBgVideo from '../assets/hero-bg.mp4';

export default function HeroBannerSlider({ onOpenQuote, onNavigate }) {
  return (
    <section 
      className="jrp-hero-section" 
      style={{ 
        position: 'relative', 
        minHeight: '460px', 
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden', 
        background: 'linear-gradient(135deg, #1C1917 0%, #2A1D08 40%, #4D3508 100%)' 
      }}
    >
      {/* Background Video — Enhanced & Highlighted */}
      <video 
        className="hero-video-bg" 
        autoPlay 
        loop 
        muted 
        playsInline
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          opacity: 0.85,
          filter: 'brightness(1.05) contrast(1.1) saturate(1.1)',
          zIndex: 1 
        }}
      >
        <source src={heroBgVideo} type="video/mp4" />
      </video>

      {/* Warm Golden Amber Overlay Vignette */}
      <div 
        className="hero-video-overlay" 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(180deg, rgba(42, 29, 8, 0.65) 0%, rgba(28, 25, 23, 0.75) 50%, rgba(77, 53, 8, 0.85) 100%)', 
          zIndex: 2 
        }}
      ></div>

      <div className="container" style={{ position: 'relative', zIndex: 3, padding: '44px 24px' }}>
        <div style={{ maxWidth: '780px' }}>
          
          {/* Global Brand Certification Pill */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <motion.div 
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(42, 29, 8, 0.92)', border: '1.5px solid #F5C542', backdropFilter: 'blur(8px)', padding: '6px 18px', borderRadius: '100px' }}
            >
              <span className="badge-dot" style={{ background: '#F5C542' }}></span>
              <span style={{ fontSize: '12.5px', fontWeight: 800, color: '#F5C542', letterSpacing: '1px', textTransform: 'uppercase' }}>
                PRIYA IMPEX • DELIVERING TRUST, EXPORTING EXCELLENCE
              </span>
            </motion.div>
          </div>

          {/* Hero Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: 'var(--font-h)', fontSize: '44px', fontWeight: 900, color: '#ffffff', lineHeight: 1.14, marginBottom: '16px', textShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
          >
            Priya Impex — Global Import & Export <br />
            <span style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F59E0B 50%, #D4AF37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Agro Commodity Specialist
            </span>
          </motion.h1>

          {/* Hero Paragraph */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontSize: '16.5px', color: 'rgba(255,255,255,0.92)', lineHeight: 1.58, marginBottom: '24px', maxWidth: '660px', textShadow: '0 2px 10px rgba(0,0,0,0.4)' }}
          >
            Priya Impex is a premier Indian merchant exporter delivering premium whole spices, ground powders, seeds, and agro commodities worldwide. From full container shipments to Malaysia & beyond, we guarantee 100% purity, speed, and export excellence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}
          >
            <button 
              className="btn btn-primary" 
              onClick={() => onNavigate ? onNavigate('contact') : null}
              style={{ padding: '13px 30px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.4)' }}
            >
              <span>Request Container Quote</span>
              <ArrowUpRight size={18} />
            </button>

            <button 
              className="btn-outline" 
              onClick={() => onNavigate ? onNavigate('products') : null}
              style={{ color: '#ffffff', borderColor: 'var(--gold)', padding: '12px 26px', fontSize: '15px', backdropFilter: 'blur(6px)', background: 'rgba(255,255,255,0.08)' }}
            >
              Explore Product Catalog
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
