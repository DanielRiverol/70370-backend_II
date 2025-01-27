import mongoose from "mongoose";
export default async function connectDb(uri) {
  try {
    console.log("Database is connected");
    return await mongoose.connect(uri);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
}
