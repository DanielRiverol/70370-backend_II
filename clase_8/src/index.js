import express from "express";
import connectDb from "./database/db.js";
//settings
const app = express();
app.set("PORT", 3000);
const dbUrl = "mongodb://localhost:27017/users";

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
