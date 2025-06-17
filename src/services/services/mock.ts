import { services } from '../mocks/services';
import { Service } from '../../libs/interfaces/Service';

export const getServices = async (): Promise<Service[]> => {
  return services;
};

export const getServiceById = async (id: string): Promise<Service | undefined> => {
  return services.find(service => service.id === id);
};
