import { apiNode } from '../apiNode';
import { RegisterNewUser, User } from '../../libs/interfaces/User';
import { UserHistoricalService } from '../../libs/interfaces/UserHistoricalService';
import { ServiceBackendSimplify } from '../../libs/interfaces/Service';

export const registerUser = async (newUserRegisterData: RegisterNewUser): Promise<User> => {
  const { data } = await apiNode.post<{ user: User }>('/users', newUserRegisterData);
  return data.user;
};

export const getUserByFirebaseUid = async (firebaseUid: string): Promise<User> => {
  const { data } = await apiNode.get<{ user: User }>(`/users/${firebaseUid}`);
  return data.user;
};

export const getUserHistoricalServices = async (id: number): Promise<UserHistoricalService[]> => {
  const { data } = await apiNode.get<{ historicalServices: UserHistoricalService[] }>(
    `/users/${id}/historical-services`,
  );
  return data.historicalServices;
};

export const getNumberOfHistoricalServicesByUserId = async (id: number): Promise<number> => {
  const { data } = await apiNode.get<{ count: number }>(`/users/${id}/historical-services/count`);
  return data.count;
};

export const getLastServiceUsedByUserId = async (
  id: number,
): Promise<ServiceBackendSimplify | null> => {
  const { data } = await apiNode.get<{ lastServiceUsed: ServiceBackendSimplify | null }>(
    `/users/${id}/historical-services/last`,
  );
  return data.lastServiceUsed;
};
