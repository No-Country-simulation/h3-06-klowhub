import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URI || '');

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDB connected in ${url}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${(error as Error).message}`);
    process.exit(1);
  }
};

export default connectDB;
