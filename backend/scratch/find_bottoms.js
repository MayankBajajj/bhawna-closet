import mongoose from 'mongoose';
import Product from '../models/Product.js';

const MONGODB_URI = 'mongodb://bhawna_closet_database:dildiltum561@ac-dletgy9-shard-00-00.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-01.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-02.7ivssqe.mongodb.net:27017/bhawna_closet?ssl=true&replicaSet=atlas-pnlu29-shard-0&authSource=admin';

const run = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    const p = await Product.findOne({ category: 'Bottoms', isDeleted: { $ne: true } });
    console.log('Bottoms product found:', p ? p.name : 'NONE', 'Image:', p ? p.images[0] : 'NONE');
    process.exit(0);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
run();
