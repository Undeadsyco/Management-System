import { EmployeeController } from '../../../utils/server/controllers'

export default async function handler(req, res) {
  const { method, query, body } = req;
  try {
    switch (method) {
      case 'GET':
        const employee = await EmployeeController.getEmployee(query);
        res.status(200).json({ employee });
        break;
      case 'PUT':
        const updatedEmployee = await EmployeeController.updateEmployee(query, body);
        res.status(200).json({ employee: updatedEmployee });
        break;
      case 'DELETE':
        const deletedEmployee = await EmployeeController.deleteEmployee(query);
        res.status(200).json({ employee: deletedEmployee });
        break;
      default:
        throw new Error('route not found');
    }
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}