import { config } from "dotenv";
import program from "../utils/commader.js";
// config();
// const environment= ""
// config({path: environment === "PRODUCTION" ? "./.env.production":"./.env.development"})

const { mode } = program.opts();
config({ path: `./.env.${mode}` });
export default {
  port: process.env.PORT,
  mongodb_url: process.env.MONGODB_URL,
};
