import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  FileCheck2,
  Sprout,
  Cpu,
  Microscope,
  PackageCheck,
  Ship,
  Sparkles
} from 'lucide-react';

export default function WorkProcess() {
  const containerRef = useRef(null);

  // Scroll-driven path animation
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 80%']
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
    restDelta: 0.001
  });

  const steps = [
    {
      id: 1,
      num: '01',
      stepText: 'Step 1',
      title: 'Order Booking and Conformation',
      icon: FileCheck2
    },
    {
      id: 2,
      num: '02',
      stepText: 'Step 2',
      title: 'Direct APMC Mandi & Farm Sourcing',
      icon: Sprout
    },
    {
      id: 3,
      num: '03',
      stepText: 'Step 3',
      title: 'Sortex Cleaning, Grading & Processing',
      icon: Cpu
    },
    {
      id: 4,
      num: '04',
      stepText: 'Step 4',
      title: 'Laboratory Testing & Export Certifications',
      icon: Microscope
    },
    {
      id: 5,
      num: '05',
      stepText: 'Step 5',
      title: 'Hygienic Bulk Packaging & Stuffing',
      icon: PackageCheck
    },
    {
      id: 6,
      num: '06',
      stepText: 'Step 6',
      title: 'Port Customs, Ocean Freight & Delivery',
      icon: Ship
    }
  ];

  // SVG Wave Path coordinates: M 400 30 C 400 70, 240 90, 240 150 C 240 210, 560 230, 560 290 ...
  const desktopWavePath = "M 400 30 C 400 75, 230 95, 230 155 C 230 215, 570 235, 570 295 C 570 355, 230 375, 230 435 C 230 495, 570 515, 570 575 C 570 635, 230 655, 230 715 C 230 775, 570 795, 570 855 C 570 915, 400 935, 400 970";
  const mobileWavePath = "M 32 20 C 48 55, 16 95, 32 135 C 48 175, 16 215, 32 255 C 48 295, 16 335, 32 375 C 48 415, 16 455, 32 495 C 48 535, 16 575, 32 615 C 48 655, 16 695, 32 735 C 48 775, 32 805, 32 830";

  return (
    <section className="wave-roadmap-section" id="process" ref={containerRef}>
      <div className="container">
        
        {/* Header */}
        <div className="roadmap-header">
          <div className="roadmap-eyebrow-wrap">
            <span className="roadmap-badge-glow">
              <Sparkles size={14} className="sparkle-icon" />
              ORDER-TO-DELIVERY ROADMAP
            </span>
          </div>
          <h2 className="roadmap-title">
            Our Export Journey: <span className="gold-gradient-text">Step-by-Step Timeline</span>
          </h2>
        </div>

        {/* ========================================================
            WAVE SHAPE SCROLL-FILL TIMELINE
            ======================================================== */}
        <div className="wave-timeline-container">
          
          {/* Desktop SVG Wave */}
          <div className="desktop-wave-svg-wrap">
            <svg viewBox="0 0 800 1000" className="wave-svg-canvas" preserveAspectRatio="xMidYMid meet">
              <defs>
                <linearGradient id="waveGoldGradientDesktop" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0B2240" />
                  <stop offset="35%" stopColor="#C8940A" />
                  <stop offset="85%" stopColor="#F5C542" />
                  <stop offset="100%" stopColor="#D4AF37" />
                </linearGradient>
                <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="4" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Background Wave Track */}
              <path
                d={desktopWavePath}
                className="svg-wave-bg"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="4"
                strokeDasharray="6 6"
              />

              {/* Active Scroll Fill Wave Path */}
              <motion.path
                d={desktopWavePath}
                className="svg-wave-fill"
                fill="none"
                stroke="url(#waveGoldGradientDesktop)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#waveGlow)"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* Mobile SVG Wave */}
          <div className="mobile-wave-svg-wrap">
            <svg viewBox="0 0 64 850" className="mobile-wave-svg-canvas" preserveAspectRatio="none">
              <defs>
                <linearGradient id="waveGoldGradientMobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#0B2240" />
                  <stop offset="40%" stopColor="#C8940A" />
                  <stop offset="100%" stopColor="#F5C542" />
                </linearGradient>
              </defs>

              {/* Mobile Background Wave Track */}
              <path
                d={mobileWavePath}
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="3.5"
                strokeDasharray="5 5"
              />

              {/* Mobile Active Fill Wave Path */}
              <motion.path
                d={mobileWavePath}
                fill="none"
                stroke="url(#waveGoldGradientMobile)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ pathLength }}
              />
            </svg>
          </div>

          {/* 6 Step Cards along the Wave */}
          <div className="wave-steps-list">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 1; // Alternates left/right on desktop

              return (
                <motion.div
                  key={step.id}
                  className={`wave-step-row ${isEven ? 'row-right' : 'row-left'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: 0.06 }}
                >
                  {/* Step Card */}
                  <div className="wave-step-card">
                    <div className="wave-card-badge">
                      <span className="step-num-tag">{step.stepText}</span>
                    </div>

                    <div className="wave-card-main">
                      <div className="wave-card-icon-wrap">
                        <Icon size={22} className="wave-card-icon" />
                      </div>
                      <h3 className="wave-step-title">{step.title}</h3>
                    </div>
                  </div>

                  {/* Center Node Indicator on Wave */}
                  <div className="wave-step-node-point">
                    <div className="wave-point-circle">
                      <span className="wave-point-num">{step.num}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
