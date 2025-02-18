import { Router } from "express";
import {
  getOrders,
  getOrderById,
  createOrder,
  resolveOrder,
} from "../controllers/orders.controller.js";
const router = Router();

router.get("/", getOrders);
router.get("/:oid", getOrderById);
router.post("/", createOrder);
router.put("/:oid/resolve", resolveOrder);

export default router;
