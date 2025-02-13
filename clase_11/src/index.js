import express from "express";
import env from "./config/env.js";
// import connectDB from "./database/db.js";
import contactRouter from "./routes/contacts.router.js";

//settings
const app = express();
app.set("PORT", env.port || 4000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/contacts", contactRouter);
//listeners
// connectDB(env.mongodb_uri);
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
