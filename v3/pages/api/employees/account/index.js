import connectToDb from '../../../../lib/mongodb';
import { EmployeeController } from '../../../../utils/server/controllers';
import Auth from '../../../../utils/server/functions/authorization';

export default async function handler(req, res) {
  try {
    const { query, body, method, url } = req;

  const connection = await connectToDb();
  if (!connection) throw new Error("Error connecting to database");

  switch (method) {
    case "POST":
      if (query.type === "bms") {
        const employee = await EmployeeController.findEmployeeBmsAccount(body);
        const bmsToken = await Auth.sign("bms", employee);
        res.status(200).json({ employee }).cookie('bmsToken', bmsToken);
      }
      if (query.type === "pos") {
        const employee = await EmployeeController.findEmployeePosAccount(body);
        const posToken = await Auth.sign("pos", employee);
        res.status(200).json({ employee }).cookie('posToken', posToken);
      }
      break;
    default:
      throw new Error("route not found");
  }
  } catch (error) {
    console.log('error in bms route', error.message);
    res.status(400).json({ error: error.message });
  }
}