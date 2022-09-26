import axios from 'axios';

const cookies = document.cookie;

const authAxios = axios.create({
  headers: {
    withCredentials: true,
    authorization: `Bearer ${cookies}`,
  },
  credentials: 'same-origin',
});

const actions = {
  login: async (body) => {
    try {
      const req = await axios.post('/management_system/login', body);
      const res = await req.data;
      return res;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  checkAuth: async () => {
    try {
      const req = await authAxios.get('/management_system/verify_token');
      const res = await req.data;
      return res.authorized;
    } catch (err) {
      console.log(err);
      return false;
    }
  },
  logout: async () => {
    const req = await axios.get('/management_system/logout');
    const res = await req.data;
    console.log(res);
    return res;
  },
};

export default actions;
