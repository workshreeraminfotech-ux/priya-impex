import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useStoreProducts } from '../utils/useStore';

export default function MainSeedsShowcase({ onOpenQuote }) {
  const storeProds = useStoreProducts();
  const allProducts = Array.isArray(storeProds) ? storeProds : [];

  // All seed products & seed spices
  const seedProducts = allProducts.filter(p => {
    if (!p) return false;
    const title = String(p.title || '').toLowerCase();
    const cat = String(p.category || p.cat || '').toLowerCase();
    const id = String(p.id || '').toLowerCase();
    return (
      cat.includes('seed') || 
      title.includes('seed') || 
      title.includes('cumin') || 
      title.includes('coriander') || 
      title.includes('fennel') || 
      title.includes('pepper') || 
      title.includes('cardamom') || 
      id.includes('seeds') ||
      id.includes('cumin') ||
      id.includes('coriander') ||
      id.includes('fennel')
    );
  });

  // Duplicate 4x to guarantee continuous infinite smooth scrolling marquee across all screen sizes
  const marqueeSeedProducts = seedProducts.length > 0 ? [...seedProducts, ...seedProducts, ...seedProducts, ...seedProducts] : [];

  return (
    <section 
      className="main-seeds-showcase-section" 
      style={{ 
        background: 'linear-gradient(180deg, #FBF8F1 0%, #F5EFE0 50%, #EFE8D6 100%)', 
        color: 'var(--navy)',
        padding: '68px 0 72px',
        position: 'relative',
        overflow: 'hidden',
        borderBottom: '1px solid #E5DBC7',
        borderTop: '1px solid #EFE4D0'
      }}
    >
      <div className="container">
        
        {/* Centered Header Section */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
          
          {/* Eyebrow Badge */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(200, 148, 10, 0.14)', border: '1px solid rgba(200, 148, 10, 0.45)', padding: '6px 20px', borderRadius: '100px', fontSize: '13px', fontWeight: 800, color: '#A37505', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: '14px', boxShadow: '0 2px 10px rgba(200, 148, 10, 0.08)' }}>
            <Sparkles size={14} color="#C8940A" />
            <span>OUR SIGNATURE SEED SPICES • 100% SORTEX CLEANED</span>
          </div>

          {/* Centered Main Title */}
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(28px, 4.2vw, 42px)', fontWeight: 900, color: 'var(--navy)', lineHeight: 1.2, margin: '0 0 14px' }}>
            Our Flagship Export Spices — <span style={{ color: 'var(--gold)' }}>Premium Seed Spices</span>
          </h2>

          {/* Centered Subtitle */}
          <p style={{ fontSize: '15.5px', color: '#57534E', lineHeight: 1.6, margin: '0 auto', maxWidth: '640px' }}>
            Direct farm sourcing from Unjha (Gujarat) and prime origin mandis with guaranteed high essential oil content, 99.5% Sortex purity & international export packaging.
          </p>
        </div>

      </div>

      {/* Continuous Hardware-Accelerated Infinite Marquee Scroller (Like Certificates) */}
      <div className="seeds-marquee-wrapper">
        <div className="seeds-marquee-track">
          {marqueeSeedProducts.map((item, idx) => (
            <div
              key={`${item.id || 'seed'}-${idx}`}
              className="seeds-marquee-card"
            >
              {/* Product Image Box */}
              <div
                style={{
                  height: '220px',
                  background: 'radial-gradient(circle, #FFFFFF 50%, #F9F7F2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '20px',
                  position: 'relative',
                  borderBottom: '1px solid #F0E8D9'
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    maxWidth: '88%',
                    maxHeight: '88%',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>

              {/* Product Info Body */}
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 
                  style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.3 }}
                >
                  {item.title}
                </h3>

                <p style={{ fontSize: '13.5px', color: '#6B7280', lineHeight: 1.55, marginBottom: '18px', flex: 1, fontWeight: 500 }}>
                  {item.desc || item.description}
                </p>

                {/* Action */}
                <div style={{ marginTop: 'auto' }}>
                  <button
                    onClick={() => onOpenQuote ? onOpenQuote(item.title) : null}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '11px 16px', fontSize: '13.5px', fontWeight: 700, justifyContent: 'center', borderRadius: '8px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>Request Quote</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
