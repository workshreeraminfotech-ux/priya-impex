import React, { useState, useEffect } from 'react';

import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import QuickViewModal from './components/QuickViewModal';
import BrochureModal from './components/BrochureModal';
import WhatsAppFloat from './components/WhatsAppFloat';
import Preloader from './components/Preloader';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteProduct, setQuoteProduct] = useState('');
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [productSearch, setProductSearch] = useState('');

  // 10-Second Auto Popup for Brochure
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBrochureOpen(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (pageId, category = 'All', search = '') => {
    setActivePage(pageId);
    setSelectedCategory(category);
    setProductSearch(search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName = '') => {
    setQuoteProduct(productName);
    setSelectedProduct(null);
    setActivePage('contact');
    setTimeout(() => {
      const formEl = document.getElementById('contact-form') || document.querySelector('.contact-form-card');
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    }, 120);
  };

  return (
    <div>
      <HeaderTop />
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onOpenBrochure={() => setIsBrochureOpen(true)} 
      />

      <main>
        {(activePage === 'home' || activePage === 'faq') && (
          <Home 
            onSelectProduct={setSelectedProduct} 
            onNavigate={handleNavigate} 
            onOpenQuote={(prod) => handleOpenQuote(prod)} 
          />
        )}
        {activePage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate} 
            onOpenQuote={() => handleOpenQuote()} 
          />
        )}
        {activePage === 'products' && (
          <ProductsPage 
            onSelectProduct={setSelectedProduct} 
            onOpenQuote={(prod) => handleOpenQuote(prod)} 
            initialCategory={selectedCategory}
            initialSearch={productSearch}
          />
        )}
        {activePage === 'blog' && (
          <BlogPage />
        )}
        {activePage === 'contact' && (
          <ContactPage 
            initialProduct={quoteProduct}
            onOpenQuote={() => handleOpenQuote()} 
          />
        )}
      </main>

      <FooterSection onNavigate={handleNavigate} />

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onOpenQuote={(prod) => handleOpenQuote(prod)} />
      )}

      <BrochureModal 
        isOpen={isBrochureOpen} 
        onClose={() => setIsBrochureOpen(false)} 
      />

      <WhatsAppFloat />
      <Preloader />
    </div>
  );
}
