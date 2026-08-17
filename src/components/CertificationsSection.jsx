import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Eye, ShieldCheck, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { useStoreCertificates } from '../utils/useStore';

export default function CertificationsSection({ bgColor = '#F8FAFC' }) {
  const rawCerts = useStoreCertificates();
  const certs = Array.isArray(rawCerts) ? rawCerts : [];
  const [selectedCert, setSelectedCert] = useState(null);
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate list 4 times for seamless infinite feel
  const displayCerts = certs.length > 0 ? [...certs, ...certs, ...certs, ...certs] : [];

  // Continuous smooth auto-scrolling that works across all mobile phones & desktops
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el || certs.length === 0) return;

    let animId = null;
    const speed = 0.65; // smooth glide speed

    const step = () => {
      if (!isPaused && el) {
        el.scrollLeft += speed;
        // If we reach near the end of duplicated content, loop smoothly back to start
        if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 5) {
          el.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [isPaused, certs]);

  const scrollManual = (direction) => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -240 : 240;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className="py-50 certs-marquee-section" id="certifications" style={{ background: bgColor, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '56px 0 62px', position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        
        {/* Header */}
        <div className="section-title" style={{ maxWidth: '780px', margin: '0 auto 28px', textAlign: 'center' }}>
          {/* Eyebrow Badge */}
          <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={13} color="var(--gold)" />
            <span>TRUSTED & GOVT. AUTHORIZED</span>
          </span>

          {/* Main Title */}
          <h2 style={{ marginTop: '6px' }}>
            Official International <span>Certifications & Approvals</span>
          </h2>

          {/* Subtitle */}
          <p style={{ fontSize: '15px', color: 'var(--gray)', lineHeight: 1.6, margin: '10px auto 0', maxWidth: '620px' }}>
            Certified by India's premier export authorities & global food safety councils guaranteeing 100% regulatory compliance.
          </p>

          {/* Mobile swipe helper badge */}
          <div style={{ marginTop: '14px', display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FFFFFF', border: '1px solid #CBD5E1', padding: '5px 14px', borderRadius: '100px', fontSize: '12px', color: 'var(--navy)', fontWeight: 700, boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
            <CheckCircle2 size={14} color="#16A34A" />
            <span>{certs.length} Global Certifications • Swipe / Drag to explore</span>
          </div>
        </div>

      </div>

      {/* Interactive & Auto-Scrolling Horizontal Track */}
      <div 
        style={{ position: 'relative', width: '100%', maxWidth: '100%', overflow: 'hidden', padding: '10px 0' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation Arrow Controls (Visible on Desktop & Mobile) */}
        <button
          onClick={() => scrollManual('left')}
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            boxShadow: '0 6px 18px rgba(0,33,71,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--navy)'
          }}
          aria-label="Previous Certificate"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={() => scrollManual('right')}
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            backgroundColor: '#FFFFFF',
            border: '1.5px solid #CBD5E1',
            boxShadow: '0 6px 18px rgba(0,33,71,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--navy)'
          }}
          aria-label="Next Certificate"
        >
          <ChevronRight size={22} />
        </button>

        {/* Scroll Container with Touch-Swipe + Continuous Smooth Auto-Glide */}
        <div
          ref={scrollContainerRef}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setTimeout(() => setIsPaused(false), 2500)}
          style={{
            display: 'flex',
            overflowX: 'auto',
            scrollBehavior: 'smooth',
            WebkitOverflowScrolling: 'touch',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            padding: '10px 48px',
            gap: '16px',
            cursor: 'grab'
          }}
        >
          {displayCerts.map((c, i) => (
            <div
              key={`${c.id || 'cert'}-${i}`}
              onClick={() => setSelectedCert(c)}
              style={{
                flex: '0 0 auto',
                width: '180px',
                height: '220px',
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid #E2E8F0',
                boxShadow: '0 6px 20px rgba(11, 34, 64, 0.06)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                userSelect: 'none'
              }}
              className="cert-swipe-card"
              title={`Click to view ${c.name}`}
            >
              {/* Photo Box Container */}
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <img
                  src={c.logo}
                  alt={c.name}
                  loading="lazy"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'center',
                    display: 'block'
                  }}
                />
              </div>

              {/* View Overlay on Hover */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '20px',
                  background: 'rgba(11, 34, 64, 0.55)',
                  backdropFilter: 'blur(2px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  color: '#FFFFFF',
                  fontSize: '13px',
                  fontWeight: 700,
                  opacity: 0,
                  transition: 'opacity 0.25s ease'
                }}
                className="cert-card-hover-overlay"
                onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              >
                <Eye size={16} color="#F5C542" />
                <span>View Full</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Screen Certificate Lightbox Modal */}
      {selectedCert && (
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            backgroundColor: 'rgba(5, 16, 31, 0.85)', 
            zIndex: 99999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: '20px', 
            backdropFilter: 'blur(6px)' 
          }}
          onClick={() => setSelectedCert(null)}
        >
          <div 
            style={{ 
              backgroundColor: '#FFFFFF', 
              borderRadius: '24px', 
              padding: '24px', 
              maxWidth: '640px', 
              width: '100%', 
              maxHeight: '90vh', 
              display: 'flex', 
              flexDirection: 'column', 
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)', 
              position: 'relative' 
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', borderBottom: '1px solid #E2E8F0', paddingBottom: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={22} color="var(--gold)" />
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', margin: 0 }}>
                  {selectedCert.name}
                </h3>
              </div>
              <button 
                onClick={() => setSelectedCert(null)}
                style={{ 
                  background: '#F1F5F9', 
                  border: 'none', 
                  borderRadius: '50%', 
                  width: '36px', 
                  height: '36px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  cursor: 'pointer', 
                  color: 'var(--navy)' 
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Certificate Image */}
            <div style={{ 
              flex: 1, 
              minHeight: '280px', 
              maxHeight: '60vh', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              background: '#F8FAFC', 
              borderRadius: '16px', 
              padding: '16px',
              border: '1px solid #E2E8F0'
            }}>
              <img 
                src={selectedCert.logo} 
                alt={selectedCert.name} 
                style={{ 
                  maxWidth: '100%', 
                  maxHeight: '55vh', 
                  width: 'auto', 
                  height: 'auto', 
                  objectFit: 'contain' 
                }} 
              />
            </div>

            {selectedCert.tag && (
              <p style={{ margin: '14px 0 0', fontSize: '13px', color: '#64748B', textAlign: 'center', fontWeight: 500 }}>
                {selectedCert.tag}
              </p>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
