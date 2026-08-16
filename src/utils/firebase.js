// Firebase Cloud Database & Live Real-Time Sync Utility
// Priya Impex — Robust 2-Way Global Real-Time Sync

import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  deleteDoc, 
  writeBatch,
  onSnapshot
} from 'firebase/firestore';

const CONFIG_STORAGE_KEY = 'priya_firebase_config';

// 1. Permanent Default Firebase Config
export const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyCSoPp5B_fdMA3cS_nGocEuG1R-LXbBB2U",
  authDomain: "priya-impex.firebaseapp.com",
  projectId: "priya-impex",
  storageBucket: "priya-impex.firebasestorage.app",
  messagingSenderId: "332734321481",
  appId: "1:332734321481:web:0946464974857da4004098",
  measurementId: "G-M7KKNEVFY7"
};

export function getFirebaseConfig() {
  if (DEFAULT_FIREBASE_CONFIG.apiKey && DEFAULT_FIREBASE_CONFIG.projectId) {
    return DEFAULT_FIREBASE_CONFIG;
  }
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.apiKey && parsed.projectId) return parsed;
      }
    }
  } catch (e) {}
  return null;
}

export function isFirebaseConfigured() {
  const cfg = getFirebaseConfig();
  return !!(cfg && cfg.apiKey && cfg.projectId);
}

// 2. Initialize Firebase App & Firestore
let firebaseApp = null;
let firestoreDb = null;
let unsubscribers = [];

export function initFirebase(forceReinit = false) {
  try {
    const config = getFirebaseConfig();
    if (!config || !config.apiKey || !config.projectId) {
      return null;
    }

    if (forceReinit || !getApps().length) {
      firebaseApp = initializeApp(config);
    } else {
      firebaseApp = getApp();
    }

    firestoreDb = getFirestore(firebaseApp);

    // Setup Live Real-Time Listeners automatically
    setupRealtimeListeners(firestoreDb);

    return firestoreDb;
  } catch (error) {
    console.warn('Firebase initialization notice:', error);
    return null;
  }
}

export function getDb() {
  if (!firestoreDb) {
    return initFirebase();
  }
  return firestoreDb;
}

// Helper: Broadcast store update event to all components
function notifyStoreUpdate() {
  try {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('priya_store_updated'));
    }
  } catch (e) {}
}

// 3. Real-Time onSnapshot Listeners (Automatic 0-refresh Live Sync)
export function setupRealtimeListeners(db) {
  if (!db || typeof window === 'undefined') return;

  // Clear previous listeners if any
  unsubscribers.forEach(unsub => {
    try { unsub(); } catch(e) {}
  });
  unsubscribers = [];

  try {
    // 1. Live Products Listener
    const unsubProds = onSnapshot(collection(db, 'products'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => {
          items.push({ id: docSnap.id, ...docSnap.data() });
        });
        try {
          localStorage.setItem('marvex_products', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Products sync notice:', err.message));
    unsubscribers.push(unsubProds);

    // 2. Live Blogs Listener
    const unsubBlogs = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => {
          items.push({ id: docSnap.id, ...docSnap.data() });
        });
        try {
          localStorage.setItem('marvex_blogs', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Blogs sync notice:', err.message));
    unsubscribers.push(unsubBlogs);

    // 3. Live Certificates Listener
    const unsubCerts = onSnapshot(collection(db, 'certificates'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => {
          items.push({ id: docSnap.id, ...docSnap.data() });
        });
        try {
          localStorage.setItem('marvex_certs', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Certs sync notice:', err.message));
    unsubscribers.push(unsubCerts);

    // 4. Live Enquiries Listener
    const unsubEnqs = onSnapshot(collection(db, 'enquiries'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => {
          items.push({ id: docSnap.id, ...docSnap.data() });
        });
        items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
        try {
          localStorage.setItem('marvex_enquiries', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Enquiries sync notice:', err.message));
    unsubscribers.push(unsubEnqs);

  } catch (err) {
    console.warn('Real-time listener notice:', err);
  }
}

// Auto-trigger setup on module load
if (typeof window !== 'undefined') {
  setTimeout(() => {
    try {
      getDb();
    } catch(e) {}
  }, 400);
}

// --- CLOUD FIRESTORE DIRECT ACTIONS ---

// Products
export async function fetchCloudProducts() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'products'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
    return items;
  } catch (err) {
    return null;
  }
}

export async function saveCloudProduct(product) {
  try {
    const db = getDb();
    if (!db || !product) return false;
    const docId = String(product.id || `prod-${Date.now()}`).replace(/[\/\s]/g, '-');
    const cleanProduct = {
      id: docId,
      title: String(product.title || '').trim(),
      category: String(product.category || product.cat || 'Ground Spices').trim(),
      cat: String(product.category || product.cat || 'Ground Spices').trim(),
      origin: String(product.origin || 'India').trim(),
      packaging: String(product.packaging || '25kg PP Bags').trim(),
      specs: String(product.specs || '').trim(),
      description: String(product.description || product.desc || '').trim(),
      desc: String(product.description || product.desc || '').trim(),
      image: String(product.image || ''),
      hsCode: String(product.hsCode || 'HS 0910').trim(),
      isFeatured: Boolean(product.isFeatured),
      updatedAt: new Date().toISOString()
    };
    const docRef = doc(db, 'products', docId);
    await setDoc(docRef, cleanProduct, { merge: true });
    return true;
  } catch (err) {
    console.error('Firebase saveCloudProduct error:', err);
    return false;
  }
}

export async function deleteCloudProduct(productId) {
  try {
    const db = getDb();
    if (!db || !productId) return false;
    const docId = String(productId).replace(/[\/\s]/g, '-');
    const docRef = doc(db, 'products', docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    console.error('Firebase deleteCloudProduct error:', err);
    return false;
  }
}

// Blogs
export async function fetchCloudBlogs() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'blogs'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
    return items;
  } catch (err) {
    return null;
  }
}

export async function saveCloudBlog(blog) {
  try {
    const db = getDb();
    if (!db || !blog) return false;
    const docId = String(blog.id || `blog-${Date.now()}`).replace(/[\/\s]/g, '-');
    const cleanBlog = {
      id: docId,
      title: String(blog.title || '').trim(),
      cat: String(blog.cat || blog.category || 'Export Guide').trim(),
      read: String(blog.read || '5 min read').trim(),
      excerpt: String(blog.excerpt || '').trim(),
      body: String(blog.body || '').trim(),
      image: String(blog.image || ''),
      date: blog.date || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      updatedAt: new Date().toISOString()
    };
    const docRef = doc(db, 'blogs', docId);
    await setDoc(docRef, cleanBlog, { merge: true });
    return true;
  } catch (err) {
    console.error('Firebase saveCloudBlog error:', err);
    return false;
  }
}

export async function deleteCloudBlog(blogId) {
  try {
    const db = getDb();
    if (!db || !blogId) return false;
    const docId = String(blogId).replace(/[\/\s]/g, '-');
    const docRef = doc(db, 'blogs', docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    return false;
  }
}

// Certificates
export async function fetchCloudCertificates() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'certificates'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
    return items;
  } catch (err) {
    return null;
  }
}

export async function saveCloudCertificate(cert) {
  try {
    const db = getDb();
    if (!db || !cert) return false;
    const docId = String(cert.id || `cert-${Date.now()}`).replace(/[\/\s]/g, '-');
    const cleanCert = {
      id: docId,
      name: String(cert.name || '').trim(),
      code: String(cert.code || 'CERTIFIED').trim(),
      tag: String(cert.tag || '').trim(),
      logo: String(cert.logo || ''),
      updatedAt: new Date().toISOString()
    };
    const docRef = doc(db, 'certificates', docId);
    await setDoc(docRef, cleanCert, { merge: true });
    return true;
  } catch (err) {
    return false;
  }
}

export async function deleteCloudCertificate(certId) {
  try {
    const db = getDb();
    if (!db || !certId) return false;
    const docId = String(certId).replace(/[\/\s]/g, '-');
    const docRef = doc(db, 'certificates', docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    return false;
  }
}

// Enquiries
export async function fetchCloudEnquiries() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'enquiries'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
    items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return items;
  } catch (err) {
    return null;
  }
}

export async function saveCloudEnquiry(enquiry) {
  try {
    const db = getDb();
    if (!db || !enquiry) return false;
    const docId = String(enquiry.id || `enq-${Date.now()}`).replace(/[\/\s]/g, '-');
    const cleanEnquiry = {
      id: docId,
      source: String(enquiry.source || 'Website Form'),
      name: String(enquiry.name || 'Buyer'),
      company: String(enquiry.company || 'Private Buyer'),
      email: String(enquiry.email || 'N/A'),
      phone: String(enquiry.phone || 'N/A'),
      product: String(enquiry.product || enquiry.title || 'Spice Enquiry'),
      quantity: String(enquiry.quantity || 'N/A'),
      destinationPort: String(enquiry.destinationPort || 'N/A'),
      notes: String(enquiry.notes || enquiry.message || ''),
      status: String(enquiry.status || 'New'),
      date: enquiry.date || new Date().toLocaleString('en-US', { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true })
    };
    const docRef = doc(db, 'enquiries', docId);
    await setDoc(docRef, cleanEnquiry, { merge: true });
    return true;
  } catch (err) {
    return false;
  }
}

export async function deleteCloudEnquiry(enquiryId) {
  try {
    const db = getDb();
    if (!db || !enquiryId) return false;
    const docId = String(enquiryId).replace(/[\/\s]/g, '-');
    const docRef = doc(db, 'enquiries', docId);
    await deleteDoc(docRef);
    return true;
  } catch (err) {
    return false;
  }
}

// Bulk initial migrate
export async function syncAllToCloud(productsList, blogsList, certsList) {
  const db = getDb();
  if (!db) return false;

  if (productsList && productsList.length > 0) {
    for (const p of productsList) {
      await saveCloudProduct(p);
    }
  }

  if (blogsList && blogsList.length > 0) {
    for (const b of blogsList) {
      await saveCloudBlog(b);
    }
  }

  if (certsList && certsList.length > 0) {
    for (const c of certsList) {
      await saveCloudCertificate(c);
    }
  }

  return true;
}
