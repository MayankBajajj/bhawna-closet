import Product from '../models/Product.js';

export const getProductsService = async ({ page = 1, limit = 12, category, search, sort }) => {
  const query = { isDeleted: { $ne: true } };

  if (category && category !== 'All') {
    query.category = category;
  }

  if (search) {
    query.$or = [
      { name: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } }
    ];
  }

  let sortQuery = { createdAt: -1 }; // default newest first
  if (sort === 'price-asc') sortQuery = { price: 1 };
  else if (sort === 'price-desc') sortQuery = { price: -1 };

  const parsedPage = parseInt(page);
  const parsedLimit = parseInt(limit);
  const skip = (parsedPage - 1) * parsedLimit;

  const totalProducts = await Product.countDocuments(query);
  const products = await Product.find(query)
    .sort(sortQuery)
    .skip(skip)
    .limit(parsedLimit);

  return {
    products,
    pagination: {
      totalProducts,
      totalPages: Math.ceil(totalProducts / parsedLimit),
      currentPage: parsedPage,
      limit: parsedLimit
    }
  };
};

export const getProductBySlugService = async (slug) => {
  const product = await Product.findOne({ slug, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const createProductService = async (productData) => {
  // Check SKU uniqueness
  const skuExists = await Product.findOne({ sku: productData.sku });
  if (skuExists) {
    throw new Error('Product with this SKU already exists');
  }
  const product = new Product(productData);
  await product.save();
  return product;
};

export const updateProductService = async (id, updateData) => {
  const product = await Product.findOne({ _id: id, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product not found');
  }
  
  if (updateData.sku && updateData.sku !== product.sku) {
    const skuExists = await Product.findOne({ sku: updateData.sku });
    if (skuExists) {
      throw new Error('Product with this SKU already exists');
    }
  }

  // Apply fields manually to trigger pre-save hooks (like slug generation)
  Object.keys(updateData).forEach((key) => {
    product[key] = updateData[key];
  });

  await product.save();
  return product;
};

export const deleteProductSoftService = async (id) => {
  const product = await Product.findOne({ _id: id, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product not found');
  }
  product.isDeleted = true;
  await product.save();
  return product;
};
