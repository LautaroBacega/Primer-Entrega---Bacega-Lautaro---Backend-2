import { Schema, model } from "mongoose";

const petSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  age: { type: Number, required: true }
});

export const petModel = model("Pet", petSchema);