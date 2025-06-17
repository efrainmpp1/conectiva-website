import { apiNode } from '../apiNode';
import { Service } from '../../libs/interfaces/Service';

export const getServices = async (): Promise<Service[]> => {
  const { data } = await apiNode.get<Service[]>('/services');
  return data;
};

export const getServiceById = async (id: string): Promise<Service> => {
  const { data } = await apiNode.get<Service>(`/services/${id}`);
  return data;
};
