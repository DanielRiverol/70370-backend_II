import { hashSync, genSaltSync, compareSync } from "bcrypt";
import jwt from "jsonwebtoken";

export const createToken = (user) =>
  jwt.sign(user, "clave-secreta", { expiresIn: '24h' });
export const hashPassword = (password) => hashSync(password, genSaltSync(10));

export const isValidPassword = (password, hash) => compareSync(password, hash);
