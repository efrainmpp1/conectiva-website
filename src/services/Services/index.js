import { services } from '../mocks/services.js';

export const getServices = () => {
  return services;
};

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};
