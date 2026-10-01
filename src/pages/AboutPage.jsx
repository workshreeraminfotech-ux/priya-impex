import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck, CheckCircle2, Globe2, Sparkles, Building2, Factory, TestTube, Package, Ship } from 'lucide-react';
import AboutUs from '../components/AboutUs';
import CertificationsSection from '../components/CertificationsSection';
import CtaBanner from '../components/CtaBanner';

import hygienicPackagingImg from '../assets/hygienic-packaging.webp';
import containerDispatchImg from '../assets/container-dispatch.webp';

export default function AboutPage({ onNavigate, onOpenQuote }) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      desc: 'To deliver 100% pure, unadulterated Indian spices and seed spices directly from farm origin to global sea ports with complete quality transparency, zero adulteration, and guaranteed on-time ocean delivery.',
      img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Eye,
      title: 'Our Vision',
      desc: 'To stand as the most respected Indian spices export brand globally, recognized across 50+ countries for uncompromising quality standards, modern processing infrastructure, and long-term client trust.',
      img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: ShieldCheck,
      title: 'Quality Assurance Policy',
      desc: 'Every single export container batch undergoes rigorous multi-tier laboratory testing (curcumin %, piperine %, moisture levels, pesticide MRLs), Sortex machine cleaning, and APEDA/Phytosanitary inspection.',
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const infrastructureSteps = [
    {
      title: 'Sortex Cleaning & Milling',
      desc: 'State-of-the-art optical sorters remove discolored seeds and foreign matter.',
      icon: Factory,
      img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Accredited Lab Testing',
      desc: 'In-house & third-party NABL lab testing for ASTA color, moisture & purity.',
      icon: TestTube,
      img: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Hygienic Bulk Packaging',
      desc: 'Food-grade moisture barrier packaging preserving natural freshness.',
      icon: Package,
      img: hygienicPackagingImg
    },
    {
      title: 'Port Container Dispatch',
      desc: 'Seamless ocean freight stuffing and port customs clearance at Mundra.',
      icon: Ship,
      img: containerDispatchImg
    }
  ];

  return (
    <div className="about-page" style={{ backgroundColor: '#F8FAFC' }}>
      
      {/* Page Hero — Guaranteed Background Image Overlay */}
      <section style={{
        position: 'relative',
        color: '#FFFFFF',
        padding: '75px 0 65px',
        overflow: 'hidden',
        backgroundColor: '#1C1917'
      }}>
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=70" 
          alt="About Priya Impex Background" 
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0
          }}
        />
        {/* Warm Amber Dark Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(42, 29, 8, 0.75) 0%, rgba(28, 25, 23, 0.88) 100%)',
          zIndex: 1
        }} />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <motion.div initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ maxWidth: '840px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              color: '#FFFFFF',
              fontSize: '12px',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '2px',
              padding: '6px 20px',
              borderRadius: '100px',
              marginBottom: '20px',
              backdropFilter: 'blur(6px)'
            }}>
              <Sparkles size={14} style={{ color: 'var(--gold-light)' }} />
              PRIYA IMPEX • B2B SPICES EXPORTS
            </span>

            <h1 style={{
              fontFamily: 'var(--font-h, Outfit, sans-serif)',
              fontSize: 'clamp(34px, 5vw, 54px)',
              fontWeight: 900,
              marginBottom: '20px',
              lineHeight: 1.15,
              color: '#FFFFFF'
            }}>
              Pioneering Excellence in <br />
              <span style={{ color: 'var(--gold-light)' }}>Global Spices Exports</span>
            </h1>

            <p style={{ fontSize: '17px', color: 'rgba(255, 255, 255, 0.9)', lineHeight: 1.65, maxWidth: '720px', margin: '0 auto', fontWeight: 500 }}>
              Connecting Indian spice farmers to global international markets with modern processing, Sortex sorting, and sea container freight logistics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main AboutUs Showcase */}
      <AboutUs />

      {/* Corporate Presence & Global Trade Desks */}
      <section className="py-50" style={{ backgroundColor: '#FFFDF7', padding: '56px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '44px' }}>
            <span className="eyebrow">
              GLOBAL FOOTPRINT
            </span>
            <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
              Main Headquarters & <span style={{ color: 'var(--gold)' }}>Global Representatives</span>
            </h2>
            <p style={{ color: 'var(--gray)', maxWidth: '680px', margin: '10px auto 0', fontSize: '15.5px', lineHeight: 1.6 }}>
              Centralized export operations based in Rajkot, Gujarat (India), backed by dedicated international trade executives in Germany, USA, and UK for direct buyer support.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px' }}>
            
            {/* Card 1: Main Headquarters (Rajkot, India) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                  alt="Main Office & Facility Rajkot India" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Building2 size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>Main Head Office 🇮🇳</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  RAJKOT, GUJARAT, INDIA
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Central procurement, Sortex processing, lab analysis, export packaging, and container stuffing hub with rapid dispatch to Mundra & Pipavav ports.
                </p>
              </div>
            </motion.div>

            {/* Card 2: Germany Executive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" 
                  alt="Germany Trade Executive" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Globe2 size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>Germany Executive 🇩🇪</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  GERMANY & EUROPE DESK
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Dedicated trade representative coordinating European buyer relations, EU food safety compliance (EU MRLs), sample dispatches, and import documentation.
                </p>
              </div>
            </motion.div>

            {/* Card 3: USA Executive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=800&q=80" 
                  alt="USA Trade Executive" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Globe2 size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>USA Executive 🇺🇸</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  USA & NORTH AMERICA DESK
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Dedicated regional representative managing commercial inquiries, FDA & USDA compliance, container shipments, and direct relationship support for American buyers.
                </p>
              </div>
            </motion.div>

            {/* Card 4: UK Executive */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1.5px solid var(--border)',
                boxShadow: '0 8px 24px rgba(11, 34, 64, 0.05)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ height: '180px', overflow: 'hidden', position: 'relative' }}>
                <img 
                  src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80" 
                  alt="UK Trade Executive" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 30%, rgba(11, 34, 64, 0.88) 100%)' }}></div>
                <div style={{ position: 'absolute', bottom: '14px', left: '18px', display: 'flex', alignItems: 'center', gap: '8px', color: '#FFFFFF' }}>
                  <Globe2 size={20} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontWeight: 800, fontSize: '16.5px' }}>UK Executive 🇬🇧</span>
                </div>
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--gold-deep)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: '8px' }}>
                  UNITED KINGDOM (UK) DESK
                </span>
                <p style={{ fontSize: '14px', color: 'var(--gray)', lineHeight: 1.6, margin: 0, fontWeight: 500 }}>
                  Dedicated client relationship executive catering to British spice distributors, ethnic food markets, and food manufacturers with localized buyer assistance.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Processing & Infrastructure Showcase Grid */}
      <section className="py-50" style={{ backgroundColor: '#FFFFFF', padding: '54px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '44px' }}>
            <span className="eyebrow">
              EXPORT INFRASTRUCTURE
            </span>
            <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
              State-Of-The-Art <span style={{ color: 'var(--gold)' }}>Processing & Handling</span>
            </h2>
            <p style={{ color: 'var(--gray)', maxWidth: '620px', margin: '10px auto 0' }}>
              From farm-origin procurement to laboratory testing and container port dispatch.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {infrastructureSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '1.5px solid var(--border)',
                    boxShadow: '0 6px 20px rgba(200, 148, 10, 0.04)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '160px', overflow: 'hidden', position: 'relative' }}>
                    <img src={step.img} alt={step.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', top: 12, left: 12, width: 40, height: 40, borderRadius: '12px', background: 'linear-gradient(135deg, #C8940A 0%, #D4AF37 100%)', color: '#1C1917', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={20} />
                    </div>
                  </div>
                  <div style={{ padding: '20px', flex: 1 }}>
                    <h4 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px' }}>{step.title}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--gray)', lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission, Vision & Quality Policy Section with Header Photos */}
      <section className="py-50" style={{ backgroundColor: '#FFFDF7', padding: '54px 0' }}>
        <div className="container">
          <div className="section-title text-center" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">
              OUR CORE FOUNDATION
            </span>
            <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
              Driven by Purpose, <span style={{ color: 'var(--gold)' }}>Guided by Integrity</span>
            </h2>
            <p style={{ color: 'var(--gray)', maxWidth: '600px', margin: '10px auto 0' }}>
              Discover the core principles that power Priya Impex's global reputation as a premier Indian spices exporter.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    border: '1.5px solid var(--border)',
                    boxShadow: '0 8px 24px rgba(200, 148, 10, 0.05)',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  <div style={{ height: '170px', overflow: 'hidden', position: 'relative' }}>
                    <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 20%, rgba(42,29,8,0.85) 100%)' }}></div>
                    <div style={{ position: 'absolute', bottom: '14px', left: '16px', display: 'flex', alignItems: 'center', gap: '10px', color: '#FFFFFF' }}>
                      <div style={{ width: 36, height: 36, borderRadius: '10px', background: 'linear-gradient(135deg, #C8940A 0%, #D4AF37 100%)', color: '#1C1917', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Icon size={18} />
                      </div>
                      <span style={{ fontSize: '18px', fontWeight: 800 }}>{item.title}</span>
                    </div>
                  </div>

                  <div style={{ padding: '24px', flex: 1 }}>
                    <p style={{ fontSize: '14.5px', color: 'var(--gray)', lineHeight: 1.65, margin: 0, fontWeight: 500 }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <CertificationsSection bgColor="#FFFFFF" />

      {/* Connect With Us CTA */}
      <CtaBanner onOpenQuote={onOpenQuote} onNavigate={onNavigate} />
    </div>
  );
}
