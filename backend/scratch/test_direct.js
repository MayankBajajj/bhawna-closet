import mongoose from 'mongoose';

const testURI = 'mongodb://bhawna_closet_database:dildiltum561@ac-dletgy9-shard-00-00.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-01.7ivssqe.mongodb.net:27017,ac-dletgy9-shard-00-02.7ivssqe.mongodb.net:27017/bhawna_closet?ssl=true&replicaSet=atlas-pnlu29-shard-0&authSource=admin';

const runTest = async () => {
  console.log('Testing Mongoose connection with direct shard hosts and replicaSet name...');
  try {
    await mongoose.connect(testURI, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('SUCCESS: Connected to MongoDB Atlas directly!');
    process.exit(0);
  } catch (err) {
    console.error('FAILURE:', err.message);
    process.exit(1);
  }
};

runTest();
