import React from 'react';
import { ArrowRight, Award, Globe2, Truck, CheckCircle2, Building2, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import aboutUsImg from '../assets/about us.png';

export default function AboutUs() {
  return (
    <section className="about-section py-50" id="about" style={{ backgroundColor: '#FFFFFF', padding: '54px 0' }}>
      <div className="container">
        <div className="about-grid-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '54px', alignItems: 'center' }}>
          
          {/* Left: User-Provided About Us Image */}
          <motion.div
            className="about-image-col"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative', width: '100%', maxWidth: '100%' }}
          >
            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '20px',
              background: 'linear-gradient(135deg, #2A1D08 0%, #4D3508 100%)',
              color: '#FFFFFF',
              padding: '16px 26px',
              borderRadius: '20px',
              boxShadow: '0 16px 36px rgba(200, 148, 10, 0.25)',
              border: '2px solid #F5C542',
              zIndex: 10,
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              backdropFilter: 'blur(8px)',
              maxWidth: 'calc(100% - 40px)'
            }}>
              <span style={{ fontSize: '36px', fontWeight: 900, fontFamily: 'var(--font-h, Outfit, sans-serif)', color: '#F5C542', lineHeight: 1 }}>
                <AnimatedCounter end={10} suffix="+" />
              </span>
              <span style={{ fontSize: '13px', fontWeight: 800, lineHeight: 1.35, color: '#FFF8E7', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Years of Corporate<br />Export Excellence
              </span>
            </div>

            {/* Main About Us Photo Container */}
            <div style={{
              position: 'relative',
              borderRadius: '28px',
              overflow: 'hidden',
              border: '2px solid var(--border)',
              boxShadow: '0 20px 45px rgba(200, 148, 10, 0.1)',
              backgroundColor: '#FFFDF7',
              marginTop: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px',
              width: '100%'
            }}>
              <img
                src={aboutUsImg}
                alt="About Priya Impex Corporate & Facility"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '460px',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  display: 'block',
                  transition: 'transform 0.5s ease'
                }}
              />
            </div>
          </motion.div>

          {/* Right: Corporate Story & Business Overview */}
          <motion.div
            className="about-content-col"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">
              PRIYA IMPEX • PREMIER INDIAN AGRO EXPORTS
            </span>

            <h2 style={{ fontSize: '38px', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '16px 0 20px', fontFamily: 'var(--font-h, Outfit, sans-serif)' }}>
              Delivering Trust, <span style={{ color: 'var(--gold)' }}>Exporting Excellence</span>
            </h2>

            <p style={{ fontSize: '16px', color: 'var(--gray)', lineHeight: 1.65, marginBottom: '16px', fontWeight: 500 }}>
              <strong>Priya Impex</strong> is a premier Indian merchant exporter based in <strong>Gujarat, India</strong>. We specialize in end-to-end sourcing, quality testing, lab certification, and international container freight logistics.
            </p>

            {/* Malaysia Shipment Milestone Highlight Card */}
            <div style={{ background: 'linear-gradient(135deg, #2A1D08 0%, #4D3508 100%)', padding: '20px 22px', borderRadius: '18px', borderLeft: '5px solid #F5C542', borderTop: '1px solid rgba(245, 197, 66, 0.3)', marginBottom: '20px', color: '#fff', boxShadow: '0 8px 25px rgba(200, 148, 10, 0.15)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '15px', fontWeight: 800, color: '#F5C542', marginBottom: '6px' }}>
                <Truck size={22} color="#F5C542" />
                <span>Recent Milestone: Successful Malaysia Container Export 🚢🇲🇾</span>
              </div>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.92)', margin: 0, lineHeight: 1.55 }}>
                Priya Impex has recently completed and dispatched a full container shipment of premium agricultural commodities straight to <strong>Malaysia</strong> with 100% custom compliance, zero inspection delays, and guaranteed quality.
              </p>
            </div>

            <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, marginBottom: '28px' }}>
              With our dedicated export management and direct supply chain network, our international clients benefit from rapid decision-making, direct accountability, transparent pricing, and seamless shipping execution.
            </p>

            {/* Corporate Highlights Grid */}
            <div className="about-highlights-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: 'var(--black)', background: '#FFFDF7', padding: '12px 16px', borderRadius: '14px', border: '1px solid var(--border)' }}>
                <ShieldCheck size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span>ISO & APEDA Certified Exporter</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: 'var(--black)', background: '#FFFDF7', padding: '12px 16px', borderRadius: '14px', border: '1px solid var(--border)' }}>
                <Globe2 size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span>Malaysia & Global Shipping</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: 'var(--black)', background: '#FFFDF7', padding: '12px 16px', borderRadius: '14px', border: '1px solid var(--border)' }}>
                <Award size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span>APEDA & FSSAI Certified</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', fontWeight: 700, color: 'var(--black)', background: '#FFFDF7', padding: '12px 16px', borderRadius: '14px', border: '1px solid var(--border)' }}>
                <Truck size={18} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span>Full Container Dispatch (FCL)</span>
              </div>
            </div>

            {/* Action CTA */}
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
              <a href="#products-section" className="btn btn-primary" style={{ padding: '14px 36px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
