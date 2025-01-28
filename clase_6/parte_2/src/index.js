import express from "express";
import cookieParser from "cookie-parser";
import passport from "passport";
import initializePassport from "./config/passport.config.js";
import userRoutes from './routes/users.routes.js'
import connectDb from "./config/database.js";
//settings
const app = express();
app.set("PORT", 3000);
const uri = "mongodb://127.0.0.1:27017/database";
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//passport
initializePassport();
app.use(passport.initialize());
// app.use(passport.session());
//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
app.use('/',userRoutes)
//listeners
connectDb(uri);
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
