import axios from 'axios';

const actions = {
  getEmployees: async () => {
    const req = await axios.get('/management_system/employee_actions/get_all');
    const res = await req.data;
    if (req.status !== 200) {
      const err = new Error();
      err.message = res.message;
      throw err;
    }
    return res.employees;
  },
  addNewUser: async (body) => {
    const req = await axios.post('/management_system/user_actions/add_new_user', body);
    const res = await req.data;
    return res;
  },
};

export default actions;
