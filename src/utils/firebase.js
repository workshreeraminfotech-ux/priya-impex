// Firebase Cloud Database & Live Real-Time Sync Utility
// Priya Impex — Seamless 2-Way Global Real-Time Sync

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

// 1. Permanent Default Firebase Config (or loaded from LocalStorage / Env)
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
  // 1. Check Hardcoded / Env Config
  if (DEFAULT_FIREBASE_CONFIG.apiKey && DEFAULT_FIREBASE_CONFIG.projectId) {
    return DEFAULT_FIREBASE_CONFIG;
  }

  // 2. Check localStorage
  try {
    if (typeof localStorage !== 'undefined') {
      const saved = localStorage.getItem(CONFIG_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.apiKey && parsed.projectId) {
          return parsed;
        }
      }
    }
  } catch (e) {}

  return null;
}

export function saveFirebaseConfig(config) {
  if (!config || !config.apiKey || !config.projectId) {
    throw new Error('Invalid Firebase config. apiKey and projectId are required.');
  }
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(config));
    }
  } catch (e) {}
  return initFirebase(true);
}

export function clearFirebaseConfig() {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(CONFIG_STORAGE_KEY);
    }
  } catch (e) {}
}

export function isFirebaseConfigured() {
  try {
    const cfg = getFirebaseConfig();
    return !!(cfg && cfg.apiKey && cfg.projectId);
  } catch (e) {
    return false;
  }
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
    console.warn('Firebase initialization error:', error);
    return null;
  }
}

export function getDb() {
  try {
    if (!firestoreDb) {
      return initFirebase();
    }
    return firestoreDb;
  } catch (e) {
    return null;
  }
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
        snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
        try {
          localStorage.setItem('marvex_products', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Products live sync notice:', err.message));
    unsubscribers.push(unsubProds);

    // 2. Live Blogs Listener
    const unsubBlogs = onSnapshot(collection(db, 'blogs'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
        try {
          localStorage.setItem('marvex_blogs', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Blogs live sync notice:', err.message));
    unsubscribers.push(unsubBlogs);

    // 3. Live Certificates Listener
    const unsubCerts = onSnapshot(collection(db, 'certificates'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
        try {
          localStorage.setItem('marvex_certs', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Certs live sync notice:', err.message));
    unsubscribers.push(unsubCerts);

    // 4. Live Enquiries Listener
    const unsubEnqs = onSnapshot(collection(db, 'enquiries'), (snapshot) => {
      if (!snapshot.empty) {
        const items = [];
        snapshot.forEach(docSnap => items.push({ id: docSnap.id, ...docSnap.data() }));
        items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
        try {
          localStorage.setItem('marvex_enquiries', JSON.stringify(items));
        } catch(e) {}
        notifyStoreUpdate();
      }
    }, (err) => console.warn('Enquiries live sync notice:', err.message));
    unsubscribers.push(unsubEnqs);

  } catch (err) {
    console.warn('Real-time listener setup error:', err);
  }
}

// Auto-trigger setup on module load
if (typeof window !== 'undefined') {
  setTimeout(() => {
    try {
      getDb();
    } catch(e) {}
  }, 500);
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
    const docId = String(product.id || `prod-${Date.now()}`);
    const docRef = doc(db, 'products', docId);
    await setDoc(docRef, { ...product, id: docId, updatedAt: new Date().toISOString() }, { merge: true });
    return true;
  } catch (err) {
    console.warn('Direct cloud save error:', err);
    return false;
  }
}

export async function deleteCloudProduct(productId) {
  try {
    const db = getDb();
    if (!db || !productId) return false;
    const docRef = doc(db, 'products', String(productId));
    await deleteDoc(docRef);
    return true;
  } catch (err) {
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
    const docId = String(blog.id || `blog-${Date.now()}`);
    const docRef = doc(db, 'blogs', docId);
    await setDoc(docRef, { ...blog, id: docId, updatedAt: new Date().toISOString() }, { merge: true });
    return true;
  } catch (err) {
    return false;
  }
}

export async function deleteCloudBlog(blogId) {
  try {
    const db = getDb();
    if (!db || !blogId) return false;
    const docRef = doc(db, 'blogs', String(blogId));
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
    const docId = String(cert.id || `cert-${Date.now()}`);
    const docRef = doc(db, 'certificates', docId);
    await setDoc(docRef, { ...cert, id: docId, updatedAt: new Date().toISOString() }, { merge: true });
    return true;
  } catch (err) {
    return false;
  }
}

export async function deleteCloudCertificate(certId) {
  try {
    const db = getDb();
    if (!db || !certId) return false;
    const docRef = doc(db, 'certificates', String(certId));
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
    const docId = String(enquiry.id || `enq-${Date.now()}`);
    const docRef = doc(db, 'enquiries', docId);
    await setDoc(docRef, { ...enquiry, id: docId }, { merge: true });
    return true;
  } catch (err) {
    return false;
  }
}

export async function deleteCloudEnquiry(enquiryId) {
  try {
    const db = getDb();
    if (!db || !enquiryId) return false;
    const docRef = doc(db, 'enquiries', String(enquiryId));
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

  const batch = writeBatch(db);

  if (productsList && productsList.length > 0) {
    productsList.forEach(p => {
      const docRef = doc(db, 'products', String(p.id));
      batch.set(docRef, p, { merge: true });
    });
  }

  if (blogsList && blogsList.length > 0) {
    blogsList.forEach(b => {
      const docRef = doc(db, 'blogs', String(b.id));
      batch.set(docRef, b, { merge: true });
    });
  }

  if (certsList && certsList.length > 0) {
    certsList.forEach(c => {
      const docRef = doc(db, 'certificates', String(c.id));
      batch.set(docRef, c, { merge: true });
    });
  }

  await batch.commit();
  return true;
}
