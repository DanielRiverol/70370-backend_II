import { Router } from "express";

const router = Router();

router.get("/");
router.get("/:uid");
router.post("/");

export default router;
