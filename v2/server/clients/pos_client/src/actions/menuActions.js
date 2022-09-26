import axios from 'axios';

const actions = {
  getSizes: async () => {
    const req = axios.get('/pos_system/menu_actions/get_sizes');
    const res = (await req).data;
    return res.doughList;
  },
  getPizzas: async (doughId) => {
    const req = await axios.get(`/pos_system/menu_actions/get_pizzas_by_dough_id/${doughId}`);
    const res = await req.data;
    return res.pizzaList;
  },
  getStuffedPizzas: async () => {
    const req = await axios.get('/pos_system/menu_actions/get_stuffed');
    const res = await req.data;
    return res.pizzaList;
  },
  getToppings: async () => {
    const req = await axios.get('/pos_system/menu_actions/get_toppings');
    const res = await req.data;
    return res.toppingList;
  },
  getPizzaById: async (pId, dId) => {
    const req = await axios.get(`/pos_system/menu_actions/get_pizza_by_id/${pId}/${dId}`);
    const res = await req.data;
    return res[0];
  },
};

export default actions;
