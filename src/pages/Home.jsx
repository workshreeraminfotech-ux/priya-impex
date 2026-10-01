import React from 'react';
import HeroBannerSlider from '../components/HeroBannerSlider';
import MainSeedsShowcase from '../components/MainSeedsShowcase';
import SpiceCategoryExplorer from '../components/SpiceCategoryExplorer';
import AboutUs from '../components/AboutUs';
import WhyChooseUs from '../components/WhyChooseUs';
import WorkProcess from '../components/WorkProcess';
import CertificationsSection from '../components/CertificationsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CounterSection from '../components/CounterSection';
import FAQ from '../components/FAQ';
import CtaBanner from '../components/CtaBanner';

export default function Home({ onSelectProduct, onNavigate, onOpenQuote }) {
  return (
    <div className="home-page">
      <HeroBannerSlider onOpenQuote={() => onOpenQuote()} onNavigate={onNavigate} />
      <AboutUs onNavigate={onNavigate} />
      <CounterSection />
      <MainSeedsShowcase onSelectProduct={onSelectProduct} onOpenQuote={(product) => onOpenQuote(product)} onNavigate={onNavigate} />
      <SpiceCategoryExplorer onNavigate={onNavigate} />
      <WhyChooseUs onNavigate={onNavigate} />
      <WorkProcess />
      <CertificationsSection />
      <TestimonialsSection />
      <FAQ />
      <CtaBanner onOpenQuote={() => onOpenQuote()} onNavigate={onNavigate} />
    </div>
  );
}
