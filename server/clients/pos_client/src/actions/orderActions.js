import axios from 'axios';

const actions = {
  submitOrder: async (body) => {
    const req = await axios.post('/pos_system/order_actions/submit_order', body);
    const res = await req.data;
    return res;
  },
};

export default actions;
