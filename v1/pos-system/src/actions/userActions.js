import axios from 'axios';

const baseUrl = '/v1/pos/employee';

export default {
  getAllEmployees: async () => {
    const req = await axios.get(`${baseUrl}/all/employees`);
    const res = req.data;
    return res.data;
  },
  login: async (body) => {
    const req = await axios.post(`${baseUrl}/login`, { pin: body.pin });
    const res = await req.data;
    return res;
  },
  clockIn: async (empId) => {
    const req = await axios.post(`${baseUrl}/clock-in`, { empId });
    const res = await req.data;
    return res;
  },
  clockOut: async (empId) => {
    const req = await axios.post(`${baseUrl}/clock-out`, { empId });
    const res = await req.data;
    return res;
  },
  breakOut: async (empId) => {
    const req = await axios.post(`${baseUrl}/break-out`, { empId });
    const res = await req.data;
    return res;
  },
  breakIn: async (empId) => {
    const req = await axios.post(`${baseUrl}/break-in`, { empId });
    const res = await req.data;
    return res;
  },
  changePassword: async (user, newPassword) => {
    const { Employee_Id: empId, Password } = user;
    const req = await axios.put(`${baseUrl}/update-password`, {
      empId,
      Password,
      newPassword,
    });
    const res = req.data;
    return res;
  },
  clearPassword: async (empId) => {
    const req = await axios.put(`${baseUrl}/clear-password`, { empId });
    const res = await req.data;
    return res;
  },
  getTimes: async () => {
    const req = await axios.get(`${baseUrl}/times`);
    const res = await req.data;
    return res.data;
  },
  changeTime: async (body) => {
    const req = await axios.put(`${baseUrl}/change-time`, body);
    const res = await req.data;
    return res;
  },
  getBreakTimes: async () => {
    const req = await axios.get(`${baseUrl}/break-times`);
    const res = await req.data;
    return res.data;
  },
};
