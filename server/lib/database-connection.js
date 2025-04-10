import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectToDB() {
  try {
     const conn = await mongoose.connect(process.env.MONGO_URI)
     console.log("MongoDB connected:", conn.connection.host, conn.connection.name);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}