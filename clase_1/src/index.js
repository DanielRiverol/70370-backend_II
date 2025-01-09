import express from "express";
import cookieParser from "cookie-parser";
import session from "express-session";
//settings
const app = express();
app.set("PORT", 3000);
const firmaCookie = "Star-trek";
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(firmaCookie)); //firmar Cookie
app.use(
  session({
    secret: "Palabra-secreta",
    resave: false,
    saveUninitialized: false,
  })
);

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

// routes cookies
app.get("/set-cookie", (req, res) => {
  res.cookie("MyCookie", "Hola soy una galleta", { maxAge: 10000 });
  res.send("Cookie seteada");
});

app.get("/get-cookie", (req, res) => {
  const myCookie = req.cookies.MyCookie;
  res.send(myCookie);
});

app.get("/delete-cookie", (req, res) => {
  res.clearCookie("MyCookie");
  res.send("Cookie removida");
});

//cookies firmadas
app.get("/set-signed-cookie", (req, res) => {
  res.cookie("MySignedCookie", "Hola soy una galleta FIRMADA", {
    signed: true,
  });
  res.send("Cookie firmada seteada");
});

app.get("/get-signed-cookie", (req, res) => {
  const myCookie = req.signedCookies.MySignedCookie;
  console.log(req.signedCookies.MySignedCookie);

  res.send(req.signedCookies.MySignedCookie);
});

app.get("/delete-signed-cookie", (req, res) => {
  res.clearCookie("MySignedCookie");
  res.send("Cookie FIRMADA removida");
});
// SESSIONS
app.get("/session", (req, res) => {
  if (req.session.counter) {
    req.session.counter++;
    res.send(`Visitaste la pagina ${req.session.counter} veces`);
  } else {
    req.session.counter = 1;
    res.send("Bienvenido a la pagina");
  }
});

// login

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  if (username !== "jacinto" || password !== "lopez123") {
    return res.status(401).send("Usuario o contraseña incorrectos");
  }
  req.session.user = username;
  //   req.session.admin = false;
  req.session.role = "estudiante";
  res.send("Login exitoso");
});
// middleware auth
const auth = (req, res, next) => {
  if (req.session?.role === "admin") {
    next();
  } else {
    res.status(401).send("No estas autorizado");
  }
};

app.get("/privado", auth, (req, res) => {
  res.send(`bienvenido ${req.session.user}`);
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
