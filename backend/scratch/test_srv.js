import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';

// Force Node to query Google Public DNS over IPv4 instead of broken local IPv6 router DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

dotenv.config();

const srvURI = 'mongodb+srv://bhawna_closet_database:dildiltum561@cluster0.7ivssqe.mongodb.net/bhawna_closet?retryWrites=true&w=majority&appName=Cluster0';

const runTest = async () => {
  console.log('Testing Mongoose connection with standard mongodb+srv:// URI...');
  try {
    await mongoose.connect(srvURI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('SUCCESS: Connected to MongoDB Atlas using SRV!');
    process.exit(0);
  } catch (err) {
    console.error('FAILURE: SRV connection failed:', err.message);
    process.exit(1);
  }
};

runTest();
