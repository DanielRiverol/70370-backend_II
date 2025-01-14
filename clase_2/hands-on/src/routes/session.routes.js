import { Router } from "express";
import userModel from "../models/users.model.js";
const router = Router();

router.post("/register", async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  try {
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      return res.status(400).json({ message: "El correo ya existe" });
    }
     await userModel.create({
      first_name,
      last_name,
      email,
      password,
    });

    res.status(201).redirect("/login");
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.mesagge });
  }
});
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userExist = await userModel.findOne({ email: email });
    if (userExist) {
      if(userExist.password === password){
        req.session.user={
            first_name: userExist.first_name,
            last_name: userExist.last_name,
            email: userExist.email,
        }
        res.redirect('/profile')
      }else{
        res.status(401).send("{Pass invlido")
      }
    }
    
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", err: error.mesagge });
  }
});

export default router;
