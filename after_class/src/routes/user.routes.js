import { Router } from "express";
import userModel from "../models/user.model.js";
import handlePolicies from "../middlewares/handle-policies.js";
const router = Router();

router.get("/",handlePolicies(["ADMIN","PROFESOR","USER PREMIUM"]), async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).send({ status: "OK", users });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Error interno del servidor", error: error.message });
  }
});

router.get("/current",handlePolicies(["ADMIN","USER","USER PREMIUM"]), async (req, res) => {
  try {
    console.log(req.user);

    res.status(200).send({ status: "OK", user: req.user });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Error interno del servidor", error: error.message });
  }
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findOne({ _id: id });
    console.log("Usuario desde el req: ", req.user);

    res.status(200).send({ status: "OK", user: user });
  } catch (error) {
    res
      .status(500)
      .send({ status: "Error interno del servidor", error: error.message });
  }
});
export default router;
