import express from "express";
import clientsRouter from "./routes/clients.routes.js";
//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use("/clients", clientsRouter);
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
