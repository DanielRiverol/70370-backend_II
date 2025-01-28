import { Router } from "express";
import { createToken } from "../utils/index.js";

const router = Router();

const users = [{ id: 1, email: "saul@mail.com", password: "password123" }];

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const userFound = users.find(function (user) {
    return user.email === email && user.password === password;
  });

  console.log(userFound);
  const user = { ...userFound };
  delete user.password;

  if (!userFound) return res.status(401).send("Credenciales invalidas");

  let token = createToken(user);
  //   res.status(200).send({ message: "Login exitoso", token: token });
  res
    .cookie("authCookie", token, { maxAge: 60 * 60 * 1000,httpOnly:true})
    .send({ message: "Login exitoso" });
});

export default router;
