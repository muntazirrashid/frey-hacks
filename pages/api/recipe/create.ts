// importing model and connection instance
import connectDB from "../../../database/connect";
import recipeModel from "../../../database/models/recipe.model";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: Boolean;
  err?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == "POST") {
    try {
      // request body
      const { author, title, description, steps } = req.body;
      // connecting to the database
      await connectDB();
      // a new recipe model instance
      const recipeInstance = new recipeModel({
        author,
        title,
        description,
        steps,
      });
      // storing it to the database
      await recipeInstance.save();

      // json response object
      return res.json({ success: true });
    } catch (err: any) {
      // json error response object
      return res.json({ success: false, err });
    }
  }
};

export default handler;
