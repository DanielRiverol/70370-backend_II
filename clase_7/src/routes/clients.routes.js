import { Router } from "express";

const router = Router();
const clients = [
  { id: "1234", name: "José Pérez", email: "jose@example.com" },
  { id: "5678", name: "Ana López", email: "ana@example.com" },
];
// ruta comun
// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({ message: `Cliente con id: ${id}` });
// });

// ruta con regex
// router.get("/:id([0-9]{4,10})", (req, res) => {
//   const { id } = req.params;

//   res.status(200).json({ message: `Cliente con id: ${id}` });
// });
// router.get("/:id", (req, res) => {
//   const { id } = req.params;

//   res
//     .status(400)
//     .json({
//       message: `No se encuentra el Cliente con id: ${id}. Debe tener entre 4 y 10 digitos`,
//     });
// });
// otra opcion
// router.get("/:id", (req, res) => {
//   const { id } = req.params;
//   if (!/^[0-9]{4,6}$/.test(id)) {
//     return res
//       .status(400)
//       .json({ error: "El ID debe ser un número de 4 a 6 dígitos" });
//   }
//   res.status(200).json({ message: "Cliente con id: ", id });
// });

router.get("/nombre/:nombre", (req, res) => {
  const nombre = req.params.nombre;

  res.status(200).json({ message: "Cliente con nombre: ", nombre });
});

//router.param

router.param("id", (req, res, next, id) => {
  console.log(id);

  const regex = /^[0-9]{4,6}$/;
  if (!regex.test(id)) {
    return res
      .status(400)
      .json({ error: "El ID debe ser un número de 4 a 6 dígitos" });
  }

  const client = clients.find((c) => c.id === id);
  if (!client) {
    return res.status(404).json({ error: "Cliente no encontrado---" });
  }

  req.client = client;
  next();
});
router.get("/:id", (req, res) => {
  res.json(req.client);
});
router.get("/nombre/:nombre", (req, res) => {
  res.json(req.client);
});
// manejo de rutas inexistentes
router.get("*", (req, res) => {
  res.status(404).json({ message: "Recurso no encontrado" });
});

export default router;
