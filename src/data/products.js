// Centralized Product Database — Priya Impex
// Sequence: 1. Seed Spices, 2. Whole Spices, 3. Ground Spices

import cuminSeeds from '../assets/products/Cumin Seeds.webp';
import corianderSeeds from '../assets/products/Coriander Seeds.webp';
import fennelSeeds from '../assets/products/Fennel Seeds.webp';

import blackPepper from '../assets/products/Black Pepper.webp';
import dryRedChilli from '../assets/products/Dry Red Chilli.webp';
import turmericFingers from '../assets/products/Turmeric Fingers.webp';
import turmericBulbs from '../assets/products/Turmeric Bulbs.webp';

import turmericPowder from '../assets/products/Turmeric Powder.webp';
import chilliPowder from '../assets/products/Chilli Powder.webp';
import corianderPowder from '../assets/products/Coriander Powder.webp';
import cuminPowder from '../assets/products/Cumin Powder.webp';
import fennelPowder from '../assets/products/Fennel Powder.webp';
import clovePowder from '../assets/products/Clove Powder.webp';

export const PRODUCT_CATEGORIES = [
  'All',
  'Seed Spices',
  'Whole Spices',
  'Ground Spices'
];

export const PRODUCTS = [
  // ==========================================
  // 1. SEED SPICES (PRIORITY #1)
  // ==========================================
  {
    id: 'cumin-seeds',
    title: 'Cumin Seeds (Jeera - Singapore 99% / 99.5%)',
    category: 'Seed Spices',
    cat: 'Seed Spices',
    hsCode: 'HS 09093120',
    image: cuminSeeds,
    origin: 'Unjha, Gujarat & Rajasthan, India',
    packaging: '25kg / 50kg PP Woven Bags',
    specs: 'Purity 99.5% Sortex | Moisture < 8% | Foreign Matter < 0.5%',
    description: 'Machine cleaned and Sortex graded cumin seeds with rich aroma, ideal for bulk spice import.',
    desc: 'Machine cleaned and Sortex graded cumin seeds with rich aroma for global trade.',
    isFeatured: true
  },
  {
    id: 'coriander-seeds',
    title: 'Coriander Seeds (Eagle / Badami / Scoop)',
    category: 'Seed Spices',
    cat: 'Seed Spices',
    hsCode: 'HS 09092110',
    image: corianderSeeds,
    origin: 'Kota, Rajasthan & MP, India',
    packaging: '25kg / 40kg PP Bags',
    specs: 'Purity 99.0% | Greenish Golden | Moisture < 8%',
    description: 'Bold coriander seeds with distinct citrus scent, thoroughly cleaned and color sorted.',
    desc: 'Bold coriander seeds with distinct citrus scent, thoroughly cleaned and color sorted.',
    isFeatured: true
  },
  {
    id: 'fennel-seeds',
    title: 'Fennel Seeds (Saunf - Green Lucknowi & Bold)',
    category: 'Seed Spices',
    cat: 'Seed Spices',
    hsCode: 'HS 09096110',
    image: fennelSeeds,
    origin: 'Unjha, Gujarat, India',
    packaging: '25kg / 50kg Bags',
    specs: 'Green Sortex Quality 99.5% | Anethole Oil > 1.5%',
    description: 'Aromatic whole green fennel seeds with sweet taste, sortex cleaned for retail and export.',
    desc: 'Aromatic whole green fennel seeds with sweet taste, sortex cleaned for export.',
    isFeatured: true
  },

  // ==========================================
  // 2. WHOLE SPICES (PRIORITY #2)
  // ==========================================
  {
    id: 'black-pepper',
    title: 'Black Pepper Berries (Tellicherry / MG1)',
    category: 'Whole Spices',
    cat: 'Whole Spices',
    hsCode: 'HS 09041110',
    image: blackPepper,
    origin: 'Idukki & Wayanad, Kerala, India',
    packaging: '25kg / 50kg Jute / PP Bags',
    specs: 'Bulk Density 550 - 580 g/l | Piperine > 4.0%',
    description: 'Extra bold sun-dried black peppercorns from Malabar coast with intense bite, dark color, and high essential oil content.',
    desc: 'Extra bold sun-dried black peppercorns with intense bite and high essential oil content.',
    isFeatured: true
  },
  {
    id: 'dry-red-chilli',
    title: 'Dry Red Chilli Whole (Stemless / With Stem)',
    category: 'Whole Spices',
    cat: 'Whole Spices',
    hsCode: 'HS 09042110',
    image: dryRedChilli,
    origin: 'Guntur, Andhra Pradesh, India',
    packaging: '25kg / 50kg Press Bales / PP Bags',
    specs: 'Moisture < 10% | Foreign Matter < 1%',
    description: 'Sun-dried whole red chillies sortex cleaned for high heat and color extraction.',
    desc: 'Sun-dried whole red chillies sortex cleaned for high heat and color extraction.',
    isFeatured: true
  },
  {
    id: 'turmeric-fingers',
    title: 'Turmeric Fingers (Erode / Nizamabad)',
    category: 'Whole Spices',
    cat: 'Whole Spices',
    hsCode: 'HS 09103010',
    image: turmericFingers,
    origin: 'Erode & Nizamabad, India',
    packaging: '25kg / 50kg Jute / PP Bags',
    specs: 'Double Polished | Curcumin > 3.5%',
    description: 'Deep orange-yellow polished whole turmeric finger roots, hard cured with high curcumin purity.',
    desc: 'Deep orange-yellow polished whole turmeric finger roots with high curcumin purity.',
    isFeatured: true
  },
  {
    id: 'turmeric-bulbs',
    title: 'Turmeric Bulbs Whole',
    category: 'Whole Spices',
    cat: 'Whole Spices',
    hsCode: 'HS 09103010',
    image: turmericBulbs,
    origin: 'Sangli & Nizamabad, India',
    packaging: '50kg Jute / PP Bags',
    specs: 'High Density Mother Bulbs | Curcumin > 3.0%',
    description: 'Robust mother turmeric bulbs cleaned, boiled, and sun-cured for grinding and extract industries.',
    desc: 'Robust mother turmeric bulbs cleaned, boiled, and sun-cured for industrial grinding.',
    isFeatured: false
  },

  // ==========================================
  // 3. GROUND SPICES (PRIORITY #3)
  // ==========================================
  {
    id: 'turmeric-powder',
    title: 'Turmeric Powder',
    category: 'Ground Spices',
    cat: 'Ground Spices',
    hsCode: 'HS 09103020',
    image: turmericPowder,
    origin: 'Erode & Sangli, India',
    packaging: '25kg / 50kg PP Bags / Custom Vacuum',
    specs: 'Curcumin > 3.5% | Moisture < 10% | Sortex Cleaned',
    description: 'Golden-yellow turmeric powder milled from premium curcuma longa roots. Double-sifted for rich color, vibrant aroma, and high curcumin content.',
    desc: 'Golden-yellow turmeric powder milled from premium curcuma longa roots. Double-sifted for rich color and high curcumin content.',
    isFeatured: true
  },
  {
    id: 'chilli-powder',
    title: 'Red Chilli Powder',
    category: 'Ground Spices',
    cat: 'Ground Spices',
    hsCode: 'HS 09042211',
    image: chilliPowder,
    origin: 'Guntur, Andhra Pradesh, India',
    packaging: '25kg Kraft Bags / Drums / PP Bags',
    specs: 'ASTA Color 80 - 120 | Pungency 25,000 - 40,000 SHU',
    description: 'Ultra-fine spicy red chilli powder ground from select Guntur chillies. Delivers an authentic deep red color and fiery pungent kick.',
    desc: 'Ultra-fine spicy red chilli powder ground from select Guntur chillies for authentic color and fiery heat.',
    isFeatured: true
  },
  {
    id: 'coriander-powder',
    title: 'Coriander Powder (Dhana)',
    category: 'Ground Spices',
    cat: 'Ground Spices',
    hsCode: 'HS 09092200',
    image: corianderPowder,
    origin: 'Ramganj & Kota, Rajasthan, India',
    packaging: '25kg Multi-wall Paper / PP Bags',
    specs: 'Volatile Oil > 0.3% | Moisture < 8% | Fine Mesh',
    description: 'Freshly ground coriander powder milled from premium green coriander seeds with a pleasant citrus fragrance and warm earthy flavor.',
    desc: 'Freshly ground coriander powder milled from green seeds with pleasant citrus fragrance.',
    isFeatured: true
  },
  {
    id: 'cumin-powder',
    title: 'Cumin Powder (Jeera)',
    category: 'Ground Spices',
    cat: 'Ground Spices',
    hsCode: 'HS 09093200',
    image: cuminPowder,
    origin: 'Unjha, Gujarat, India',
    packaging: '25kg PP Bags / Vacuum Bags',
    specs: 'Volatile Oil > 1.8% | Purity 99.5% | Mesh 40-60',
    description: 'High-aroma ground cumin seed powder processed under cool grinding technology to preserve delicate essential oils and earthy notes.',
    desc: 'High-aroma ground cumin seed powder processed under cool grinding technology.',
    isFeatured: true
  },
  {
    id: 'fennel-powder',
    title: 'Fennel Powder (Saunf)',
    category: 'Ground Spices',
    cat: 'Ground Spices',
    hsCode: 'HS 09096200',
    image: fennelPowder,
    origin: 'Gujarat & Rajasthan, India',
    packaging: '25kg PP Bags',
    specs: 'Sweet Green Grade | Volatile Oil > 1.2%',
    description: 'Sweet, fragrant ground fennel powder made from selected green fennel seeds.',
    desc: 'Sweet, fragrant ground fennel powder made from selected green fennel seeds.',
    isFeatured: false
  },
  {
    id: 'clove-powder',
    title: 'Clove Powder',
    category: 'Ground Spices',
    cat: 'Ground Spices',
    hsCode: 'HS 09072000',
    image: clovePowder,
    origin: 'South India',
    packaging: '15kg / 25kg Drums',
    specs: 'Eugenol Content > 15% | High Pungency',
    description: 'Intensely fragrant ground whole cloves rich in natural essential oil (Eugenol) for industrial food processing and spice formulation.',
    desc: 'Intensely fragrant ground whole cloves rich in natural essential oil (Eugenol).',
    isFeatured: false
  }
];

// Helper utilities for filtering
export function getProductsByCategory(category = 'All') {
  if (!category || category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category || p.cat === category);
}

export function getFeaturedProducts() {
  return PRODUCTS.filter(p => p.isFeatured);
}

export function searchProducts(query = '', category = 'All') {
  const list = getProductsByCategory(category);
  if (!query.trim()) return list;
  const q = query.toLowerCase();
  return list.filter(p => 
    p.title.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.origin.toLowerCase().includes(q) ||
    p.hsCode.toLowerCase().includes(q)
  );
}
