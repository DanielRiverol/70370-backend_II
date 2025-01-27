import mongoose from "mongoose";

export default async function connectDb(uri){
    try {
        await mongoose.connect(uri)
        console.log('Database conectada correctamente');
        
    } catch (error) {
        console.log('Error al conectar la database'+ error.message);
        
    }
}