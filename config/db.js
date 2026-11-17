
import mongoose from "mongoose";

let isConnected = false;

const connectDB = async (mongoURI, dbName) => {
  if (isConnected && mongoose.connection.readyState === 1) {
    return;
  }

  try {
    await mongoose.connect(mongoURI, {
      dbName,
    });

    isConnected = true;
    console.log(`MongoDB connected to database: ${dbName}`);
  } catch (error) {
    isConnected = false;
    console.error("MongoDB connection failed:", error.message);
    throw error;
  }
};

export default connectDB;
