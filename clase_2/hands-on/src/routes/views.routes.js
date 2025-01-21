import { Router } from "express";
import passport from "passport";

const router = Router();
router.get("/register", (req, res) => {
  res.render("register", { title: "REGISTER" });
});
router.get("/login", (req, res) => {
  res.render("login", { title: "LOGIN" });
});
router.get("/profile", (req, res) => {
  // console.log(req.session.user);
  const user = { ...req.user }; //passport
  console.log(user);

  res.render("profile", { title: "PROFILE", user: user._doc });
});
//google
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "/profile",
    failureRedirect: "/login",
  })
);

// recupero
router.get("/recupero", (req, res) => {
  res.render("recupero", { title: "Recuperar pass" });
});

export default router;
