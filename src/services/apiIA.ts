import axios from 'axios';

export const apiIA = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 20000,
});
