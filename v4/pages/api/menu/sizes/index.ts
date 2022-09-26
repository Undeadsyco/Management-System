import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { DoughController } from "../../../../utils/controllers";
import connectToDb from "../../../../lib/mongodb";
import { dough } from "../../../../utils/models/dough";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  const connection = await connectToDb();
  if (!connection) throw new Error('unable to connect to database');

  switch (method) {
    case 'GET':
      const sizes: dough<string>[] = await DoughController.getSizes();
      res.status(200).json({ sizes });
      break;
    case 'POST':
      const createdDough: dough<string>[] = await DoughController.createSizes(body.dough);
      res.status(200).json({ sizes: createdDough });
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      res.status(404);
  }
}

export default handler;