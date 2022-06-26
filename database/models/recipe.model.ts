import mongoose from "mongoose";

interface recipeSchemaType {
  image: string;
  title: string;
  description: string;
  steps: string[];
}

const recipeSchema = new mongoose.Schema<recipeSchemaType>({
  image: { type: String, required: true },
  title: { type: String, required: true, unique: false },
  description: { type: String, required: true, unique: false },
  steps: { type: [String], required: true, unique: false },
});

const Recipe = mongoose.models.Recipe
  ? mongoose.models.Recipe
  : mongoose.model("Recipe", recipeSchema);

export default Recipe;
