import express from "express";
import env from "./config/envs.js";
import testRoutes from './routes/test.routes.js'
import MongoDBSingleton from "./database/db.js";
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
app.use('/test', testRoutes)

//listeners
MongoDBSingleton.getInstance()
// MongoDBSingleton.getInstance()
// MongoDBSingleton.getInstance()
// MongoDBSingleton.getInstance()

app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
