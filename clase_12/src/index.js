import express from "express";
import config from "./config/config.js";
import cors from "cors";
import userRoutes from "./routes/users.router.js";
import orderRoutes from "./routes/orders.router.js";
import businessRoutes from "./routes/business.router.js";
import connectDb from "./database/database.js";
const app = express();

// settings
app.set("PORT", config.port || 4000);
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/business", businessRoutes);

//database connection
connectDb(config.mongodb_url);
// listener
app.listen(app.get("PORT"), () => {
  console.log(`Server running on http://localhost:${app.get("PORT")}`);
});
