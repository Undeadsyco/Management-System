import axios from 'axios';

const action = {
  getInventoryStats: async () => {
    const req = await axios.get('/management_system/inventory_actions/get_stats');
    const res = await req.data;
    return res.inventory;
  },
  submitStats: async (body) => {
    const req = await axios.post('/management_system/inventory_actions/submit_stats', body);
    const res = await req.data;
    if (req.status !== 200) return { success: false };
    return { success: true, ...res };
  },
  getPreviousStats: async (date) => {
    const req = await axios.get(`/management_system/inventory_actions/get_previous_stats/${date}`);
    const res = await req.data;
    console.log(res);
    return res;
  },
};

export default action;
