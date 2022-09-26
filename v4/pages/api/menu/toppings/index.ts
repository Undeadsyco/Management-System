import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { ToppingController } from "../../../../utils/controllers";
import connectToDb from '../../../../lib/mongodb';

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const connection = await connectToDb();
    if (!connection) throw new Error('unable to connect to database');
    const { method, body } = req;
    console.log('in topping route api handler', method)
    switch (method) {
      case 'GET':
        const toppingList = await ToppingController.getAllToppings();
        if (!toppingList) throw new Error('unable to get toppings');
        res.status(200).json({ toppings: toppingList });
        break;
      case 'POST':
        const { success, errors } = await ToppingController.createToppings(body.toppings);
        if (success) {
          res.status(201).json({ message: 'success' });
        }
        else res.status(500).json({ message: 'unable to create toppings in database', errors })
        break;
      case 'PUT':
        break;
      case 'DELETE':
        break;
      default:
        res.status(404);
        break;
    }
  } catch (error) {
    console.log('error in topping api route', error.message);
    const message = `error in topping api route ${error}`;
    res.status(500).json({ message })
  }
}

export default handler;