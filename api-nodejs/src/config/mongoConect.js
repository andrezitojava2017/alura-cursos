import mongoose from 'mongoose';
import 'dotenv/config';

const url = process.env.MONGO_URI;

const conectDataBase = async () => {
  await mongoose.connect(url);
  return mongoose.connection;
};

export default conectDataBase;
