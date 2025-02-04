import express from "express";
import connectDb from "./database/db.js";
import entorno from "./config/env.js";
console.log(entorno.port);

//settings
const app = express();
app.set("PORT", entorno.port || 3000);
const dbUrl = entorno.mongodb_url || "mongodb://localhost:27017/users";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

//listeners
connectDb(dbUrl);
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
