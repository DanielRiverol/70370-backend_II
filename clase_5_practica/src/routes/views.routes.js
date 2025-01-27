import { Router } from "express";
import { verifyToken } from "../utils/index.js";

const router = Router();
router.get("/", (req, res) => {
  res.render("home", { title: "HOME" });
});

router.get("/register", (req, res) => {
  res.render("register", { title: "REGISTER" });
});
router.get("/login", (req, res) => {
  res.render("login", { title: "LOGIN" });
});
router.get("/current", (req, res) => {
const token= req.signedCookies.tokenCookie
// vlaidar si existe
const userToken = verifyToken(token)
//validar user

req.user= userToken.user

  res.render("current", { title: "CURRENT" ,user:req.user});
});

export default router;
