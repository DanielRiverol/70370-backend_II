import express from "express";
import mongoose from "mongoose";

import userRoutes from "./routes/user.routes.js";
// settings
const app = express();
app.set("PORT", 3000);

mongoose.connect("mongodb://127.0.0.1:27017/class-zero");

// middelwares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get("/", (req, res) => {
  res.send("inicio");
});

app.use("/api/users", userRoutes);

// listen
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
}); // app.listen(3000)
