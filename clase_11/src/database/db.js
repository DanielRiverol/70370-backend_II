import mongoose from "mongoose";
async function connectDB(uri) {
  try {
    await mongoose.connect(uri);
    console.log(`Conexión establecida correctamente`);
  } catch (error) {
    console.log(
      `No fue posible conectarse a la base de datos ${error.message}`
    );
  }
}
export default connectDB;
