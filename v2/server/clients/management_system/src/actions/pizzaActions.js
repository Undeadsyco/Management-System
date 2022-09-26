/* eslint-disable no-alert */
import axios from 'axios';

const actions = {
  doughActions: {
    addDough: async (body) => {
      const req = await axios.post('/management_system/dough_actions/add_new', body);
      const res = await req.data;
      alert(res.message);
      return res.result;
    },
    getDoughList: async () => {
      const req = await axios.get('/management_system/dough_actions/get_all');
      const res = await req.data;
      return res.doughList;
    },
    updateDough: async (body) => {
      const req = await axios.put('/management_system/dough_actions/update_one', body);
      const res = await req.data;
      alert(res.message);
      return res.data;
    },
    deleteDough: async (id) => {
      const req = await axios.delete(`/management_system/dough_actions/delete_one/${id}`);
      const res = req.data;
      alert(res.message);
      return res.data;
    },
  },
  sectionActions: {
    addSection: async (body) => {
      const req = await axios.post('/management_system/section_actions/add_new', body);
      const res = await req.data;
      alert(res.message);
      return res.data;
    },
    getSections: async () => {
      const req = await axios.get('/management_system/section_actions/get_all');
      const res = await req.data;
      return res.sectionList;
    },
    updateSection: async (body) => {
      const req = await axios.put('/management_system/section_actions/update_one', body);
      const res = await req.data;
      alert(res.message);
      console.log(res);
      return res.data;
    },
    deleteSection: async (id) => {
      const req = await axios.delete(`/management_system/section_actions/delete_one/${id}`);
      const res = await req.data;
      alert(res.message);
      return res.data;
    },
  },
  pizzaActions: {
    getToppings: async () => {
      const req = await axios.get('/management_system/topping_actions/get_all');
      const res = await req.data;
      return res.toppingList;
    },
    addPizza: async (body) => {
      const req = await axios.post('/management_system/pizza_actions/add_new', body);
      const res = await req.data;
      alert(res.message);
      return res.pizza;
    },
    getPizzaList: async (section) => {
      let req;
      if (section) req = await axios.get(`/management_system/pizza_actions/get_all/${section}`);
      else req = await axios.get('/management_system/pizza_actions/get_all');
      const res = await req.data;
      return res.pizzaList;
    },
  },
};

export default actions;
