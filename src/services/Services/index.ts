import { services } from '../mocks/services';
import { Service } from '../../libs/interfaces/Service';

export const getServices = (): Service[] => {
  return services;
};

export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};