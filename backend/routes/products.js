import express from 'express';
import { getProducts, getProductBySlug } from '../controllers/productController.js';

const router = express.Router();

// GET all products (with pagination, search, category filter, and sorting)
router.get('/', getProducts);

// GET single product details by slug
router.get('/slug/:slug', getProductBySlug);

export default router;
