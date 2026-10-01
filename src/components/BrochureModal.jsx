import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Ship, ArrowRight, Sparkles } from 'lucide-react';

export default function BrochureModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDirectDownload = () => {
    // Direct PDF download without any form
    const link = document.createElement('a');
    link.href = '/Priya%20Impex%20brochure.pdf';
    link.download = 'Priya_Impex_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => {
      onClose();
    }, 2500);
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
            maxWidth: '520px',
            overflow: 'hidden',
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
            padding: '32px 28px 26px',
            position: 'relative',
            textAlign: 'center'
          }}>
            <div style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '6px', 
              background: 'rgba(200, 148, 10, 0.25)', 
              border: '1px solid #C8940A', 
              padding: '5px 14px', 
              borderRadius: '100px', 
              fontSize: '11px', 
              fontWeight: 800, 
              color: '#F5C542', 
              textTransform: 'uppercase', 
              letterSpacing: '1px', 
              marginBottom: '14px' 
            }}>
              <FileText size={13} />
              <span>Official 2026 Export Catalog</span>
            </div>

            <h3 style={{ 
              fontFamily: 'var(--font-h, Outfit, sans-serif)', 
              fontSize: '24px', 
              fontWeight: 800, 
              color: '#FFFFFF', 
              marginBottom: '10px', 
              lineHeight: 1.25 
            }}>
              Download Priya Impex Brochure
            </h3>

            <p style={{ 
              fontSize: '14px', 
              color: 'rgba(255, 255, 255, 0.88)', 
              lineHeight: 1.55, 
              margin: '0 auto',
              maxWidth: '420px'
            }}>
              Get our complete spice catalog with technical specifications, Sortex purity standards, container stuffing, and global export packaging details.
            </p>
          </div>

          {/* Modal Content / Highlights */}
          <div style={{ padding: '26px 28px' }}>
            {downloaded ? (
              <div style={{ textAlign: 'center', padding: '16px 10px' }}>
                <div style={{
                  width: 60,
                  height: 60,
                  borderRadius: '50%',
                  background: '#DEF7EC',
                  color: '#03543F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 14px'
                }}>
                  <CheckCircle2 size={32} />
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: 800, color: '#0B2240', marginBottom: '8px' }}>
                  Brochure Downloaded!
                </h4>
                <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.5, margin: 0 }}>
                  Your official Priya Impex catalog has started downloading.
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Feature Highlights */}
                <div style={{
                  backgroundColor: '#FFFDF7',
                  borderRadius: '16px',
                  padding: '16px 18px',
                  border: '1.5px solid #F1E5C8',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  fontSize: '13px',
                  color: '#334155'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ShieldCheck size={16} style={{ color: '#C8940A', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>Spices Board, APEDA, FSSAI & ISO Certified Quality</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Ship size={16} style={{ color: '#C8940A', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>20ft / 40ft FCL Stuffing & Mundra Port Shipping Info</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Sparkles size={16} style={{ color: '#C8940A', flexShrink: 0 }} />
                    <span style={{ fontWeight: 600 }}>Cumin, Turmeric, Coriander, Fennel, Chilli & Powders</span>
                  </div>
                </div>

                {/* Direct Download Button */}
                <button
                  type="button"
                  onClick={handleDirectDownload}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '15px 24px',
                    fontSize: '16px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    borderRadius: '12px',
                    cursor: 'pointer'
                  }}
                >
                  <Download size={20} />
                  <span>Download Brochure Now (PDF)</span>
                </button>

                <p style={{ fontSize: '12px', color: '#94A3B8', textAlign: 'center', margin: '0' }}>
                  Instant 1-Click Direct Download • Official Priya Impex PDF
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
