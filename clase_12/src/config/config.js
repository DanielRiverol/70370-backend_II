import { config } from "dotenv";

config();
export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
};
