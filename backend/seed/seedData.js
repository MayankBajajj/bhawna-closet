import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from '../models/Product.js';
import Category from '../models/Category.js';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bhawna_closet';

const sampleProducts = [
  // Coordsets Collection
  {
    sku: 'BC-COORD-BLUSH',
    name: 'Blush Velvet Coord Set',
    description: 'A luxurious and comfortable two-piece set featuring a plush velvet finish in soft blush pink. Perfect for cozy yet stylish outings.',
    price: 2499,
    discountPrice: 2199,
    category: 'Cordsets',
    images: [
      'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 12 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 2 },
      { size: 'XXL', stock: 0 }
    ],
    colors: ['Blush Pink', 'Soft Rose'],
    isFeatured: true,
    isNewArrival: true
  },
  {
    sku: 'BC-COORD-ROSE',
    name: 'Elegant Rose Blazer Set',
    description: 'Tailored pink blazer paired with matching slim-fit trousers. Perfect for power-dressing with a feminine touch.',
    price: 3899,
    category: 'Cordsets',
    images: [
      'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 5 },
      { size: 'L', stock: 6 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 2 }
    ],
    colors: ['Rose Pink'],
    isFeatured: true,
    isNewArrival: false
  },
  {
    sku: 'BC-COORD-SUMMER',
    name: 'Pastel Summer Coord Set',
    description: 'Breathable linen-blend crop top and wide-leg trousers set in solid baby pink. High comfort and elegant look.',
    price: 1899,
    category: 'Cordsets',
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 15 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 0 }
    ],
    colors: ['Baby Pink', 'White'],
    isFeatured: false,
    isNewArrival: true
  },

  // Dresses Collection
  {
    sku: 'BC-DRESS-SATIN',
    name: 'Misty Rose Satin Gown',
    description: 'An elegant cowl neck satin slip dress in a gorgeous dusty rose hue. Ideal for evening dinners and celebrations.',
    price: 2999,
    discountPrice: 2699,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 8 },
      { size: 'L', stock: 6 },
      { size: 'XL', stock: 3 },
      { size: 'XXL', stock: 1 }
    ],
    colors: ['Dusty Rose'],
    isFeatured: true,
    isNewArrival: false
  },
  {
    sku: 'BC-DRESS-SAKURA',
    name: 'Sakura Floral Midi Dress',
    description: 'A lightweight white cotton dress printed with delicate pink cherry blossoms, featuring ruffled sleeves and a tier skirt.',
    price: 2199,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1612336307429-8a898d10e223?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 14 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 3 }
    ],
    colors: ['Sakura White'],
    isFeatured: false,
    isNewArrival: true
  },
  {
    sku: 'BC-DRESS-LACE',
    name: 'Boho Dream Lace Dress',
    description: 'A beautiful white cotton dress with intricate pink lace detailing along the bodice and hemline.',
    price: 3299,
    category: 'Dresses',
    images: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 4 },
      { size: 'L', stock: 3 },
      { size: 'XL', stock: 2 },
      { size: 'XXL', stock: 1 }
    ],
    colors: ['White & Pink'],
    isFeatured: false,
    isNewArrival: false
  },

  // Tops & Shirts Collection
  {
    sku: 'BC-TOP-RUFFLE',
    name: 'Feminine Ruffle Blouse',
    description: 'Chic long-sleeve pink chiffon blouse featuring elegant neck ties and delicate ruffles along the sleeves.',
    price: 1299,
    category: 'Tops & Shirts',
    images: [
      'https://images.unsplash.com/photo-1534126511673-b6899657816a?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 20 },
      { size: 'L', stock: 15 },
      { size: 'XL', stock: 10 },
      { size: 'XXL', stock: 5 }
    ],
    colors: ['Pastel Chiffon'],
    isFeatured: false,
    isNewArrival: false
  },
  {
    sku: 'BC-TOP-LINEN',
    name: 'Classic Linen White Shirt',
    description: 'Crisp white organic linen shirt with subtle pink logo embroidery. A summer-wardrobe staple.',
    price: 1499,
    category: 'Tops & Shirts',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 10 },
      { size: 'L', stock: 12 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 0 }
    ],
    colors: ['Linen White'],
    isFeatured: false,
    isNewArrival: false
  },
  {
    sku: 'BC-TOP-KNIT',
    name: 'Crop Knit Top in Soft Pink',
    description: 'Soft-touch ribbed knit crop top in solid pastel pink. Perfectly pairs with high-waisted bottoms.',
    price: 999,
    category: 'Tops & Shirts',
    images: [
      'https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 18 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 0 },
      { size: 'XXL', stock: 0 }
    ],
    colors: ['Soft Pink'],
    isFeatured: false,
    isNewArrival: true
  },

  // Bottoms Collection
  {
    sku: 'BC-BTM-TROUSER',
    name: 'White Wide-Leg Tailored Trousers',
    description: 'Sophisticated and chic, these high-waisted white trousers offer a flattering fit and dynamic movement.',
    price: 1999,
    category: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 12 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 6 },
      { size: 'XXL', stock: 2 }
    ],
    colors: ['Ivory White'],
    isFeatured: true,
    isNewArrival: false
  },
  {
    sku: 'BC-BTM-PLEATED',
    name: 'Pleated Rose Pink Skirt',
    description: 'A flowing, high-waisted midi skirt with sharp knife pleats and an elastic waistband for absolute comfort.',
    price: 1699,
    category: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1582142306909-195724d33ab0?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 9 },
      { size: 'L', stock: 10 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 1 }
    ],
    colors: ['Pleated Pink'],
    isFeatured: false,
    isNewArrival: false
  },
  {
    sku: 'BC-BTM-SHORTS',
    name: 'Casual White Denim Shorts',
    description: 'High-waisted white denim shorts with light distressing and raw-edge hems. Ideal for sunny day styling.',
    price: 1199,
    category: 'Bottoms',
    images: [
      'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?q=80&w=600&auto=format&fit=crop'
    ],
    sizes: [
      { size: 'M', stock: 15 },
      { size: 'L', stock: 12 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 4 }
    ],
    colors: ['Denim White'],
    isFeatured: false,
    isNewArrival: false
  }
];

const seedDatabase = async () => {
  try {
    console.log('Connecting to database for seeding...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB.');

    console.log('Clearing existing products...');
    await Product.deleteMany({});

    console.log('Seeding sample products...');
    for (const p of sampleProducts) {
      await new Product(p).save();
    }

    console.log('Database successfully seeded!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error.message);
    process.exit(1);
  }
};

seedDatabase();
