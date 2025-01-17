import bcrypt from "bcrypt";

export const createHash = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(10));

export const isValidPassword = async (password, hash) =>
  await bcrypt.compare(password, hash); // async await compare
