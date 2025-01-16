import { Router } from "express";
// PARTE 1
import userModel from "../models/users.model.js";
import { createHash, isValidPassword } from "../utils.js";

// PARTE 2
import passport from "passport";

const router = Router();

// router.post("/register", async (req, res) => {
//   const { first_name, last_name, email, password } = req.body;

//   try {
//     const userExist = await userModel.findOne({ email: email });
//     if (userExist) {
//       return res.status(400).json({ message: "El correo ya existe" });
//     }
//     await userModel.create({
//       first_name,
//       last_name,
//       email,
//       password : createHash(password),
//     });

//     res.status(201).redirect("/login");
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error interno del servidor", err: error.mesagge });
//   }
// });
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const userExist = await userModel.findOne({ email: email });
//     if (userExist) {
// const isValid =  isValidPassword(password,userExist.password)

//       if (isValid) {
//         req.session.user = {
//           first_name: userExist.first_name,
//           last_name: userExist.last_name,
//           email: userExist.email,
//         };
//         res.redirect("/profile");
//       } else {
//         res.status(401).send("Pass inválido");
//       }
//     }
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error interno del servidor", err: error.mesagge });
//   }
// });

// PARTE 2
router.post(
  "/register",
  passport.authenticate("register", { failureRedirect: "failregister" }),
  async (req, res) => {
    res.redirect("/login");
  }
);
router.get("/failregister", (req, res) => {
  res
    .status(400)
    .send({ status: "error", message: "Error al registrar el usuario" });
});
// recuperar password
router.post("/recupero", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) return res.status(400).send("campos requirdos");

    const userFound = await userModel.findOne({ email });

    const hashPass = createHash(password);
    userFound.password = hashPass;

    await userFound.save();
    res.redirect("/login");
  } catch (error) {}
});
// despues
router.get("/current", (req, res) => {
  if (!req.session.user) return res.redirect("/login");
  res.send("Hola");
});
export default router;
