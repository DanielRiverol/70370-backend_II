import { Router } from "express";
import userModel from "../models/user.model.js";
// import express from 'express'
// const router = express.Router()
const router = Router();

router.get("/", (req, res) => {
  res.send("Usuarios");
});
router.post("/", async (req, res) => {
  const { name, age, email } = req.body;

  try {
    const newUser = await userModel.create({ name, age, email });
    res.json({ estado: "ok", payload: newUser });
  } catch (error) {
    res.send("error");
  }
});

// get/:id put delete

export default router;
