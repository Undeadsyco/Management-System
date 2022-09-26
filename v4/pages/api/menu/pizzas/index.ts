import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import connectToDb from "../../../../lib/mongodb";
import { PizzaController } from "../../../../utils/controllers";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req
  const connection = await connectToDb();
  if (!connection) throw new Error('unable to connect to database');

  let pizzas = [];
  switch (method) {
    case "GET":
      pizzas = await PizzaController.getAllPizzas();
      res.status(200).send('successful get');
      break;
    case "POST":
      pizzas = await PizzaController.createPizzas(body.pizzas);
      res.status(200).json({ pizzas });
      break;
    case "PUT":
      res.send('successful put');
      break;
    case "DELETE":
      res.send('successful delete');
      break;
    default:
      res.status(404).send('unfound');
      break;
  }
}

export default handler;