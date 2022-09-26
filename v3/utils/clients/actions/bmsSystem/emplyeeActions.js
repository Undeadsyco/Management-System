import requests from '../index';
const { makeGetRequest, makePostRequest, makePutRequest } = requests;

const actions = {
  getEmployeeList: async () => {
    const { employees } = await makeGetRequest("/api/employees", {});
    return employees;
  },
  getEmployee: async (employeeId) => {
    const { employee } = await makeGetRequest("/api/employees", { employeeId });
    return employee;
  },
  createEmployee: async (employee) => {
    console.log('in actons', employee)
    const { employee: createdEmployee } = await makePostRequest("/api/employees", { employee });
    return createdEmployee;
  },
  addEmployeeAccount: async (employeeId, body) => {
    const { employee } = await makePutRequest("/api/employees/account", { employeeId }, body );
    return employee;
  }
}

export default actions;