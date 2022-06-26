// importing next/router
import { useRouter } from "next/router";

// importing model and connection instance
import connectDB from "../../../../database/connect";
import recipeModel from "../../../../database/models/recipe.model";

import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success?: Boolean;
  recipe?: any;
  err?: string;
  rId?: string | string[] | undefined;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  if (req.method == "GET") {
    try {
      // query parameters
      const { rId } = req.query;
      // connecting to the database
      await connectDB();
      // finding recipe model
      const recipe = await recipeModel.findOne({ _id: rId });
      // json response object
      return res.json({ recipe });
    } catch (err: any) {
      // json error response object
      return res.json({ success: false, err });
    }
  }
};

export default handler;
