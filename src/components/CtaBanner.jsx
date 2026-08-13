import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, ShieldCheck, Globe2, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenQuote, onNavigate }) {
  return (
    <section className="cta-banner-redesign-section">
      <div className="container">
        <motion.div
          className="cta-banner-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ background: 'linear-gradient(135deg, #07152E 0%, #0B1F42 100%)', border: '1px solid rgba(138,158,167,0.3)', borderRadius: '28px', padding: '48px' }}
        >
          <div className="cta-banner-grid">
            {/* Left Image Showcase */}
            <div className="cta-banner-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Connect with Priya Impex"
              />
              <div className="cta-image-floating-tag" style={{ background: 'rgba(7,21,46,0.9)', color: '#ffffff', border: '1px solid var(--gold)' }}>
                <Sparkles size={16} color="var(--gold-light)" />
                <span>Delivering Trust, Exporting Excellence</span>
              </div>
            </div>

            {/* Right Content & Actions */}
            <div className="cta-banner-content">
              <h2 style={{ fontSize: '38px', fontWeight: 900, color: '#ffffff', lineHeight: 1.2, marginBottom: '16px', fontFamily: 'var(--font-h)' }}>
                Connect With Us Today for <span style={{ color: 'var(--gold-light)' }}>Bulk Container Exports</span>
              </h2>

              <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '16px', lineHeight: 1.6, marginBottom: '24px' }}>
                Partner with Priya Impex for premium spices, oil seeds, herbs, and agricultural produce delivered to your port with guaranteed purity and complete export compliance.
              </p>

              <div className="cta-features-pill-row">
                <span className="cta-pill-item">
                  <ShieldCheck size={14} color="var(--accent-cyan)" /> ISO & APEDA Certified
                </span>
                <span className="cta-pill-item">
                  <ShieldCheck size={14} color="var(--accent-cyan)" /> Worldwide Port Dispatch
                </span>
              </div>

              <div className="cta-actions-row">
                <button 
                  className="btn btn-silver" 
                  onClick={() => onOpenQuote ? onOpenQuote() : (onNavigate && onNavigate('contact'))} 
                  style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <span>Request Container Quote</span>
                  <ArrowRight size={17} />
                </button>

                <button
                  onClick={() => onNavigate && onNavigate('contact')}
                  className="btn-outline-white"
                  style={{ padding: '12px 26px', fontSize: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '100px', border: '1.5px solid rgba(255,255,255,0.4)', color: '#ffffff', backgroundColor: 'transparent', cursor: 'pointer' }}
                >
                  <Globe2 size={16} />
                  <span>Contact Export Desk</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
