import { Router } from "express";
import userModel from "../models/user.model.js";
import { isValidPassword, generateToken } from "../utils/index.js";
import handlePolicies from "../middlewares/handle-policies.js";
handlePolicies;
const router = Router();

router.post("/login", handlePolicies(["PUBLIC"]), async (req, res) => {
  const { email, password } = req.body;
  try {
    const userFound = await userModel.findOne({ email });

    if (!userFound)
      return res.status(404).send({ error: "Usuario no encontrado" });

    if (!isValidPassword(password, userFound.password))
      return res.status(400).send({ error: "Credenciales no válidas" });

    const user = { ...userFound };
    delete user._doc.password;

    const token = generateToken(user._doc);
    res.status(200).send({ status: "Ok", token });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Error interno del servidor", error: error.message });
  }
});

export default router;
