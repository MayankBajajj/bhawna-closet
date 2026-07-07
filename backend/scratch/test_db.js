import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';

dns.setDefaultResultOrder('ipv4first');
dotenv.config();

const testURI = 'mongodb://bhawna_closet_database:dildiltum561@ac-dletgy9-shard-00-00.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-01.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-02.7ivssqe.mongodb.net:27017/bhawna_closet?ssl=true&replicaSet=atlas-dletgy9-shard-0&authSource=admin';

const runTest = async () => {
  console.log('Testing Mongoose connection to MongoDB Atlas shard replica set...');
  try {
    await mongoose.connect(testURI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('SUCCESS: Successfully connected to MongoDB Atlas!');
    process.exit(0);
  } catch (err) {
    console.error('FAILURE: Mongoose connection failed:', err.message);
    process.exit(1);
  }
};

runTest();
