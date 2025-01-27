import { hashSync, genSaltSync, compareSync } from "bcrypt";

export const hashPassword = (password) => hashSync(password, genSaltSync(10));

export const isValidPassword = (password, hash) => compareSync(password, hash);
