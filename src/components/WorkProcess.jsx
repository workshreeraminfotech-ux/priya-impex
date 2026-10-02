import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText,
  Sprout,
  Cpu,
  Microscope,
  PackageCheck,
  Ship,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Clock,
  ShieldCheck,
  Award,
  Anchor,
  Sparkles,
  ChevronRight,
  TrendingUp,
  Download
} from 'lucide-react';

export default function WorkProcess({ onOpenQuote, onNavigate }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const steps = [
    {
      id: 1,
      num: '01',
      title: 'Order Booking & Spec Confirmation',
      shortTitle: 'Order Booking',
      timeframe: 'Day 1 • Contract & Specs',
      icon: FileText,
      tag: 'Order Inquiry & PI',
      headline: 'Commercial Agreement & Custom Quality Specification Lock',
      desc: 'Every export relationship begins with transparent communication. We analyze your required purity grades (Machine Clean / 99% / 99.5% Sortex), packing specifications, target delivery timeline, and issue the formal Proforma Invoice (PI) with mutually agreed international payment terms (LC / TT).',
      deliverables: [
        'Detailed product purity & moisture specification sheet',
        'Transparent Proforma Invoice (PI) & commercial contract',
        'Custom private labelling & bag packaging approval'
      ],
      metrics: [
        { label: 'Response Time', val: '< 2 Hours' },
        { label: 'Contract Lock', val: '100% Transparent' },
        { label: 'Payment Terms', val: 'LC / TT / CAD' }
      ],
      assurance: '100% Price & Quality Integrity Guaranteed'
    },
    {
      id: 2,
      num: '02',
      title: 'Direct APMC Mandi & Farm Sourcing',
      shortTitle: 'Farm Sourcing',
      timeframe: 'Day 2-3 • Origin Procurement',
      icon: Sprout,
      tag: 'Direct Farm Sourcing',
      headline: 'Direct Procurement from Gujarat & Rajasthan Spice Hubs',
      desc: 'We procure raw seed spices and whole spices directly from primary APMC markets (Unjha, Gondal, Rajkot, Saurashtra) and partner farmer cooperatives. Moisture, seed bold size, natural oil percentage, and raw cleanliness are inspected at the ground level before dispatching to our processing units.',
      deliverables: [
        'Fresh crop harvest selection (strictly zero old stock)',
        'Direct farmer-level quality & moisture inspection',
        'Full batch lot traceability from farm origin'
      ],
      metrics: [
        { label: 'Sourcing Hubs', val: 'Unjha & Gondal Mandis' },
        { label: 'Crop Freshness', val: '100% Current Crop' },
        { label: 'Farmer Network', val: '500+ Verified Farms' }
      ],
      assurance: 'Zero Middlemen • Maximum Natural Aroma & Oil'
    },
    {
      id: 3,
      num: '03',
      title: 'Sortex Cleaning, Grading & Processing',
      shortTitle: 'Sortex Cleaning',
      timeframe: 'Day 4-5 • Precision Cleaning',
      icon: Cpu,
      tag: 'High Purity Processing',
      headline: 'State-of-the-Art Optical Sortex & De-Stoning Technology',
      desc: 'Raw spices undergo multi-stage mechanical cleaning: vibratory pre-cleaners, precision destoners, rare-earth magnetic separators, and Buhler optical color sorting machines to eliminate foreign seeds, discolored grains, and dust, achieving up to 99.5% purity.',
      deliverables: [
        'Multi-deck vibratory de-stoning and fine grading',
        'High-speed optical color sorter grading (99.5% Sortex)',
        'Hygienic dust extraction & foreign matter removal'
      ],
      metrics: [
        { label: 'Purity Level', val: 'Up to 99.5% Sortex' },
        { label: 'Color Grading', val: 'Optical Camera AI' },
        { label: 'Dust & Stones', val: '0.00% Zero Tolerance' }
      ],
      assurance: 'Machine-Cleaned & 99.5% Sortex Pure Output'
    },
    {
      id: 4,
      num: '04',
      title: 'Laboratory Testing & Export Certifications',
      shortTitle: 'Lab & Certification',
      timeframe: 'Day 6 • Quality Validation',
      icon: Microscope,
      tag: 'NABL Certified Testing',
      headline: 'Multi-Parameter NABL Lab Testing & Statutory Clearances',
      desc: 'Before packing, batch samples are tested at NABL-accredited labs for moisture percentage, volatile oil/curcumin content, pesticide residues (MRLs), aflatoxins, Salmonella, and heavy metals to ensure complete compliance with destination country import regulations.',
      deliverables: [
        'NABL accredited comprehensive Certificate of Analysis (COA)',
        'Spices Board of India & APEDA statutory inspection',
        'Government Phytosanitary Certificate & Certificate of Origin'
      ],
      metrics: [
        { label: 'Lab Standard', val: 'NABL / ISO 17025' },
        { label: 'Pesticide MRLs', val: '100% Destination Compliant' },
        { label: 'Export Certs', val: 'Phyto, COO, Health' }
      ],
      assurance: '100% Certified Safe & Chemically Pure'
    },
    {
      id: 5,
      num: '05',
      title: 'Hygienic Bulk Packaging & Stuffing',
      shortTitle: 'Export Packaging',
      timeframe: 'Day 7 • Protective Packing',
      icon: PackageCheck,
      tag: 'Export-Grade Packing',
      headline: 'Custom Export Packing, Fumigation & Container Loading',
      desc: 'Products are packed in food-grade multi-wall paper bags, PP woven bags, or jute bags with internal moisture barrier liners (10kg, 25kg, 50kg, or 1-ton bulk tote bags). Containers undergo thorough inspection, high-grade fumigation, container moisture desiccant installation, and tamper-evident sealing.',
      deliverables: [
        'Food-grade moisture-lock PP / Paper / Jute packaging',
        'Standard container fumigation with Phytosanitary endorsement',
        'Factory container stuffing with high-security bolt seals'
      ],
      metrics: [
        { label: 'Bag Sizes', val: '10kg / 25kg / 50kg / Jumbo' },
        { label: 'Moisture Barrier', val: 'Poly Liner + Desiccants' },
        { label: 'Security', val: 'Customs Bolt Seal' }
      ],
      assurance: 'Aroma-Preserved & Zero Moisture Transit Protection'
    },
    {
      id: 6,
      num: '06',
      title: 'Port Customs, Ocean Freight & Delivery',
      shortTitle: 'Port & Global Delivery',
      timeframe: 'Day 8+ • Global Transit',
      icon: Ship,
      tag: 'Worldwide Port Delivery',
      headline: 'Mundra Port Dispatch, Fast Customs Clearance & Vessel Sailing',
      desc: 'Our strategic location in Gujarat provides swift access to Mundra, Kandla, and Pipavav ports (less than 5 hours away). We manage complete customs documentation, shipping bill generation, Bill of Lading (B/L) issuance, and provide live vessel tracking until safe arrival at your port.',
      deliverables: [
        'Direct express dispatch to Mundra / Kandla Port',
        'Full shipping documents set (B/L, Commercial Invoice, PL, Phyto, COO)',
        'Real-time vessel tracking and smooth port customs release'
      ],
      metrics: [
        { label: 'Primary Port', val: 'Mundra / Kandla Port' },
        { label: 'Port Transit', val: '< 5 Hours Distance' },
        { label: 'Logistics', val: 'FOB / CIF / CFR Delivery' }
      ],
      assurance: 'Guaranteed On-Time Global Port Delivery'
    }
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section className="export-roadmap-section" id="process">
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
            From Your Order to <span className="gold-gradient-text">Successful Global Delivery</span>
          </h2>
          <p className="roadmap-subtitle">
            Experience our transparent, systematic 6-step export process that guarantees 99.5% sortex purity, certified laboratory clearance, and on-time ocean container delivery to your international port.
          </p>
        </div>

        {/* ========================================================
            INTERACTIVE PROGRESS STEPPER BAR (Desktop & Tablet)
            ======================================================== */}
        <div className="roadmap-stepper-container">
          <div className="roadmap-progress-track">
            <div 
              className="roadmap-progress-bar-fill" 
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            />
          </div>

          <div className="roadmap-stepper-nodes">
            {steps.map((s, idx) => {
              const NodeIcon = s.icon;
              const isPast = idx < activeStep;
              const isCurrent = idx === activeStep;

              return (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`roadmap-node-btn ${isCurrent ? 'active' : ''} ${isPast ? 'completed' : ''}`}
                  title={`View Stage ${s.num}: ${s.title}`}
                  aria-label={`Stage ${s.num}: ${s.title}`}
                >
                  <div className="node-icon-circle">
                    {isPast ? (
                      <CheckCircle2 size={20} className="node-check-icon" />
                    ) : (
                      <NodeIcon size={19} />
                    )}
                    <span className="node-step-pill">{s.num}</span>
                  </div>
                  <div className="node-text-wrap">
                    <span className="node-step-num">STAGE {s.num}</span>
                    <span className="node-step-title">{s.shortTitle}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            FEATURED ACTIVE STAGE SHOWCASE CARD
            ======================================================== */}
        <div className="roadmap-stage-showcase">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="stage-card-inner"
            >
              {/* Left Column: Stage Detail */}
              <div className="stage-left-content">
                <div className="stage-meta-row">
                  <div className="stage-number-tag">
                    <StepIcon size={18} />
                    <span>STEP {current.num} OF 06</span>
                  </div>
                  <div className="stage-time-tag">
                    <Clock size={14} />
                    <span>{current.timeframe}</span>
                  </div>
                </div>

                <h3 className="stage-main-title">{current.headline}</h3>
                <p className="stage-main-desc">{current.desc}</p>

                {/* Key Deliverables */}
                <div className="stage-deliverables-box">
                  <div className="deliverables-heading">
                    <Award size={16} className="deliverable-award-icon" />
                    <span>Key Stage Deliverables & Assurances:</span>
                  </div>
                  <ul className="deliverables-list">
                    {current.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="deliverable-item">
                        <CheckCircle2 size={16} className="item-check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Step Guarantee Badge */}
                <div className="stage-assurance-pill">
                  <ShieldCheck size={18} className="shield-icon" />
                  <span><strong>Quality Commitment:</strong> {current.assurance}</span>
                </div>
              </div>

              {/* Right Column: Stage Key Metrics & Actions */}
              <div className="stage-right-content">
                <div className="stage-hud-card">
                  <div className="hud-header">
                    <div className="hud-icon-box">
                      <StepIcon size={26} />
                    </div>
                    <div>
                      <span className="hud-stage-label">ACTIVE STAGE {current.num}</span>
                      <h4 className="hud-stage-title">{current.title}</h4>
                    </div>
                  </div>

                  <div className="hud-metrics-grid">
                    {current.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="hud-metric-item">
                        <span className="hud-m-label">{m.label}</span>
                        <span className="hud-m-val">{m.val}</span>
                      </div>
                    ))}
                  </div>

                  <div className="hud-footer-actions">
                    <button
                      onClick={() => onOpenQuote ? onOpenQuote() : (window.location.href = '#contact')}
                      className="hud-quote-btn"
                    >
                      <span>Start Your Order</span>
                      <ArrowRight size={16} />
                    </button>
                    <a
                      href="/Priya Impex brochure.pdf"
                      download="Priya Impex brochure.pdf"
                      className="hud-brochure-btn"
                    >
                      <Download size={15} />
                      <span>Spec Sheet</span>
                    </a>
                  </div>
                </div>

                {/* Next / Prev Step Controls */}
                <div className="stage-nav-controls">
                  <button
                    onClick={prevStep}
                    className="stage-nav-btn prev"
                    disabled={activeStep === 0}
                    aria-label="Previous step"
                  >
                    <ArrowLeft size={16} />
                    <span>Previous</span>
                  </button>
                  <span className="stage-nav-counter">
                    <strong>{activeStep + 1}</strong> / {steps.length}
                  </span>
                  <button
                    onClick={nextStep}
                    className="stage-nav-btn next"
                    aria-label="Next step"
                  >
                    <span>Next Stage</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ========================================================
            FULL 6-STAGE CONNECTED ROADMAP CARDS (Complete Journey Overview)
            ======================================================== */}
        <div className="roadmap-grid-overview">
          <div className="roadmap-overview-header">
            <span className="overview-title">Complete 6-Stage Journey at a Glance</span>
            <span className="overview-note">Click any stage above or card below to explore</span>
          </div>

          <div className="roadmap-cards-grid">
            {steps.map((s, idx) => {
              const CardIcon = s.icon;
              const isSelected = activeStep === idx;

              return (
                <div
                  key={s.id}
                  onClick={() => setActiveStep(idx)}
                  className={`roadmap-mini-card ${isSelected ? 'selected' : ''}`}
                >
                  <div className="mini-card-header">
                    <div className="mini-card-num-badge">{s.num}</div>
                    <div className="mini-card-icon-wrap">
                      <CardIcon size={20} />
                    </div>
                  </div>

                  <h4 className="mini-card-title">{s.shortTitle}</h4>
                  <p className="mini-card-desc">{s.tag}</p>

                  <div className="mini-card-footer">
                    <span className="mini-card-time">{s.timeframe.split('•')[0]}</span>
                    <ChevronRight size={16} className="mini-card-arrow" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            GLOBAL EXPORT ASSURANCE BAR
            ======================================================== */}
        <div className="roadmap-trust-strip">
          <div className="trust-strip-item">
            <div className="trust-strip-icon">
              <Anchor size={22} />
            </div>
            <div>
              <strong>Mundra Port Gateway</strong>
              <p>Under 5 hours port transit distance</p>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-strip-icon">
              <ShieldCheck size={22} />
            </div>
            <div>
              <strong>100% Phyto & Lab Tested</strong>
              <p>NABL & Spices Board cleared</p>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-strip-icon">
              <Award size={22} />
            </div>
            <div>
              <strong>99.5% Sortex Purity</strong>
              <p>Optical Buhler sorting technology</p>
            </div>
          </div>

          <div className="trust-strip-item">
            <div className="trust-strip-icon">
              <Ship size={22} />
            </div>
            <div>
              <strong>Global Vessel Tracking</strong>
              <p>Live BL updates to destination port</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
