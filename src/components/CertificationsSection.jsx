import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { getCertificates } from '../utils/adminStore';

export default function CertificationsSection({ bgColor = '#F8FAFC' }) {
  const certs = getCertificates();
  return (
    <section className="py-50" id="certifications" style={{ background: bgColor, borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '54px 0' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          className="section-title text-center"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '48px' }}
        >
          <span className="eyebrow">
            TRUSTED & GOVT. AUTHORIZED
          </span>
          <h2 style={{ color: 'var(--navy)', marginTop: '10px' }}>
            Official International <span style={{ color: 'var(--gold)' }}>Certifications & Approvals</span>
          </h2>
          <p style={{ color: '#475569', maxWidth: '620px', margin: '10px auto 0' }}>
            Backed by India's top government export authorities and international food safety councils to guarantee 100% regulatory compliance for global buyers.
          </p>
        </motion.div>

        {/* Certificate Cards Grid with Official Logo Images */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {certs.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                borderRadius: '20px',
                padding: '24px',
                border: '1.5px solid #CBD5E1',
                background: '#FFFFFF',
                boxShadow: '0 8px 20px rgba(0, 33, 71, 0.04)',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              whileHover={{ y: -4, boxShadow: '0 12px 30px rgba(0, 33, 71, 0.1)' }}
            >
              {/* Header: Certificate Official Logo Image + Code Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{
                  height: '64px',
                  width: '130px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#FFFFFF',
                  padding: '6px 12px',
                  borderRadius: '14px',
                  border: '1px solid #E2E8F0',
                  boxShadow: '0 2px 10px rgba(0, 33, 71, 0.05)'
                }}>
                  <img 
                    src={c.logo} 
                    alt={c.name} 
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', display: 'block' }} 
                  />
                </div>
                <span style={{ background: 'var(--gold-pale)', color: 'var(--gold-deep)', fontSize: '11px', fontWeight: 800, padding: '6px 14px', borderRadius: '100px', border: '1px solid var(--gold-light)' }}>
                  {c.code}
                </span>
              </div>

              {/* Certificate Details */}
              <div>
                <h4 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--navy)', marginBottom: '6px', lineHeight: 1.3 }}>
                  {c.name}
                </h4>
                <p style={{ fontSize: '13.5px', color: 'var(--gray)', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                  {c.tag}
                </p>
              </div>

              {/* Verification Footer Seal */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontWeight: 700, color: 'var(--gold-deep)', marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                <CheckCircle2 size={15} style={{ color: 'var(--gold)' }} />
                <span>Verified Government & Trade Authorization</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
