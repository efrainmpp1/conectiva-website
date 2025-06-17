import { apiNode } from '../apiNode.js';

export const getServices = async () => {
  const { data } = await apiNode.get('/services');
  return data;
};

export const getServiceById = async (id) => {
  const { data } = await apiNode.get(`/services/${id}`);
  return data;
};
