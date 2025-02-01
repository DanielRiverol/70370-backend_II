import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  email: String,
  password: String,
  role: { type: String ,default:"user"},
});

export default model("User", UserSchema);
