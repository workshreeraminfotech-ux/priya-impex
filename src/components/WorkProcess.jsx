import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
  FileText,
  Sprout,
  Cpu,
  Microscope,
  PackageCheck,
  Ship,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Download,
  ShieldCheck,
  Anchor
} from 'lucide-react';

export default function WorkProcess({ onOpenQuote, onNavigate }) {
  const containerRef = useRef(null);

  // Smooth scroll-driven line fill
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 65%', 'end 75%']
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ['0%', '100%']);

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Order Booking & Spec Confirmation',
      badge: 'Day 1 • Contract Lock',
      icon: FileText,
      desc: 'We review your custom purity requirements (Machine Clean / 99% / 99.5% Sortex), packing preferences, and issue a transparent Proforma Invoice (PI) with secured international payment terms (LC / TT).',
      tags: ['Proforma Invoice', 'Purity Specs Lock', 'LC / TT Terms']
    },
    {
      id: 2,
      num: '02',
      title: 'Direct APMC Mandi & Farm Sourcing',
      badge: 'Day 2–3 • Origin Procurement',
      icon: Sprout,
      desc: 'Raw seed spices and whole spices are sourced directly from primary APMC markets (Unjha, Gondal, Rajkot) and audited farmer networks with strict moisture and raw crop inspection.',
      tags: ['Fresh Crop Only', 'Unjha & Gondal Mandis', 'Farm Traceability']
    },
    {
      id: 3,
      num: '03',
      title: 'Sortex Cleaning, Grading & Processing',
      badge: 'Day 4–5 • High Purity',
      icon: Cpu,
      desc: 'Multi-stage processing through vibratory destoners, magnetic separators, and Buhler optical color sorters to eliminate foreign matter and ensure up to 99.5% machine-clean purity.',
      tags: ['Buhler Sortex Sorting', '99.5% Purity', 'Zero Foreign Matter']
    },
    {
      id: 4,
      num: '04',
      title: 'Laboratory Testing & Export Certifications',
      badge: 'Day 6 • Quality Clearance',
      icon: Microscope,
      desc: 'Samples undergo comprehensive NABL laboratory analysis for moisture, volatile oil/curcumin, pesticide MRLs, plus mandatory Spices Board inspection and Phytosanitary certification.',
      tags: ['NABL Lab Certified', 'Phytosanitary Clearance', 'Certificate of Origin']
    },
    {
      id: 5,
      num: '05',
      title: 'Hygienic Bulk Packaging & Stuffing',
      badge: 'Day 7 • Protective Packing',
      icon: PackageCheck,
      desc: 'Spices are packed into moisture-barrier multi-wall paper or PP bags (10kg/25kg/50kg), followed by strict container fumigation, desiccant placement, and tamper-proof bolt sealing.',
      tags: ['Multi-Wall Food Bags', 'Container Fumigation', 'Tamper-Proof Seal']
    },
    {
      id: 6,
      num: '06',
      title: 'Port Customs, Ocean Freight & Delivery',
      badge: 'Day 8+ • Global Transit',
      icon: Ship,
      desc: 'Direct express dispatch to Mundra or Kandla port (< 5 hours), swift customs clearance, Bill of Lading (B/L) issuance, and live ocean vessel tracking to your destination port.',
      tags: ['Mundra / Kandla Port', 'Live Vessel Tracking', 'Worldwide Delivery']
    }
  ];

  return (
    <section className="wave-roadmap-section" id="process" ref={containerRef}>
      <div className="container">
        
        {/* Section Header */}
        <div className="roadmap-header">
          <div className="roadmap-eyebrow-wrap">
            <span className="roadmap-badge-glow">
              <Sparkles size={14} className="sparkle-icon" />
              ORDER-TO-DELIVERY ROADMAP
            </span>
          </div>
          <h2 className="roadmap-title">
            Our Export Roadmap: <span className="gold-gradient-text">From Order to Global Delivery</span>
          </h2>
          <p className="roadmap-subtitle">
            A simple, transparent timeline showing how your Indian spice order moves seamlessly from contract confirmation to your overseas port.
          </p>
        </div>

        {/* ========================================================
            VERTICAL SCROLL-FILL TIMELINE WITH WAVE PATH
            ======================================================== */}
        <div className="wave-timeline-wrapper">
          
          {/* Background Track Line (Dotted / Soft Gray) */}
          <div className="wave-track-line" />

          {/* Animated Scroll Fill Line */}
          <motion.div 
            className="wave-fill-line" 
            style={{ height: lineHeight }}
          >
            {/* Glowing Traveling Particle at the line tip */}
            <div className="wave-line-tip-glow" />
          </motion.div>

          {/* Timeline Step Items */}
          <div className="wave-timeline-list">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1; // alternating left/right on desktop

              return (
                <motion.div
                  key={step.id}
                  className={`wave-timeline-item ${isEven ? 'right-align' : 'left-align'}`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: 0.08 }}
                >
                  {/* Step Center Milestone Node */}
                  <div className="wave-center-node">
                    <div className="wave-node-circle">
                      <Icon size={20} className="wave-node-icon" />
                      <span className="wave-node-num">{step.num}</span>
                    </div>
                  </div>

                  {/* Step Content Card */}
                  <div className="wave-card-box">
                    <div className="wave-card-top">
                      <span className="wave-step-badge">{step.badge}</span>
                      <span className="wave-step-num-label">STEP {step.num}</span>
                    </div>

                    <h3 className="wave-card-title">{step.title}</h3>
                    <p className="wave-card-desc">{step.desc}</p>

                    {/* Tags */}
                    <div className="wave-tags-wrap">
                      {step.tags.map((t, tIdx) => (
                        <span key={tIdx} className="wave-tag-pill">
                          <CheckCircle2 size={12} className="tag-check" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Bar */}
        <div className="wave-roadmap-bottom-cta">
          <div className="cta-left-text">
            <h4>Ready to place your spice export order?</h4>
            <p>Get a formal Proforma Invoice (PI) & custom purity quotation within 2 hours.</p>
          </div>
          <div className="cta-right-btns">
            <button
              onClick={() => onOpenQuote ? onOpenQuote() : (window.location.href = '#contact')}
              className="btn-primary wave-cta-btn"
            >
              <span>Request Quote</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="/Priya Impex brochure.pdf"
              download="Priya Impex brochure.pdf"
              className="btn-outline wave-brochure-btn"
            >
              <Download size={15} />
              <span>Download Brochure</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
