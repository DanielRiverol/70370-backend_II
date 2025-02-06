import { Router } from "express";
import toysController from "../controllers/toys.controller.js";
const router = Router();
router.get("/",toysController.getToysAll);
// terminar el crud
export default router;