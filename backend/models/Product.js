import mongoose from 'mongoose';

const sizeStockSchema = new mongoose.Schema({
  size: {
    type: String,
    enum: ['M', 'L', 'XL', 'XXL'],
    required: true
  },
  stock: {
    type: Number,
    default: 0,
    min: [0, 'Stock cannot be negative']
  }
}, { _id: false });

const productSchema = new mongoose.Schema({
  slug: {
    type: String,
    unique: true,
    index: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  brand: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive']
  },
  discountPrice: {
    type: Number,
    validate: {
      validator: function(val) {
        return !val || val < this.price;
      },
      message: 'Discount price ({VALUE}) must be lower than original price'
    }
  },
  category: {
    type: String,
    required: true,
    index: true
  },
  images: {
    type: [String],
    required: true,
    validate: [
      {
        validator: function(val) {
          return val.length > 0;
        },
        message: 'At least one product image is required'
      },
      {
        validator: function(val) {
          return val.length <= 4;
        },
        message: 'A maximum of 4 product images is allowed'
      }
    ]
  },
  image: {
    type: String,
    required: true
  },
  sizes: {
    type: [sizeStockSchema],
    required: true,
    validate: {
      validator: function(val) {
        return val.length > 0;
      },
      message: 'At least one size stock detail must be configured'
    }
  },
  colors: {
    type: [String],
    default: []
  },
  colorName: {
    type: String,
    trim: true,
    default: ''
  },
  colorVariants: [
    {
      colorName: { type: String, required: true },
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }
    }
  ],
  isFeatured: {
    type: Boolean,
    default: false,
    index: true
  },
  isNewArrival: {
    type: Boolean,
    default: false,
    index: true
  },
  isDeleted: {
    type: Boolean,
    default: false,
    index: true
  }
}, { timestamps: true });

// Pre-validate to map first image to "image" for backward compatibility
productSchema.pre('validate', function(next) {
  if (this.images && this.images.length > 0) {
    this.image = this.images[0];
  }
  next();
});

// Pre-save to auto-generate unique slugs
productSchema.pre('save', async function(next) {
  if (this.isModified('name') || !this.slug) {
    let baseSlug = this.name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
    
    let uniqueSlug = baseSlug;
    let count = 1;
    
    while (true) {
      const existingProduct = await mongoose.models.Product.findOne({
        slug: uniqueSlug,
        _id: { $ne: this._id }
      });
      if (!existingProduct) {
        break;
      }
      uniqueSlug = `${baseSlug}-${count}`;
      count++;
    }
    
    this.slug = uniqueSlug;
  }
  next();
});

const Product = mongoose.model('Product', productSchema);
export default Product;
