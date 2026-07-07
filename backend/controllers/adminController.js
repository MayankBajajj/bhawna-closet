import Admin from '../models/Admin.js';
import User from '../models/User.js';
import Product from '../models/Product.js';
import Inquiry from '../models/Inquiry.js';
import Order from '../models/Order.js';
import Category from '../models/Category.js';
import { generateToken } from '../services/userService.js';
import { isCloudinaryConfigured } from '../config/cloudinary.js';
import {
  createProductService,
  updateProductService,
  deleteProductSoftService
} from '../services/productService.js';

export const adminLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Please fill in all fields' });
    }
    const admin = await Admin.findOne({ email });
    if (admin && (await admin.comparePassword(password))) {
      res.json({
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        token: generateToken(admin._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(401);
    next(error);
  }
};

export const getDashboardStats = async (req, res, next) => {
  try {
    const totalProducts = await Product.countDocuments({ isDeleted: { $ne: true } });
    const totalUsers = await User.countDocuments({});
    const totalInquiries = await Inquiry.countDocuments({});
    const totalOrders = await Order.countDocuments({});
    
    // Find low stock products (any size stock <= 2)
    const lowStockProducts = await Product.find({
      isDeleted: { $ne: true },
      'sizes.stock': { $lte: 2 }
    }).select('name sku sizes');

    res.json({
      totalProducts,
      totalUsers,
      totalInquiries,
      totalOrders,
      lowStockProducts
    });
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { sku, name, brand, description, price, discountPrice, category, sizes, colors, isFeatured, isNewArrival } = req.body;

    // files will be parsed by multer-storage-cloudinary or multer.diskStorage
    const images = req.files ? req.files.map(f => {
      return isCloudinaryConfigured ? f.path : `${req.protocol}://${req.get('host')}/uploads/${f.filename}`;
    }) : [];

    if (!sku || !name || !description || !price || !category) {
      return res.status(400).json({ message: 'Required fields: SKU, Name, Description, Price, Category' });
    }

    if (images.length === 0) {
      return res.status(400).json({ message: 'At least one product image is required' });
    }

    if (images.length > 4) {
      return res.status(400).json({ message: 'A maximum of 4 product images is allowed' });
    }

    // Parse fields if sent as JSON string in multi-part form
    let parsedSizes = sizes;
    if (typeof sizes === 'string') {
      parsedSizes = JSON.parse(sizes);
    }

    let parsedColors = colors;
    if (typeof colors === 'string') {
      parsedColors = JSON.parse(colors);
    }

    const product = await createProductService({
      sku,
      name,
      brand,
      description,
      price: parseFloat(price),
      discountPrice: discountPrice ? parseFloat(discountPrice) : undefined,
      category,
      sizes: parsedSizes,
      colors: parsedColors || [],
      images,
      isFeatured: isFeatured === 'true' || isFeatured === true,
      isNewArrival: isNewArrival === 'true' || isNewArrival === true
    });

    // Auto-seed category to Category database
    const categoryExists = await Category.findOne({ name: category });
    if (!categoryExists) {
      await Category.create({ name: category });
    }

    res.status(201).json(product);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { sku, name, brand, description, price, discountPrice, category, sizes, colors, isFeatured, isNewArrival, existingImages } = req.body;

    const newImages = req.files ? req.files.map(f => {
      return isCloudinaryConfigured ? f.path : `${req.protocol}://${req.get('host')}/uploads/${f.filename}`;
    }) : [];

    let parsedExistingImages = [];
    if (existingImages) {
      parsedExistingImages = typeof existingImages === 'string' ? JSON.parse(existingImages) : existingImages;
    }

    const finalImages = [...parsedExistingImages, ...newImages];

    if (finalImages.length === 0) {
      return res.status(400).json({ message: 'At least one product image is required' });
    }

    if (finalImages.length > 4) {
      return res.status(400).json({ message: 'A maximum of 4 product images is allowed' });
    }

    let parsedSizes = sizes;
    if (typeof sizes === 'string') {
      parsedSizes = JSON.parse(sizes);
    }

    let parsedColors = colors;
    if (typeof colors === 'string') {
      parsedColors = JSON.parse(colors);
    }

    const product = await updateProductService(id, {
      sku,
      name,
      brand,
      description,
      price: parseFloat(price),
      discountPrice: discountPrice ? parseFloat(discountPrice) : null,
      category,
      sizes: parsedSizes,
      colors: parsedColors || [],
      images: finalImages,
      isFeatured: isFeatured === 'true' || isFeatured === true,
      isNewArrival: isNewArrival === 'true' || isNewArrival === true
    });

    const categoryExists = await Category.findOne({ name: category });
    if (!categoryExists) {
      await Category.create({ name: category });
    }

    res.json(product);
  } catch (error) {
    res.status(400);
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    await deleteProductSoftService(id);
    res.json({ message: 'Product deleted successfully (soft-delete)' });
  } catch (error) {
    res.status(404);
    next(error);
  }
};

export const getOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({})
      .populate('userId', 'name email')
      .populate('items.productId', 'name sku slug image images')
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500);
    next(error);
  }
};

export const updateOrderStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body; // 'Accepted', 'Rejected', 'Processing', etc.

    const order = await Order.findById(id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    const previousStatus = order.status;
    order.status = status;

    // Restock sizes inventory if status changes to Rejected or Cancelled from a non-restocked state
    if (
      (status === 'Rejected' || status === 'Cancelled') &&
      previousStatus !== 'Rejected' &&
      previousStatus !== 'Cancelled'
    ) {
      for (const item of order.items) {
        await Product.updateOne(
          { _id: item.productId, 'sizes.size': item.size },
          { $inc: { 'sizes.$[elem].stock': item.quantity } },
          { arrayFilters: [{ 'elem.size': item.size }] }
        );
      }
    }

    await order.save();
    res.json({ message: 'Order status updated successfully', order });
  } catch (error) {
    res.status(500);
    next(error);
  }
};
