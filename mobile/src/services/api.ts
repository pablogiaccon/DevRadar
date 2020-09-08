import axios from 'axios';

export const BASE_URL = 'http://192.168.50.215:3333/';

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
