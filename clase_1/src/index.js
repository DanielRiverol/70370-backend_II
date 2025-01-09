import express from "express";
import cookieParser from "cookie-parser";
//settings
const app = express();
app.set("PORT", 3000);
const firmaCookie = "Star-trek";
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(firmaCookie)); //firmar Cookie

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

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port ${app.get("PORT")}`);
});
