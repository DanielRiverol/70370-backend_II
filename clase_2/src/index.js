import express from "express";
import session from "express-session";
import cookieParser from "cookie-parser";
import FileStorage from "session-file-store";
import MongoStore from "connect-mongo";
//settings
const app = express();
app.set("PORT", 3000);
const fileStorage = FileStorage(session);
const secret = "miclave1234";
// const mongodbUri = "mongodb://127.0.0.1:27017/mongo-store";
const mongodbUri =
  "mongodb+srv://riverolsdaniel:DybItHw0pPzgCGIL@cluster0.13d8p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// Parte 1 FileStorage
// app.use(
//   session({
//     store: new fileStorage({ path: "./sessions", ttl: 100, retries: 0 }),
//     secret,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
//Parte 2 Db Storage
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: mongodbUri,
      ttl:15
    }),
    secret,
    resave: false,
    saveUninitialized: false,
  })
);

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});
// login
app.get("/login", (req, res) => {
  //   req.session.user= req.query.user
  const user = req.query.user;
  req.session.user = user;
  //   res.send(req.cookies);
  res.redirect("/user");
});

app.get("/user", (req, res) => {
  // const userSession = req.session?.user;
  if (req.session?.user) {
    return res.send(`El usuario registareado es ${req.session.user}`);
  }

  res.send("No hay usuario registrado");
});
//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
