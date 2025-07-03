import { apiNode } from '../apiNode';
import { RegisterNewUser, User } from '../../libs/interfaces/User';
import { UserHistoricalService } from '../../libs/interfaces/UserHistoricalService';

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
