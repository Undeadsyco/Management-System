import connectToDb from '../../../../lib/mongodb';
import { EmployeeController } from '../../../../utils/server/controllers';

export default async function handler(req, res) {
  const { query, body, method } = req;

  const connection = await connectToDb();
  if (!connection) throw new Error("Error connecting to database");

  switch (method) {
    case "PUT":
      const employee = await EmployeeController.setEmployeeAccounts(query, body);
      res.status(200).json({ employee });
      break;
    default:
      res.status(400).json({ error: "route not found" });
      break;
  }
}