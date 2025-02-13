import { Schema, model } from "mongoose";

const ContactSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

export default model("Contact", ContactSchema);
