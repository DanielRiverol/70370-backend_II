import mongoose from "mongoose";
import env from "../config/envs.js";

class MongoDBSingleton {
  static #instance;
  static getInstance() {
    if (!MongoDBSingleton.#instance) {
      mongoose.connect(env.mongo_url);
      MongoDBSingleton.#instance = mongoose.connection;
      console.log("Conexion establecida");
    } else {
      console.log("Conexion YAAAAAAAA establecida");
    }
    return MongoDBSingleton.#instance
  }
}
export default MongoDBSingleton;
