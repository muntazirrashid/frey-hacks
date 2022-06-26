import { Schema, model } from "mongoose";

interface recipeSchemaType {
  author: string;
  title: string;
  description: string;
  steps: string[];
}

const recipeSchema = new Schema<recipeSchemaType>({
  author: { type: String, required: true, unique: true },
  title: { type: String, required: true, unique: false },
  description: { type: String, required: true, unique: false },
  steps: { type: [String], required: true, unique: false },
});

const recipeModel = model("recipe", recipeSchema);

export default recipeModel;
