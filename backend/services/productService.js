import Product from '../models/Product.js';

export const getProductsService = async ({ page = 1, limit = 12, category, search, sort }) => {
  const query = { isDeleted: { $ne: true } };

  if (category && category !== 'All') {
    query.category = category;
  }

  if (search) {
    const cleanedSearch = search.trim();
    const searchTerms = [cleanedSearch];

    // Normalize plurals and singulars
    if (cleanedSearch.toLowerCase().endsWith('es')) {
      searchTerms.push(cleanedSearch.slice(0, -2));
    } else if (cleanedSearch.toLowerCase().endsWith('s')) {
      searchTerms.push(cleanedSearch.slice(0, -1));
    }

    if (cleanedSearch.toLowerCase().endsWith('dress')) {
      searchTerms.push(cleanedSearch + 'es');
    } else if (cleanedSearch.toLowerCase().endsWith('set') || cleanedSearch.toLowerCase().endsWith('top') || cleanedSearch.toLowerCase().endsWith('bottom')) {
      searchTerms.push(cleanedSearch + 's');
    }

    // Support cordset variations
    const normalized = cleanedSearch.toLowerCase().replace(/\s+/g, '');
    if (normalized.includes('cordset') || normalized.includes('cordsets') || normalized.includes('coordset') || normalized.includes('coordsets')) {
      searchTerms.push('cordset', 'cordsets', 'cord set', 'cord sets', 'co-ord', 'co-ord set', 'co-ord sets', 'coord set', 'coord sets');
    }

    // Extract unique terms
    const uniqueTerms = Array.from(new Set(searchTerms));

    // Escape regex characters and join with OR operator
    const regexPattern = uniqueTerms
      .map(term => term.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'))
      .join('|');

    query.$or = [
      { name: { $regex: regexPattern, $options: 'i' } },
      { description: { $regex: regexPattern, $options: 'i' } },
      { category: { $regex: regexPattern, $options: 'i' } }
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
  const product = await Product.findOne({ slug, isDeleted: { $ne: true } }).populate({
    path: 'colorVariants.product',
    select: 'name slug image images colorName colors price discountPrice sizes'
  });
  if (!product) {
    throw new Error('Product not found');
  }
  return product;
};

export const createProductService = async (productData) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

export const updateProductService = async (id, updateData) => {
  const product = await Product.findOne({ _id: id, isDeleted: { $ne: true } });
  if (!product) {
    throw new Error('Product not found');
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
