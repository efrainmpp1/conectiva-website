import axios from 'axios';

export const apiNode = axios.create({
  baseURL: 'http://localhost:3331',
  timeout: 10000,
});
