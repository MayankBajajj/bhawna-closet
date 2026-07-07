import { getProductsService, getProductBySlugService } from '../services/productService.js';
import Category from '../models/Category.js';

export const getProducts = async (req, res, next) => {
  try {
    const { page, limit, category, search, sort } = req.query;
    const result = await getProductsService({ page, limit, category, search, sort });
    res.json(result);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const getProductBySlug = async (req, res, next) => {
  try {
    const { slug } = req.params;
    const product = await getProductBySlugService(slug);
    res.json(product);
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export const getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find({});
    res.json(categories.map(c => c.name));
  } catch (error) {
    res.status(500);
    next(error);
  }
};
