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
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('priya_store_updated'));
    }
  } catch (e) {}
}

// Background Cloud Sync on load
export async function syncFromCloud() {
  try {
    if (!isFirebaseConfigured()) return false;

    const [cloudProds, cloudBlogs, cloudCerts, cloudEnqs] = await Promise.all([
      fetchCloudProducts(),
      fetchCloudBlogs(),
      fetchCloudCertificates(),
      fetchCloudEnquiries()
    ]);

    let changed = false;

    if (cloudProds && Array.isArray(cloudProds) && cloudProds.length > 0) {
      try {
        localStorage.setItem('marvex_products', JSON.stringify(cloudProds));
        changed = true;
      } catch (e) {}
    } else {
      // Auto-seed cloud collections on first setup
      try {
        syncAllToCloud(INITIAL_PRODUCTS, INITIAL_BLOGS, INITIAL_CERTS);
      } catch (e) {}
    }
    if (cloudBlogs && Array.isArray(cloudBlogs) && cloudBlogs.length > 0) {
      try {
        localStorage.setItem('marvex_blogs', JSON.stringify(cloudBlogs));
        changed = true;
      } catch (e) {}
    }
    if (cloudCerts && Array.isArray(cloudCerts) && cloudCerts.length > 0) {
      try {
        localStorage.setItem('marvex_certs', JSON.stringify(cloudCerts));
        changed = true;
      } catch (e) {}
    }
    if (cloudEnqs && Array.isArray(cloudEnqs) && cloudEnqs.length > 0) {
      try {
        localStorage.setItem('marvex_enquiries', JSON.stringify(cloudEnqs));
        changed = true;
      } catch (e) {}
    }

    if (changed) {
      notifyStoreUpdate();
    }
    return true;
  } catch (err) {
    console.warn('Failed to sync from cloud database:', err);
    return false;
  }
}

// Auto-trigger sync on script load safely
if (typeof window !== 'undefined') {
  setTimeout(() => {
    try {
      syncFromCloud();
    } catch (e) {}
  }, 1000);
}

// --- AUTHENTICATION ---
export function isAdminLoggedIn() {
  try {
    return typeof sessionStorage !== 'undefined' && sessionStorage.getItem('marvex_admin_auth') === 'true';
  } catch (e) {
    return false;
  }
}

export function loginAdmin(username, password) {
  if ((username === 'admin' || username === 'marvex' || username === 'priya') && (password === 'admin123' || password === 'marvex2026#' || password === 'priya2026#')) {
    try {
      if (typeof sessionStorage !== 'undefined') {
        sessionStorage.setItem('marvex_admin_auth', 'true');
      }
    } catch (e) {}
    return { success: true };
  }
  return { success: false, message: 'Invalid Admin Username or Password' };
}

export function logoutAdmin() {
  try {
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('marvex_admin_auth');
    }
  } catch (e) {}
}

// --- PRODUCTS STORE ---
export function getProducts() {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('marvex_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved products', e);
  }
  return INITIAL_PRODUCTS || [];
}

export function saveProducts(productsList) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('marvex_products', JSON.stringify(productsList));
    }
  } catch (e) {}
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
  try {
    if (isFirebaseConfigured()) {
      saveCloudProduct(prodWithId);
    }
  } catch (e) {}

  return updated;
}

export function updateProduct(updatedProd) {
  const list = getProducts();
  const updated = list.map(p => (p.id === updatedProd.id ? { ...p, ...updatedProd } : p));
  saveProducts(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      saveCloudProduct(updatedProd);
    }
  } catch (e) {}

  return updated;
}

export function deleteProduct(id) {
  const list = getProducts();
  const updated = list.filter(p => p.id !== id);
  saveProducts(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      deleteCloudProduct(id);
    }
  } catch (e) {}

  return updated;
}

// --- BLOGS STORE ---
export function getBlogs() {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('marvex_blogs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved blogs', e);
  }
  return INITIAL_BLOGS || [];
}

export function saveBlogs(blogsList) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('marvex_blogs', JSON.stringify(blogsList));
    }
  } catch (e) {}
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
  try {
    if (isFirebaseConfigured()) {
      saveCloudBlog(blogWithId);
    }
  } catch (e) {}

  return updated;
}

export function updateBlog(updatedBlog) {
  const list = getBlogs();
  const updated = list.map(b => (b.id === updatedBlog.id ? { ...b, ...updatedBlog } : b));
  saveBlogs(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      saveCloudBlog(updatedBlog);
    }
  } catch (e) {}

  return updated;
}

export function deleteBlog(id) {
  const list = getBlogs();
  const updated = list.filter(b => b.id !== id);
  saveBlogs(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      deleteCloudBlog(id);
    }
  } catch (e) {}

  return updated;
}

// --- CERTIFICATES STORE ---
export function getCertificates() {
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('marvex_certs');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved certs', e);
  }
  return INITIAL_CERTS || [];
}

export function saveCertificates(certsList) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('marvex_certs', JSON.stringify(certsList));
    }
  } catch (e) {}
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
  try {
    if (isFirebaseConfigured()) {
      saveCloudCertificate(certWithId);
    }
  } catch (e) {}

  return updated;
}

export function updateCertificate(updatedCert) {
  const list = getCertificates();
  const updated = list.map(c => (c.id === updatedCert.id ? { ...c, ...updatedCert } : c));
  saveCertificates(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      saveCloudCertificate(updatedCert);
    }
  } catch (e) {}

  return updated;
}

export function deleteCertificate(id) {
  const list = getCertificates();
  const updated = list.filter(c => c.id !== id);
  saveCertificates(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      deleteCloudCertificate(id);
    }
  } catch (e) {}

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
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem('marvex_enquiries');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    }
  } catch (e) {
    console.warn('Failed to parse saved enquiries', e);
  }
  return INITIAL_ENQUIRIES || [];
}

export function saveEnquiries(enquiriesList) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('marvex_enquiries', JSON.stringify(enquiriesList));
    }
  } catch (e) {}
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
  try {
    if (isFirebaseConfigured()) {
      saveCloudEnquiry(newEnquiry);
    }
  } catch (e) {}

  return updated;
}

export function updateEnquiryStatus(id, status) {
  const list = getEnquiries();
  const updated = list.map(e => (e.id === id ? { ...e, status } : e));
  saveEnquiries(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      const item = updated.find(e => e.id === id);
      if (item) saveCloudEnquiry(item);
    }
  } catch (e) {}

  return updated;
}

export function deleteEnquiry(id) {
  const list = getEnquiries();
  const updated = list.filter(e => e.id !== id);
  saveEnquiries(updated);

  // Cloud async sync
  try {
    if (isFirebaseConfigured()) {
      deleteCloudEnquiry(id);
    }
  } catch (e) {}

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
