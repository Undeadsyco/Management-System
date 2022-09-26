import axios from 'axios';

export default {
  getSizes: async () => {
    const req = await axios.get('/v1/pos/menu/dough');
    const res = await req.data;
    res.pop();
    return res;
  },
  getPizzasBySize: async (id) => {
    const req = await axios.get(`/v1/pos/menu/dough/${id}`);
    const res = await req.data;
    return res[0];
  },
  getStuffedPizzas: async () => {
    const req = await axios.get('/v1/pos/menu/stuffed');
    const res = await req.data;
    return res[0].pizzas;
  },
  getXlPizzas: async () => {
    const req = await axios.get('/v1/pos/menu/xl');
    const res = await req.data;
    return res[0].pizzas;
  },
  getPizzaById: async (size, name) => {
    const req = await axios.get(`/v1/pos/menu/${size}/${name}`);
    const res = await req.data;
    return res[0].pizzas[0];
  },
  getToppings: async () => {
    const req = await axios.get('/v1/pos/menu/toppings');
    const res = req.data;
    return res;
  },
};
