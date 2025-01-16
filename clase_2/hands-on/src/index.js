import express from "express";
import { engine } from "express-handlebars";
import cookieParser from "cookie-parser";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import userRoutes from "./routes/session.routes.js";
import viewRoutes from "./routes/views.routes.js";
//settings
const app = express();
app.set("PORT", 3000);
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./src/views");

const secret = "miclave1234";
// const mongodbUri = "mongodb://127.0.0.1:27017/mongo-store";
const mongodbUri =
  "mongodb+srv://riverolsdaniel:DybItHw0pPzgCGIL@cluster0.13d8p.mongodb.net/curso-backewnd-70370?retryWrites=true&w=majority&appName=Cluster0";
// connect database
const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("Conexion exitosa");
  } catch (error) {
    console.log("Conexion NO exitosa", error);
  }
};

connectDb(mongodbUri);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: mongodbUri,
      ttl: 15,
    }),
    secret,
    resave: false,
    saveUninitialized: false,
  })
);
//routes
app.get("/", (req, res) => {
  res.render("home", { title: "HOME" });
});

app.use("/api/sessions", userRoutes);
app.use("/", viewRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
