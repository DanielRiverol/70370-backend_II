import express from "express";
import env from "./config/env.js";
import userRoutes from "./routes/users.router.js";
import toyRoutes from "./routes/toys.router.js";

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
app.use("/api/users", userRoutes);
app.use("/api/toys", toyRoutes);
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
