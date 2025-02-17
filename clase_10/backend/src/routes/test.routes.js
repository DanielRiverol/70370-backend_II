import { Router } from "express";

const router = Router();
const users = ["Juan", "Paco", "Pedro"];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const { nombre } = req.body;
  console.log(name);

  users.push(name);
  res.send({ message: "Usuario agregado con exito", users });
});



export default router;
