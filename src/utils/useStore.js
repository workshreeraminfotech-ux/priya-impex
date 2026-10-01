import { useState, useEffect } from 'react';
import { getProducts, getBlogs, getCertificates, getEnquiries } from './adminStore';
import { PRODUCTS } from '../data/products';
import { BLOGS } from '../data/blogs';

export function useStoreProducts() {
  const [products, setProducts] = useState(() => getProducts() || PRODUCTS);

  useEffect(() => {
    setProducts(getProducts() || PRODUCTS);
  }, []);

  return Array.isArray(products) && products.length > 0 ? products : PRODUCTS;
}

export function useStoreBlogs() {
  const [blogs, setBlogs] = useState(() => getBlogs() || BLOGS);

  useEffect(() => {
    setBlogs(getBlogs() || BLOGS);
  }, []);

  return Array.isArray(blogs) && blogs.length > 0 ? blogs : BLOGS;
}

export function useStoreCertificates() {
  const [certs, setCerts] = useState(() => getCertificates());

  useEffect(() => {
    setCerts(getCertificates());
  }, []);

  return Array.isArray(certs) && certs.length > 0 ? certs : getCertificates();
}

export function useStoreEnquiries() {
  const [enquiries, setEnquiries] = useState(() => getEnquiries());

  useEffect(() => {
    setEnquiries(getEnquiries());
  }, []);

  return Array.isArray(enquiries) ? enquiries : [];
}
