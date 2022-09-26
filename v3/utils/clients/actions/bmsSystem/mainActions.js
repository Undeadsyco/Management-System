import axios from "axios";
import requests from '../index';

const { makePostRequest } = requests;

const actions = {
  login: async (body) => {
    const employee = await makePostRequest("/api/auth/bms/login", body);
    console.log('responce', employee)
    return employee;
  },
};

export default actions;
