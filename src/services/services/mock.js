import { services } from '../mocks/services.js';

export const getServices = async () => {
  return services;
};

export const getServiceById = async (id) => {
  return services.find(service => service.id === id);
};
