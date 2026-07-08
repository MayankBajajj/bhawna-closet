import mongoose from 'mongoose';
import Product from '../models/Product.js';

const MONGODB_URI = 'mongodb://bhawna_closet_database:dildiltum561@ac-dletgy9-shard-00-00.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-01.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-02.7ivssqe.mongodb.net:27017/bhawna_closet?ssl=true&replicaSet=atlas-pnlu29-shard-0&authSource=admin';

const run = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const products = await Product.find({ isDeleted: { $ne: true } }).select('name category images');
    
    console.log('\n==========================================');
    console.log(`FOUND ${products.length} ACTIVE PRODUCTS`);
    
    const categories = ['Coordsets', 'Dresses', 'Tops & Shirts', 'Bottoms'];
    categories.forEach(cat => {
      console.log(`\nCATEGORY: ${cat}`);
      const catProducts = products.filter(p => p.category === cat);
      catProducts.slice(0, 5).forEach(p => {
        console.log(`- Product: "${p.name}" | Image: ${p.images[0]}`);
      });
    });
    console.log('==========================================\n');
    process.exit(0);
  } catch (err) {
    console.error('FAIL:', err.message);
    process.exit(1);
  }
};
run();
