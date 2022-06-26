// importing model and connection instance
import connectDB from "../../../database/connect";
import recipeModel from "../../../database/models/recipe.model";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success: Boolean;
  recipes?: any;
  err?: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == "GET") {
    try {
      // request body
      const { author, title, description, steps } = req.body;
      // connecting to the database
      await connectDB();
      // finding recipe model
      const recipes = await recipeModel.find({});
      // json response object
      return res.status(200).json(recipes).end();
    } catch (err: any) {
      // json error response object
      return res.status(404).send(err);
    }
  }
};

export default handler;
