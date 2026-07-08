import mongoose from 'mongoose';
import Product from '../models/Product.js';

const MONGODB_URI = 'mongodb://bhawna_closet_database:dildiltum561@ac-dletgy9-shard-00-00.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-01.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-02.7ivssqe.mongodb.net:27017/bhawna_closet?ssl=true&replicaSet=atlas-pnlu29-shard-0&authSource=admin';

const run = async () => {
  console.log('Querying live MongoDB database directly...');
  try {
    await mongoose.connect(MONGODB_URI);
    const count = await Product.countDocuments();
    const activeCount = await Product.countDocuments({ isDeleted: { $ne: true } });
    const sample = await Product.find({ isDeleted: { $ne: true } }).limit(2);
    
    console.log('\n==========================================');
    console.log(`TOTAL PRODUCTS IN DB: ${count}`);
    console.log(`ACTIVE PRODUCTS (isDeleted !== true): ${activeCount}`);
    console.log('SAMPLE DATA:\n', JSON.stringify(sample, null, 2));
    console.log('==========================================\n');
    process.exit(0);
  } catch (err) {
    console.error('FAIL:', err.message);
    process.exit(1);
  }
};
run();
