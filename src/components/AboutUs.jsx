import React from 'react';
import { ArrowRight, Truck } from 'lucide-react';
import { motion } from 'framer-motion';
import aboutUsImg from '../assets/about us.webp';

export default function AboutUs({ onNavigate }) {
  return (
    <section className="about-section py-50" id="about" style={{ backgroundColor: '#FFFFFF', padding: '54px 0' }}>
      <div className="container">
        <div className="about-grid-wrapper">
          
          {/* Photo Column (Left on Laptop, Appears right after Intro on Phone) */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', width: '100%' }}
          >
            {/* Main About Us Photo Frame */}
            <div style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              boxShadow: '0 18px 40px rgba(200, 148, 10, 0.1)',
              backgroundColor: '#FFFDF7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              width: '100%'
            }}>
              <img
                src={aboutUsImg}
                alt="About Priya Impex Corporate & Facility"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'contain',
                  borderRadius: '18px',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
          </motion.div>

          {/* Content Column (Right on Laptop, Flow on Phone) */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Intro Lead Block */}
            <div className="about-intro-lead-block">
              <span className="eyebrow" style={{ marginBottom: '14px' }}>
                PRIYA IMPEX • PREMIER INDIAN SPICES EXPORTS
              </span>

              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '12px 0 16px', fontFamily: 'var(--font-h, Outfit, sans-serif)' }}>
                Delivering Trust, <span style={{ color: 'var(--gold)' }}>Exporting Excellence</span>
              </h2>

              <p style={{ fontSize: '16px', color: '#475569', lineHeight: 1.65, marginBottom: '20px', fontWeight: 500 }}>
                <strong>Priya Impex</strong> is a premier Indian merchant exporter based in <strong>Gujarat, India</strong>. We specialize in authentic whole spices, seed spices, and fine ground powders with end-to-end laboratory testing and global container freight logistics.
              </p>
            </div>

            {/* Mobile Injected Photo Slot (Visible only on phone) */}
            <div className="about-mobile-photo-placement" />

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '18px' }}>
              Priya Impex has recently completed and dispatched a full container shipment of premium Indian spices straight to <strong>Malaysia</strong> with 100% custom compliance, zero inspection delays, and guaranteed quality.
            </p>

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '28px' }}>
              With our dedicated export management and direct supply chain network, our international clients benefit from rapid decision-making, direct accountability, transparent pricing, and seamless shipping execution.
            </p>

            {/* Action CTA */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onNavigate ? onNavigate('products') : null} 
                className="btn btn-primary" 
                style={{ padding: '13px 32px', fontSize: '14.5px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
