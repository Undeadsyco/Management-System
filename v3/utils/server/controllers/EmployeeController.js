import { employeeModel } from "../models";

export default class EmployeeController {
  static async getEmployee(params) {
    const { employeeId } = params;
    const employee = await employeeModel.findById(employeeId);
    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  static async getEmployees() {
    const employees = await employeeModel.find({});
    if (!employees) throw new Error('Employees not found');
    return employees;
  }

  static async createEmployee(body) {
    const createdeEmployee = await employeeModel.create(body.employee);
    if (!createdeEmployee) throw new Error('Employee not created');
    return createdeEmployee;
  }

  static async updateEmployee(params, body) {
    const { employeeId } = params;
    const updatedEmployee = await employeeModel.findByIdAndUpdate(employeeId, body);
    if (!updatedEmployee) throw new Error('Unable to update employee');
    return updatedEmployee;
  }

  static async setEmployeeAccounts(params, body) {
    const { employeeId } = params;
    const { key, value } = body;
    const employee = await employeeModel.findById(employeeId);
    if (!employee) throw new Error('Employee not found');
    employee.set(`accounts.${key}`, value);
    await employee.save();
    if (!employee.get(`accounts.${key}`)) throw new Error('Unable to set account');
    return employee;
  }

  static async findEmployeeBmsAccount(body) {
    const { username, password } = body;
    const [employee] = await employeeModel.find({
      $and: [
        { 'accounts.bms.username': username },
        { 'accounts.bms.password': password },
      ],
    });
    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  static async findEmployeePosAccount(body) {
    const { username, password } = body;
    const [employee] = await employeeModel.find({
      $and: [
        { 'accounts.pos.username': username },
        { 'accounts.pos.password': password },
      ],
    });
    if (!employee) throw new Error('Employee not found');
    return employee;
  }

  static async deleteEmployee(params) {
    const { employeeId } = params;
    const deletedEmployee = await employeeModel.findByIdAndDelete(employeeId);
    if (!deletedEmployee) throw new Error('Unable to delete employee');
    return deletedEmployee;
  }
}