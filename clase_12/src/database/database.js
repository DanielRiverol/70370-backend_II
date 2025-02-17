import mongoose from "mongoose";

export default async function connectDb(mongodb_url){
    try {
        await mongoose.connect(mongodb_url)
        console.log(`Database is connected`);
    } catch (error) {
        console.log(error.message);
        
    }
}