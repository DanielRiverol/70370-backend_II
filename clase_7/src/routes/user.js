import CustomRouter from "./customRouter.js";
import jwt from "jsonwebtoken";
export default class UserRouter extends CustomRouter {
  init() {
    this.post("/login", ["PUBLIC"], (req, res) => {
      let user = { email: req.body.email, role: "user" };
      let token = jwt.sign(user, "codigo", { expiresIn: "24h" });
      res.sendSuccess({ message: "Listado de clientes", user: token });
    });
    this.get("/", ["PUBLIC"], (req, res) => {
      res.sendSuccess("Hola tarola");
    });
    this.get("/current", ["USER"], (req, res) => {
      res.sendSuccess(req.user);
    });
  }
}
