import express from "express";
import userRoutes from "./routes/user.routes.js";
//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

//routes
app.get("/", (req, res) => {
//   res.json({ title: "Home Page" });
res.sendFile('/index.html')
});
app.use("/", userRoutes);
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
