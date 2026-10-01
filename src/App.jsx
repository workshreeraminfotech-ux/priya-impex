import React, { useState } from 'react';

import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar';
import FooterSection from './components/FooterSection';
import QuickViewModal from './components/QuickViewModal';
import QuoteModal from './components/QuoteModal';
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
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [productSearch, setProductSearch] = useState('');

  const handleNavigate = (pageId, category = 'All', search = '') => {
    setActivePage(pageId);
    setSelectedCategory(category);
    setProductSearch(search);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuote = (productName = '') => {
    setQuoteProduct(productName);
    setIsQuoteOpen(true);
  };

  return (
    <div>
      <HeaderTop />
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onOpenQuote={() => handleOpenQuote()} 
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
            onOpenQuote={() => handleOpenQuote()} 
          />
        )}
      </main>

      <FooterSection onNavigate={handleNavigate} />

      {selectedProduct && (
        <QuickViewModal product={selectedProduct} onClose={() => setSelectedProduct(null)} onOpenQuote={(prod) => handleOpenQuote(prod)} />
      )}

      <QuoteModal 
        isOpen={isQuoteOpen} 
        initialProduct={quoteProduct} 
        onClose={() => setIsQuoteOpen(false)} 
      />

      <WhatsAppFloat />
      <Preloader />
    </div>
  );
}
