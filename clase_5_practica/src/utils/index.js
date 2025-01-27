import { hashSync, compareSync, genSaltSync } from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = "anitalabalatina";

export const createHash = (password) => {
  const salt = genSaltSync(10);
  return hashSync(password, salt);
};

export const isValidPassword = (password, passwordHash) => {
  return compareSync(password, passwordHash);
};

export const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, { expiresIn: "5m" });
};

export const verifyToken=(token)=>{
  try {
    return jwt.verify(token,JWT_SECRET)
  } catch (error) {
    return null
  }
}