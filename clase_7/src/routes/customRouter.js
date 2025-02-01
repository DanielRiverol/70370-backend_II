import { Router } from "express";
import jwt from "jsonwebtoken";
class CustomRouter {
  constructor() {
    this.router = Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }
  get(path, policies, ...callbacks) {
    this.router.get(
      path,
      this.generateCustomResponses,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }
  post(path, policies, ...callbacks) {
    this.router.post(
      path,
      this.handlePolicies(policies),
      this.applyCallbacks(callbacks)
    );
  }

  applyCallbacks(callbacks) {
    return callbacks.map((callback) => async (req, res, next) => {
      try {
        await callback(req, res, next);
      } catch (error) {
        res
          .status(500)
          .json({ status: "error", message: "Error interno del servidor" });
      }
    });
  }
  generateCustomResponses(req, res, next) {
    res.sendSuccess = (payload) => res.json({ status: "SUCCESS", payload });
    res.sendError = (error) => res.status(500).json({ status: "ERROR", error });

    next();
  }
  handlePolicies = (policies) => (req, res, next) => {
    if (policies[0] === "PUBLIC") return next();
    const authHeaders = req.headers.authorization;
    if (!authHeaders)
      return res.status(401).json({ status: "error", error: "No autorizado" });
    const token = authHeaders.split(" ")[1]; //Bearer 87623876t18934kjhfkjhfd
    let user = jwt.verify(token, "codigo");
    if (!policies.includes(user.role.toUpperCase()))
      return res
        .status(403)
        .json({ status: "error", message: "No tienes los permisos correctos" });
    req.user = user;
    next();
  };
}

export default CustomRouter;
