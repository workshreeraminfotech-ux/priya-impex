import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Ship, ArrowRight, Sparkles } from 'lucide-react';
import { addEnquiry } from '../utils/adminStore';

const countryCodes = ['+91', '+1', '+44', '+971', '+65', '+27', '+49', '+61', '+33', '+86', '+55', '+52'];

export default function BrochureModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    company: '',
    country: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Send lead to sales@priyaimpexs.com via addEnquiry
      await addEnquiry({
        source: 'Website Brochure Download Popup',
        name: formData.name,
        company: formData.company || 'Not Specified',
        email: formData.email,
        phone: `${formData.countryCode} ${formData.phone}`,
        product: 'Priya Impex Export Brochure 2026 (PDF)',
        quantity: 'N/A (Catalog Request)',
        destinationPort: formData.country || 'Global',
        notes: `User downloaded official Priya Impex Spice Catalog & Export Specs 2026. Destination / Market: ${formData.country || 'General'}`
      });

      // 2. Trigger automatic PDF download
      const link = document.createElement('a');
      link.href = '/Priya%20Impex%20brochure.pdf';
      link.download = 'Priya_Impex_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting brochure request:', err);
      // Fallback download if API errors
      const link = document.createElement('a');
      link.href = '/Priya%20Impex%20brochure.pdf';
      link.download = 'Priya_Impex_Brochure.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <div 
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(7, 23, 46, 0.82)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px 16px'
        }} 
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '24px',
            width: '100%',
            maxWidth: '560px',
            maxHeight: '90vh',
            overflowY: 'auto',
            position: 'relative',
            boxShadow: '0 25px 60px rgba(0, 33, 71, 0.35)',
            border: '1px solid rgba(200, 148, 10, 0.25)'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            aria-label="Close modal"
            style={{
              position: 'absolute',
              top: 16,
              right: 16,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              border: 'none',
              borderRadius: '50%',
              width: 34,
              height: 34,
              color: '#FFFFFF',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 20,
              transition: 'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.35)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'}
          >
            <X size={18} />
          </button>

          {/* Modal Header */}
          <div style={{
            background: 'linear-gradient(135deg, #0B2240 0%, #16365C 100%)',
            color: '#FFFFFF',
            padding: '30px 28px 24px',
            position: 'relative',
            borderTopLeftRadius: '24px',
            borderTopRightRadius: '24px'
          }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(200, 148, 10, 0.2)', border: '1px solid #C8940A', padding: '4px 12px', borderRadius: '100px', fontSize: '11px', fontWeight: 800, color: '#F5C542', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '12px' }}>
              <FileText size={13} />
              <span>Official 2026 Export Catalog</span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-h, Outfit, sans-serif)', fontSize: '22px', fontWeight: 800, color: '#FFFFFF', marginBottom: '8px', lineHeight: 1.25 }}>
              Download Product Brochure
            </h3>

            <p style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', lineHeight: 1.5, margin: 0 }}>
              Get our complete technical catalog including Sortex purity specs, container stuffing capacities, moisture data, and port shipping terms.
            </p>
          </div>

          {/* Modal Content */}
          <div style={{ padding: '24px 28px' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '24px 10px' }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#DEF7EC',
                  color: '#03543F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0B2240', marginBottom: '8px' }}>
                  Brochure Downloaded!
                </h4>
                <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.6, marginBottom: '24px' }}>
                  Thank you! Your official Priya Impex Export Catalog has been downloaded. Our Export Desk will also email customized container pricing if you require FOB/CIF quotes.
                </p>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                  <button
                    className="btn btn-primary"
                    onClick={onClose}
                    style={{ padding: '10px 24px', fontSize: '14px' }}
                  >
                    Continue Browsing
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#0B2240', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma / John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '13.5px',
                        outline: 'none',
                        color: '#0B2240',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#0B2240', marginBottom: '6px' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="importer@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '13.5px',
                        outline: 'none',
                        color: '#0B2240',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#0B2240', marginBottom: '6px' }}>
                      Phone / WhatsApp *
                    </label>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      <select
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        style={{
                          width: '85px',
                          padding: '10px 8px',
                          borderRadius: '10px',
                          border: '1.5px solid #CBD5E1',
                          fontSize: '13.5px',
                          outline: 'none',
                          color: '#0B2240',
                          backgroundColor: '#F8FAFC'
                        }}
                      >
                        {countryCodes.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <input
                        type="tel"
                        required
                        placeholder="Mobile number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{
                          flex: 1,
                          padding: '10px 14px',
                          borderRadius: '10px',
                          border: '1.5px solid #CBD5E1',
                          fontSize: '13.5px',
                          outline: 'none',
                          color: '#0B2240',
                          boxSizing: 'border-box'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <label style={{ display: 'block', fontSize: '12.5px', fontWeight: 700, color: '#0B2240', marginBottom: '6px' }}>
                      Company / Country (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Spice Imports LLC / UK"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '10px 14px',
                        borderRadius: '10px',
                        border: '1.5px solid #CBD5E1',
                        fontSize: '13.5px',
                        outline: 'none',
                        color: '#0B2240',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                {/* Instant Highlights */}
                <div style={{
                  backgroundColor: '#F8FAFC',
                  borderRadius: '12px',
                  padding: '12px 16px',
                  border: '1px solid #E2E8F0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontSize: '12.5px',
                  color: '#475569'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={14} style={{ color: '#C8940A', flexShrink: 0 }} />
                    <span>Includes Spices Board, APEDA, FSSAI & ISO Compliance Details</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Ship size={14} style={{ color: '#C8940A', flexShrink: 0 }} />
                    <span>20ft & 40ft Container Loadability & Mundra Port Transit Schedules</span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '13px 20px',
                    fontSize: '15px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    borderRadius: '12px',
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  <Download size={18} />
                  <span>{loading ? 'Preparing Brochure...' : 'Download Brochure (PDF)'}</span>
                </button>

                <p style={{ fontSize: '11.5px', color: '#94A3B8', textAlign: 'center', margin: '0' }}>
                  🔒 Direct B2B Download. Your contact information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
