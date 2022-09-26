import axios from "axios";

const getParams = async (params) => {
  const keys = Object.keys(params);
  let urlParams = "";
  if (keys.length > 0) {
    for (let i = 0; i < keys.length; i++) {
      urlParams += `/${params[keys[i]]}`;
    }
  }
  return urlParams;
};

const requests = {
  makeGetRequest: async (url, params) => {
    const urlParams = await getParams(params);
    const req = await axios.get(`${url}${urlParams}`);
    const res = await req.data;
    if (req.status !== 200) throw new Error(res.message);
    return res;
  },
  makePostRequest: async (url, body) => {
    const req = await axios.post(url, body);
    const res = await req.data;
    if (req.status !== 200) throw new Error(res.message);
    return res;
  },
  makePutRequest: async (url, params, body) => {
    const urlParams = await getParams(params);
    const req = await axios.put(`${url}${urlParams}`, body);
    const res = await req.data;
    if (req.status !== 200) throw new Error(res.message);
    return res;
  },
  makeDeleteRequest: async (url, params) => {
    const urlParams = await getParams(params);
    const req = await axios.delete(`${url}${urlParams}`);
    const res = await req.data;
    if (req.status !== 200) throw new Error(res.message);
    return res;
  },
}

export default requests;