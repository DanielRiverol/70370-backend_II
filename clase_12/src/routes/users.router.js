import { Router } from "express";
import {
  getUserById,
  getUsers,
  createUser,
} from "../controllers/users.controller.js";
const router = Router();

router.get("/", getUsers);
router.get("/:uid", getUserById);
router.post("/", createUser);

export default router;
