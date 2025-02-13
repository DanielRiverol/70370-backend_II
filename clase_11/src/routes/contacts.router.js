import { Router } from "express";
// import Contacts from "../DAOs/memory/memory.dao.js";
// import Contacts from "../DAOs/mongo/mongo.dao.js";
// import Contacts from "../DAOs/factory.js";
// import ContactDTO from "../DAOs/DTOs/contacts.dto.js";
import { contactServices } from "../repositories/index.js";
const router = Router();

// const contactServices = new Contacts();
router.get("/", (req, res) => {
  const result = contactServices.getContacts();
  res.status(200).json({ status: "OK", payload: result });
});
router.post("/", async (req, res) => {
  // const {name, email, phone}=req.body
  const { nombre, correo, telefono } = req.body;
  // const formatContact = new ContactDTO({ nombre, correo, telefono });
  const result = await contactServices.createContact({
    nombre,
    correo,
    telefono,
  });
  res.status(200).json({ status: "OK", payload: result });
});
export default router;
