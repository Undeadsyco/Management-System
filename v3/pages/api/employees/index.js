import { EmployeeController } from '../../../utils/server/controllers';
import connectToDb from '../../../lib/mongodb';

export default async function handler(req, res) {
  try {
    const { method, params, body } = req;

    const connection = await connectToDb();
    if (!connection) throw new Error("Error connecting to database");

    switch (method) {
      case 'GET':
        const employees = await EmployeeController.getEmployees();
        res.status(200).json({ employees });
        break;
      case 'POST': 
        const newEmployee = await EmployeeController.createEmployee(body);
        res.status(200).json({ employee: newEmployee });
        break;
      default:
        throw new Error('route not found');
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}