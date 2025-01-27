import { Router } from "express";
import usersModel from "../models/users.model.js";
import { isValidPassword, createHash, generateToken } from "../utils/index.js";
const router = Router();

router.get("/", async (req, res) => {
  try {
    const users = await usersModel.find();

    // validar si hay usuarios

    res.status(200).json({ status: "Ok", payload: users });
  } catch (error) {
    res.status(500).json({ status: "Error ", error: error.message });
  }
});

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password, role } = req.body;
  try {
    // validar si hay que vengan los campos
    const newUser = {
      first_name,
      last_name,
      email,
      password: createHash(password),
    };

    if (role) newUser.role = role;

    await usersModel.create(newUser);
    // res.status(201).json({ status: "Ok", payload: newUser });
    res.redirect("/login");
  } catch (error) {
    res.status(500).json({ status: "Error ", error: error.message });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    // validar si hay que vengan los campos
    const userFound = await usersModel.findOne({ email });

    // validar que pasa si o existe

    const isvalid = isValidPassword(password, userFound.password);
    // validar si el paass no coincide

    const user = userFound._doc;
    delete user.password;
    console.log(user);
    // generar token

    const token = generateToken(user);
    console.log(token);
    res.cookie("tokenCookie", token, { signed: true });

    // res.status(200).json({ status: "Ok" });
    res.redirect("/current");
  } catch (error) {
    res.status(500).json({ status: "Error ", error: error.message });
  }
});

export default router;
