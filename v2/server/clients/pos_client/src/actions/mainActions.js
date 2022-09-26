/* eslint-disable no-alert */
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
  getUser: async (pin) => {
    const req = await axios.post('/pos_system/employee_actions/get_employee', { pin });
    const res = await req.data;
    if (!res.employee) {
      console.log(res.message);
    }
    return res.employee;
  },
  clockIn: async () => {
    const req = await authAxios.get('/pos_system/employee_actions/clock_in');
    const res = await req.data;
    return res;
  },
  checkIsClockedIn: async () => {
    const req = await authAxios.get('/pos_system/employee_actions/check_clocked_in');
    const res = await req.data;
    if (!res.employee) {
      console.log('something went wrong');
    }
    return res.employee;
  },
  cancelClockIn: async () => {
    await authAxios.get('/pos_system/destroy_token');
  },
  clockOut: async (id) => {
    console.log('employee id', id);
    const req = await axios.put('/pos_system/employee_actions/clock_out', { id });
    const res = await req.data;
    return res;
  },
  breakOut: async (id) => {
    const req = await axios.put('/pos_system/employee_actions/break_out', { id });
    const res = await req.data;
    return res;
  },
  breakIn: async (id) => {
    const req = await axios.put('/pos_system/employee_actions/break_in', { id });
    const res = await req.data;
    return res;
  },
  getEmployeeTimes: async () => {
    const req = await axios.get('/pos_system/employee_actions/employee_times');
    const res = await req.data;
    return res.employeeTimes;
  },
  editTime: async (route, body) => {
    const req = await axios.put(`/pos_system/employee_actions/edit_time/${route}`, body);
    const { status } = req;
    const res = await req.data;
    if (status !== 200) {
      console.log('error', res);
    }
    console.log(res);
    return res;
  },
};

export default actions;
