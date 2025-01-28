import jwt from "jsonwebtoken";

export const createToken = (user,expire) =>
  jwt.sign(user, "clave-secreta", { expiresIn: expire });
