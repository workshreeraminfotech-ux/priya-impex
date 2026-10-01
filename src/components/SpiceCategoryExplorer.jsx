import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';

import allSpicesImg from '../assets/categories/all-spices.webp';
import seedSpicesImg from '../assets/categories/seed-spices.webp';
import wholeSpicesImg from '../assets/categories/whole-spices.webp';
import groundSpicesImg from '../assets/categories/ground-spices.webp';

const CATEGORIES_DATA = [
  {
    id: 'all-spices',
    title: 'All Spices',
    subtitle: 'Complete 13+ Whole, Seed & Ground Export Range',
    category: 'All',
    search: '',
    image: allSpicesImg,
    tag: 'Full Catalogue'
  },
  {
    id: 'seed-spices',
    title: 'Seed Spices',
    subtitle: 'Sortex Cleaned Cumin Jeera, Coriander & Fennel',
    category: 'Seed Spices',
    search: '',
    image: seedSpicesImg,
    tag: 'Sortex Cleaned'
  },
  {
    id: 'whole-spices',
    title: 'Whole Spices',
    subtitle: 'Black Pepper, Dry Red Chilli & Turmeric Fingers',
    category: 'Whole Spices',
    search: '',
    image: wholeSpicesImg,
    tag: '100% Sun-Dried'
  },
  {
    id: 'ground-spices',
    title: 'Ground Spices',
    subtitle: 'Double-Sifted Turmeric, Chilli & Cumin Powders',
    category: 'Ground Spices',
    search: '',
    image: groundSpicesImg,
    tag: 'Ultra-Fine Mesh'
  }
];

export default function SpiceCategoryExplorer({ onNavigate }) {
  const handleCategoryClick = (cat) => {
    if (onNavigate) {
      onNavigate('products', cat.category, cat.search || '');
    }
  };

  return (
    <section className="py-50" style={{ backgroundColor: '#FFFFFF', padding: '64px 0 76px', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 44px' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'rgba(200, 148, 10, 0.09)', 
            border: '1px solid rgba(200, 148, 10, 0.3)', 
            padding: '6px 18px', 
            borderRadius: '100px', 
            fontSize: '12px', 
            fontWeight: 800, 
            color: '#A37505', 
            letterSpacing: '0.9px', 
            textTransform: 'uppercase', 
            marginBottom: '12px' 
          }}>
            <Sparkles size={14} color="#C8940A" />
            <span>EXPLORE BY SPICE CATEGORIES</span>
          </div>

          <h2 style={{ 
            fontFamily: 'var(--font-h, Outfit, sans-serif)', 
            fontSize: 'clamp(28px, 4vw, 38px)', 
            fontWeight: 900, 
            color: 'var(--navy)', 
            lineHeight: 1.2, 
            margin: '0 0 12px' 
          }}>
            Choose Your <span style={{ color: 'var(--gold)' }}>Spice Category</span>
          </h2>

          <p style={{ fontSize: '15.5px', color: 'var(--gray)', lineHeight: 1.6, margin: '0 auto', maxWidth: '620px' }}>
            Select any spice category below to explore our complete wholesale export catalogue with verified purity testing.
          </p>
        </div>

        {/* 4 Category Cards Grid — Brand Logo Palette (Navy #0B2240 + Gold #C8940A + Clean Pure White) */}
        <div className="category-explorer-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px'
        }}>
          {CATEGORIES_DATA.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              onClick={() => handleCategoryClick(item)}
              style={{
                background: '#FFFFFF',
                borderRadius: '20px',
                border: '1.5px solid #E2E8F0',
                padding: '24px 22px 0',
                height: '345px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(11, 34, 64, 0.05)',
                transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease'
              }}
              whileHover={{
                y: -7,
                boxShadow: '0 20px 40px rgba(11, 34, 64, 0.12)',
                borderColor: '#C8940A'
              }}
            >
              {/* Subtle Top Gold Accent Bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #0B2240 0%, #C8940A 50%, #0B2240 100%)',
                opacity: 0.9
              }} />

              {/* Top Text Header */}
              <div style={{ position: 'relative', zIndex: 2 }}>
                
                {/* Category Pill Tag & Arrow Indicator */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.6px',
                    color: '#A37505',
                    background: 'rgba(200, 148, 10, 0.09)',
                    border: '1px solid rgba(200, 148, 10, 0.25)',
                    padding: '3px 10px',
                    borderRadius: '100px'
                  }}>
                    {item.tag}
                  </span>

                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #E2E8F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0B2240',
                    transition: 'all 0.3s ease'
                  }}>
                    <ArrowRight size={15} />
                  </div>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-h, Outfit, sans-serif)',
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#0B2240',
                  margin: '0 0 6px',
                  letterSpacing: '-0.3px'
                }}>
                  {item.title}
                </h3>

                <p style={{
                  fontSize: '13px',
                  color: '#64748B',
                  margin: 0,
                  fontWeight: 500,
                  lineHeight: 1.45,
                  maxWidth: '92%'
                }}>
                  {item.subtitle}
                </p>
              </div>

              {/* Bottom Spice Bowl Photo matching reference design */}
              <div style={{
                position: 'relative',
                width: '100%',
                height: '205px',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                zIndex: 1,
                marginTop: 'auto',
                marginBottom: '-10px'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'bottom center',
                    filter: 'drop-shadow(0 14px 22px rgba(11, 34, 64, 0.14))',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
