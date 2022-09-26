import axios from 'axios';

const baseUrl = '/v1/pos/inventory';

export default {
  getClosedWalkins: async () => {
    const req = await axios.get(`${baseUrl}/closed-orders`);
    const res = req.data;
    return res;
  },
  getOrderById: async (id) => {
    const req = await axios.get(`${baseUrl}/closed-order/id/${id}`);
    const res = req.data;
    return res;
  },
  getReport: async () => {
    const req = await axios.get(`${baseUrl}/report`);
    const res = await req.data;
    return res;
  },
  getRegisters: async () => {
    const req = await axios.get(`${baseUrl}/registers`);
    const res = await req.data;
    return res.data;
  },
  assignRegister: async (empId, id) => {
    const req = await axios.put(`${baseUrl}/assign/register`, { empId, id });
    const res = await req.data;
    return res.data;
  },
};
