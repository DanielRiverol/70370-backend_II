import express from "express";
import env from "./config/envs.js";
import testRoutes from './routes/test.routes.js'
// import MongoDBSingleton from "./database/db.js";
import cors from 'cors'
//settings
const app = express();
app.set("PORT", env.port || 4000);
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: ["http://127.0.0.1:5500", "http://127.0.0.1:5501"],//0.0.0.0.0:0
};
// app.use(cors(corsOptions))
//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use('/test',cors(corsOptions), testRoutes)

//listeners
// MongoDBSingleton.getInstance()
// MongoDBSingleton.getInstance()
// MongoDBSingleton.getInstance()
// MongoDBSingleton.getInstance()

app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
