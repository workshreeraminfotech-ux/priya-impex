// Centralized Dynamic Data & Admin Store — Priya Impex
// Dual-Layer Storage: Fast Local Cache + Real-Time Global Cloud Firestore Database

import { PRODUCTS as INITIAL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { BLOGS as INITIAL_BLOGS } from '../data/blogs';
import {
  isFirebaseConfigured,
  fetchCloudProducts,
  saveCloudProduct,
  deleteCloudProduct,
  fetchCloudBlogs,
  saveCloudBlog,
  deleteCloudBlog,
  fetchCloudCertificates,
  saveCloudCertificate,
  deleteCloudCertificate,
  fetchCloudEnquiries,
  saveCloudEnquiry,
  deleteCloudEnquiry,
  syncAllToCloud
} from './firebase';

import apedaLogo from '../assets/certificate/apeda.png';
import spicesBoardLogo from '../assets/certificate/spices board.png';
import fdaLogo from '../assets/certificate/fda.png';
import isoLogo from '../assets/certificate/iso.png';
import fssaiLogo from '../assets/certificate/fssai.png';
import halalLogo from '../assets/certificate/halal.png';

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
    name: 'US FDA Registered Facility', 
    code: 'US FDA', 
    tag: 'US Food and Drug Administration Registration',
    logo: fdaLogo
  },
  { 
    id: 'cert-4',
    name: 'ISO 22000 & ISO 9001:2015', 
    code: 'ISO 22000', 
    tag: 'Food Safety Management & Quality Control System',
    logo: isoLogo
  },
  { 
    id: 'cert-5',
    name: 'FSSAI License Approved', 
    code: 'FSSAI', 
    tag: 'Food Safety and Standards Authority of India',
    logo: fssaiLogo
  },
  { 
    id: 'cert-6',
    name: 'Halal Certified Export', 
    code: 'HALAL', 
    tag: 'Global Dietary Compliance for Gulf & Middle East Markets',
    logo: halalLogo
  }
];

// Helper: Broadcast store update event to all components
function notifyStoreUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('priya_store_updated'));
  }
}

// Background Cloud Sync on load
export async function syncFromCloud() {
  if (!isFirebaseConfigured()) return false;

  try {
    const [cloudProds, cloudBlogs, cloudCerts, cloudEnqs] = await Promise.all([
      fetchCloudProducts(),
      fetchCloudBlogs(),
      fetchCloudCertificates(),
      fetchCloudEnquiries()
    ]);

    let changed = false;

    if (cloudProds && cloudProds.length > 0) {
      localStorage.setItem('marvex_products', JSON.stringify(cloudProds));
      changed = true;
    }
    if (cloudBlogs && cloudBlogs.length > 0) {
      localStorage.setItem('marvex_blogs', JSON.stringify(cloudBlogs));
      changed = true;
    }
    if (cloudCerts && cloudCerts.length > 0) {
      localStorage.setItem('marvex_certs', JSON.stringify(cloudCerts));
      changed = true;
    }
    if (cloudEnqs && cloudEnqs.length > 0) {
      localStorage.setItem('marvex_enquiries', JSON.stringify(cloudEnqs));
      changed = true;
    }

    if (changed) {
      notifyStoreUpdate();
    }
    return true;
  } catch (err) {
    console.error('Failed to sync from cloud database:', err);
    return false;
  }
}

// Auto-trigger sync on script load
if (typeof window !== 'undefined') {
  setTimeout(() => {
    syncFromCloud();
  }, 500);
}

// --- AUTHENTICATION ---
export function isAdminLoggedIn() {
  return sessionStorage.getItem('marvex_admin_auth') === 'true';
}

export function loginAdmin(username, password) {
  if ((username === 'admin' || username === 'marvex' || username === 'priya') && (password === 'admin123' || password === 'marvex2026#' || password === 'priya2026#')) {
    sessionStorage.setItem('marvex_admin_auth', 'true');
    return { success: true };
  }
  return { success: false, message: 'Invalid Admin Username or Password' };
}

export function logoutAdmin() {
  sessionStorage.removeItem('marvex_admin_auth');
}

// --- PRODUCTS STORE ---
export function getProducts() {
  const saved = localStorage.getItem('marvex_products');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved products', e);
    }
  }
  return INITIAL_PRODUCTS;
}

export function saveProducts(productsList) {
  localStorage.setItem('marvex_products', JSON.stringify(productsList));
  notifyStoreUpdate();
}

export function addProduct(newProd) {
  const list = getProducts();
  const prodWithId = {
    ...newProd,
    id: newProd.id || `prod-${Date.now()}`
  };
  const updated = [prodWithId, ...list];
  saveProducts(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudProduct(prodWithId);
  }

  return updated;
}

export function updateProduct(updatedProd) {
  const list = getProducts();
  const updated = list.map(p => (p.id === updatedProd.id ? { ...p, ...updatedProd } : p));
  saveProducts(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudProduct(updatedProd);
  }

  return updated;
}

export function deleteProduct(id) {
  const list = getProducts();
  const updated = list.filter(p => p.id !== id);
  saveProducts(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    deleteCloudProduct(id);
  }

  return updated;
}

// --- BLOGS STORE ---
export function getBlogs() {
  const saved = localStorage.getItem('marvex_blogs');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved blogs', e);
    }
  }
  return INITIAL_BLOGS;
}

export function saveBlogs(blogsList) {
  localStorage.setItem('marvex_blogs', JSON.stringify(blogsList));
  notifyStoreUpdate();
}

export function addBlog(newBlog) {
  const list = getBlogs();
  const blogWithId = {
    ...newBlog,
    id: newBlog.id || Date.now(),
    date: newBlog.date || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })
  };
  const updated = [blogWithId, ...list];
  saveBlogs(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudBlog(blogWithId);
  }

  return updated;
}

export function updateBlog(updatedBlog) {
  const list = getBlogs();
  const updated = list.map(b => (b.id === updatedBlog.id ? { ...b, ...updatedBlog } : b));
  saveBlogs(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudBlog(updatedBlog);
  }

  return updated;
}

export function deleteBlog(id) {
  const list = getBlogs();
  const updated = list.filter(b => b.id !== id);
  saveBlogs(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    deleteCloudBlog(id);
  }

  return updated;
}

// --- CERTIFICATES STORE ---
export function getCertificates() {
  const saved = localStorage.getItem('marvex_certs');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved certs', e);
    }
  }
  return INITIAL_CERTS;
}

export function saveCertificates(certsList) {
  localStorage.setItem('marvex_certs', JSON.stringify(certsList));
  notifyStoreUpdate();
}

export function addCertificate(newCert) {
  const list = getCertificates();
  const certWithId = {
    ...newCert,
    id: newCert.id || `cert-${Date.now()}`
  };
  const updated = [...list, certWithId];
  saveCertificates(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudCertificate(certWithId);
  }

  return updated;
}

export function updateCertificate(updatedCert) {
  const list = getCertificates();
  const updated = list.map(c => (c.id === updatedCert.id ? { ...c, ...updatedCert } : c));
  saveCertificates(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudCertificate(updatedCert);
  }

  return updated;
}

export function deleteCertificate(id) {
  const list = getCertificates();
  const updated = list.filter(c => c.id !== id);
  saveCertificates(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    deleteCloudCertificate(id);
  }

  return updated;
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
    product: 'Guntur S17 Red Chilli & Cumin Seeds',
    quantity: '40 MT (2x40ft FCL)',
    destinationPort: 'Jebel Ali Port, Dubai',
    notes: 'Urgent container requirement for Ramadan shipment. Halal certification required.',
    status: 'New',
    date: 'Aug 07, 2026 04:30 PM'
  }
];

export function getEnquiries() {
  const saved = localStorage.getItem('marvex_enquiries');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to parse saved enquiries', e);
    }
  }
  return INITIAL_ENQUIRIES;
}

export function saveEnquiries(enquiriesList) {
  localStorage.setItem('marvex_enquiries', JSON.stringify(enquiriesList));
  notifyStoreUpdate();
}

export function addEnquiry(enquiryData) {
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

  // Cloud async sync
  if (isFirebaseConfigured()) {
    saveCloudEnquiry(newEnquiry);
  }

  return updated;
}

export function updateEnquiryStatus(id, status) {
  const list = getEnquiries();
  const updated = list.map(e => (e.id === id ? { ...e, status } : e));
  saveEnquiries(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    const item = updated.find(e => e.id === id);
    if (item) saveCloudEnquiry(item);
  }

  return updated;
}

export function deleteEnquiry(id) {
  const list = getEnquiries();
  const updated = list.filter(e => e.id !== id);
  saveEnquiries(updated);

  // Cloud async sync
  if (isFirebaseConfigured()) {
    deleteCloudEnquiry(id);
  }

  return updated;
}

export function exportEnquiriesCSV(typeFilter = 'all') {
  const enquiries = getEnquiries();
  let filtered = enquiries;
  let filenamePrefix = 'Priya_Impex_Customer_Enquiries';

  if (typeFilter === 'product_quote') {
    filtered = enquiries.filter(e => (e.source || '').toLowerCase().includes('product') || (e.source || '').toLowerCase().includes('quote'));
    filenamePrefix = 'Priya_Impex_Product_Quote_Enquiries';
  } else if (typeFilter === 'contact_form') {
    filtered = enquiries.filter(e => (e.source || '').toLowerCase().includes('contact'));
    filenamePrefix = 'Priya_Impex_Contact_Us_Enquiries';
  }

  if (!filtered || filtered.length === 0) {
    alert('No enquiries available in this category to export.');
    return;
  }

  const headers = ['ID', 'Date', 'Source', 'Buyer Name', 'Company Name', 'Email', 'Phone', 'Product', 'Quantity', 'Destination Port', 'Notes/Message', 'Status'];
  
  const rows = filtered.map(e => [
    `"${e.id || ''}"`,
    `"${e.date || ''}"`,
    `"${e.source || 'Website Form'}"`,
    `"${(e.name || '').replace(/"/g, '""')}"`,
    `"${(e.company || '').replace(/"/g, '""')}"`,
    `"${(e.email || '').replace(/"/g, '""')}"`,
    `"${(e.phone || '').replace(/"/g, '""')}"`,
    `"${(e.product || '').replace(/"/g, '""')}"`,
    `"${(e.quantity || '').replace(/"/g, '""')}"`,
    `"${(e.destinationPort || '').replace(/"/g, '""')}"`,
    `"${(e.notes || e.message || '').replace(/"/g, '""')}"`,
    `"${e.status || 'New'}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', `${filenamePrefix}_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
