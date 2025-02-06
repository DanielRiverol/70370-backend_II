import { Router } from "express";
const router = Router();
// import users from "../data/users.data.js";
// router.get("/", (req, res) => {
//   const data = users;
//   res.status(200).json({ message: "OK", payload: data });
// });

import userController from "../controllers/users.controller.js";
router.get("/", userController.getUsersAll);

router.get("/:id", userController.getUserById);
router.delete("/:id", userController.deleteUser);

router.post("/", userController.createUser);

export default router;
