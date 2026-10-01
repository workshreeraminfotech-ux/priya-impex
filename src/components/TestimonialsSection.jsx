import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Tan Sri Kumaravelan',
    role: 'Director of Imports & Food Distribution',
    location: 'Kuala Lumpur, Malaysia 🇲🇾',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'Priya Impex has been our trusted Indian spice export partner. Their recent container shipment to Malaysia arrived in immaculate condition with 100% Sortex purity, full phytosanitary documentation, and zero customs delay.'
  },
  {
    name: 'Virendra Shah',
    role: 'Wholesale Spice Merchant',
    location: 'Unjha Mandi, Gujarat 🇮🇳',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'Working with Priya Impex for bulk Cumin (Jeera) and Fennel seeds sourcing has been a great experience. Their machine-cleaned quality and honest grading make them a standout supplier in Gujarat.'
  },
  {
    name: 'Anand Murthy',
    role: 'Managing Partner, Spice Processing Unit',
    location: 'Erode, Tamil Nadu 🇮🇳',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'We source raw Turmeric fingers and bulbs in bulk through Priya Impex. The curcumin percentage is always verified by lab tests, moisture is strictly under 10%, and moisture-barrier packaging is top-tier.'
  },
  {
    name: 'Maheshwar Reddy',
    role: 'Commercial Food Manufacturer',
    location: 'Guntur, Andhra Pradesh 🇮🇳',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'Their Dry Red Chilli Whole and high-ASTA Chilli Powder quality are unmatched in the wholesale trade. On-time container dispatch and transparent business ethics make Priya Impex our long-term choice.'
  },
  {
    name: 'Suresh Agarwal',
    role: 'Spices Exporter & Bulk Distributor',
    location: 'Mumbai, Maharashtra 🇮🇳',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
    stars: 5,
    text: 'From export documentation to port logistics at Mundra, Priya Impex manages every step flawlessly. Their ground spice powders and coriander seeds have rich natural aroma and zero adulteration.'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeTesti = testimonials[currentIndex];

  return (
    <section className="testimonial-redesign-section" id="testimonials">
      <div className="container">
        <div className="testimonial-grid">
          {/* Left Testimonial Carousel Card */}
          <div>
            <div className="section-title left-align" style={{ marginBottom: '32px' }}>
              <span className="eyebrow">CLIENT TESTIMONIALS</span>
              <h2>
                Trusted by Partners, <span>Verified by Purity</span>
              </h2>
            </div>

            <motion.div
              key={currentIndex}
              className="testimonial-card-v2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="testi-card-header">
                <div className="testimonial-user-info">
                  <img src={activeTesti.img} alt={activeTesti.name} />
                  <div>
                    <h3>{activeTesti.name}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="testi-user-role">{activeTesti.role}</span>
                      <span className="testi-user-loc">• {activeTesti.location}</span>
                    </div>
                  </div>
                </div>
                <Quote size={42} className="testi-quote-icon" />
              </div>

              <div className="stars-wrap" style={{ margin: '18px 0 16px' }}>
                {Array.from({ length: activeTesti.stars }).map((_, i) => (
                  <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="testi-text-quote">
                "{activeTesti.text}"
              </p>
            </motion.div>

            {/* Carousel Navigation Controls & Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
              <div className="testi-controls" style={{ marginTop: 0 }}>
                <button
                  onClick={handlePrev}
                  className="testi-btn-prev"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={handleNext}
                  className="testi-btn-next"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight size={22} />
                </button>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      width: currentIndex === idx ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '100px',
                      background: currentIndex === idx ? 'var(--gold)' : '#CBD5E1',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      padding: 0
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Showcase Photo */}
          <div style={{ position: 'relative' }}>
            <div className="testi-image-wrap" style={{ borderRadius: '24px', overflow: 'hidden', height: '100%', minHeight: '380px', boxShadow: '0 12px 36px rgba(11, 34, 64, 0.08)' }}>
              <img
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80"
                alt="Priya Impex Spices Testimonials"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
