import mongoose from "mongoose";

export default async function connectDb(url) {
  try {
    await mongoose.connect(url);
    console.log(
      `Db conectada http://${mongoose.connection.host}/${mongoose.connection.name}`
    );
  } catch (error) {
    console.log(`No fue posible conectar ${error.message}`);
  }
}
