import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://sanavedshaikh:sanavedshaikh@eshop.1dnc0pv.mongodb.net/eshop'
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
