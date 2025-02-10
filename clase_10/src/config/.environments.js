import { config } from "dotenv";

config();

export default {
    port:process.env.PORT,
    mongo_url:process.env.MONGO_URL
}