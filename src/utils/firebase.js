// Firebase Cloud Database & Real-Time Sync Utility
// Allows Priya Impex Admin Panel changes to persist globally for all devices and visitors.

import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  deleteDoc, 
  writeBatch
} from 'firebase/firestore';

const CONFIG_STORAGE_KEY = 'priya_firebase_config';

// 1. Get Firebase Configuration from LocalStorage or Environment Variables safely
export function getFirebaseConfig() {
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
  } catch (e) {
    console.warn('Failed to parse saved Firebase config', e);
  }

  try {
    if (typeof import.meta !== 'undefined' && import.meta.env) {
      const envConfig = {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY || '',
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || '',
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || '',
        storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || '',
        messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '',
        appId: import.meta.env.VITE_FIREBASE_APP_ID || ''
      };
      if (envConfig.apiKey && envConfig.projectId) {
        return envConfig;
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
  } catch (e) {
    console.error('Failed to save config to localStorage', e);
  }
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

// --- CLOUD FIRESTORE HELPERS ---

// 3. Products
export async function fetchCloudProducts() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'products'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => {
      items.push({ id: docSnap.id, ...docSnap.data() });
    });
    return items;
  } catch (err) {
    console.warn('Error fetching cloud products:', err);
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
    console.warn('Error saving cloud product:', err);
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
    console.warn('Error deleting cloud product:', err);
    return false;
  }
}

// 4. Blogs
export async function fetchCloudBlogs() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'blogs'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => {
      items.push({ id: docSnap.id, ...docSnap.data() });
    });
    return items;
  } catch (err) {
    console.warn('Error fetching cloud blogs:', err);
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
    console.warn('Error saving cloud blog:', err);
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
    console.warn('Error deleting cloud blog:', err);
    return false;
  }
}

// 5. Certificates
export async function fetchCloudCertificates() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'certificates'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => {
      items.push({ id: docSnap.id, ...docSnap.data() });
    });
    return items;
  } catch (err) {
    console.warn('Error fetching cloud certs:', err);
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
    console.warn('Error saving cloud cert:', err);
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
    console.warn('Error deleting cloud cert:', err);
    return false;
  }
}

// 6. Enquiries
export async function fetchCloudEnquiries() {
  try {
    const db = getDb();
    if (!db) return null;
    const snapshot = await getDocs(collection(db, 'enquiries'));
    if (snapshot.empty) return null;
    const items = [];
    snapshot.forEach(docSnap => {
      items.push({ id: docSnap.id, ...docSnap.data() });
    });
    items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
    return items;
  } catch (err) {
    console.warn('Error fetching cloud enquiries:', err);
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
    console.warn('Error saving cloud enquiry:', err);
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
    console.warn('Error deleting cloud enquiry:', err);
    return false;
  }
}

// 7. Bulk Sync / Migrate to Cloud Database
export async function syncAllToCloud(productsList, blogsList, certsList) {
  const db = getDb();
  if (!db) throw new Error('Cloud database is not connected.');

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
