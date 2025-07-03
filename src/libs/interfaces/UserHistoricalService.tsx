import { ServiceBackend } from './Service';

export interface UserHistoricalService {
  id: number;
  qtd: number;
  total: number;
  status: string;
  created_at: string;
  service: {
    id: ServiceBackend['id'];
    name: ServiceBackend['name'];
  };
}
