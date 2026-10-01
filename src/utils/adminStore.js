// Centralized Data Store — Priya Impex (Direct, Fast, Clean)

import { PRODUCTS as INITIAL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { BLOGS as INITIAL_BLOGS } from '../data/blogs';

import apedaLogo from '../assets/certificate/apeda.webp';
import spicesBoardLogo from '../assets/certificate/spices board.webp';
import fssaiLogo from '../assets/certificate/fssai.webp';
import certExtraLogo from '../assets/certificate/certificate-extra.webp';

const INITIAL_CERTS = [
  { 
    id: 'cert-1',
    name: 'APEDA Certified Exporter', 
    code: 'APEDA / GOVT', 
    tag: 'Agricultural & Processed Food Products Export Development Authority',
    logo: apedaLogo
  },
  { 
    id: 'cert-2',
    name: 'Spice Board of India', 
    code: 'SPICE BOARD', 
    tag: 'Ministry of Commerce & Industry, Govt of India',
    logo: spicesBoardLogo
  },
  { 
    id: 'cert-3',
    name: 'FSSAI License Approved', 
    code: 'FSSAI', 
    tag: 'Food Safety and Standards Authority of India',
    logo: fssaiLogo
  },
  { 
    id: 'cert-4',
    name: 'Govt Recognized Export Facility', 
    code: 'EXPORT FACILITY', 
    tag: 'Certified Quality Control & Safety Compliance',
    logo: certExtraLogo
  }
];

// Clean stale admin cache if any
if (typeof window !== 'undefined') {
  try {
    localStorage.removeItem('marvex_products');
    localStorage.removeItem('marvex_blogs');
    localStorage.removeItem('marvex_certs');
    sessionStorage.removeItem('marvex_admin_auth');
  } catch (e) {}
}

// --- PRODUCTS STORE ---
export function getProducts() {
  return INITIAL_PRODUCTS || [];
}

export function saveProducts(productsList) {
  return productsList;
}

// --- BLOGS STORE ---
export function getBlogs() {
  return INITIAL_BLOGS || [];
}

export function saveBlogs(blogsList) {
  return blogsList;
}

// --- CERTIFICATES STORE ---
export function getCertificates() {
  return INITIAL_CERTS || [];
}

export function saveCertificates(certsList) {
  return certsList;
}

// --- ENQUIRIES STORE ---
const INITIAL_ENQUIRIES = [
  {
    id: 'enq-101',
    source: 'Product Quote Request',
    name: 'Hans Weber',
    company: 'EuroSpices GmbH',
    email: 'h.weber@eurospices.de',
    phone: '+49 171 5550192',
    product: 'Turmeric Powder (Curcumin > 3.5%)',
    quantity: '20 MT (1x20ft FCL)',
    destinationPort: 'Hamburg Port, Germany',
    notes: 'Please quote CIF Hamburg rates with phytosanitary & lab COA test certificates.',
    status: 'New',
    date: 'Aug 08, 2026 10:15 AM'
  },
  {
    id: 'enq-102',
    source: 'Contact Us Form',
    name: 'Tariq Al-Mansoor',
    company: 'Gulf General Trading Co.',
    email: 'tariq@gulfgeneral.ae',
    phone: '+971 50 1234567',
    product: 'Dry Red Chilli & Cumin Seeds',
    quantity: '40 MT (2x40ft FCL)',
    destinationPort: 'Jebel Ali Port, Dubai',
    notes: 'Urgent container requirement for Ramadan shipment.',
    status: 'New',
    date: 'Aug 07, 2026 04:30 PM'
  }
];

let memoryEnquiries = null;

export function getEnquiries() {
  if (memoryEnquiries && Array.isArray(memoryEnquiries) && memoryEnquiries.length > 0) {
    return memoryEnquiries;
  }
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('marvex_enquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          memoryEnquiries = parsed;
          return parsed;
        }
      }
    }
  } catch (e) {}
  return INITIAL_ENQUIRIES;
}

export function saveEnquiries(enquiriesList) {
  memoryEnquiries = enquiriesList;
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('marvex_enquiries', JSON.stringify(enquiriesList));
    }
  } catch (e) {}
}

export async function addEnquiry(enquiryData) {
  const list = getEnquiries();
  const newEnquiry = {
    id: `enq-${Date.now()}`,
    source: enquiryData.source || 'Website Form',
    name: enquiryData.name || 'Anonymous Buyer',
    company: enquiryData.company || 'Private Buyer',
    email: enquiryData.email || 'N/A',
    phone: enquiryData.phone || 'N/A',
    product: enquiryData.product || enquiryData.title || 'General Spice Enquiry',
    quantity: enquiryData.quantity || 'N/A',
    destinationPort: enquiryData.destinationPort || 'Overseas Port',
    notes: enquiryData.notes || enquiryData.message || 'Product quote request submitted.',
    status: 'New',
    date: new Date().toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
  };
  const updated = [newEnquiry, ...list];
  saveEnquiries(updated);

  // Forward form details directly to sales@priyaimpexs.com
  try {
    const emailPayload = {
      _subject: `New Spice Export Inquiry from ${newEnquiry.name} (${newEnquiry.company}) - Priya Impex`,
      _template: 'table',
      _captcha: 'false',
      'Form Source': newEnquiry.source,
      'Buyer Name': newEnquiry.name,
      'Company Name': newEnquiry.company,
      'Buyer Email': newEnquiry.email,
      'Phone / WhatsApp': newEnquiry.phone,
      'Product / Spice Category': newEnquiry.product,
      'Quantity Required': newEnquiry.quantity,
      'Destination Sea Port': newEnquiry.destinationPort,
      'Message / Inquiry Details': newEnquiry.notes,
      'Submission Timestamp': newEnquiry.date
    };

    await fetch('https://formsubmit.co/ajax/sales@priyaimpexs.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(emailPayload)
    });
  } catch (err) {
    console.warn('Email dispatch warning:', err);
  }

  return updated;
}
