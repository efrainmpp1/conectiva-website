import { apiNode } from '../apiNode';
import { RegisterNewUser, User } from '../../libs/interfaces/User';

export const registerUser = async (newUserRegisterData: RegisterNewUser): Promise<User> => {
  const { data } = await apiNode.post<{ user: User }>('/users', newUserRegisterData);
  return data.user;
};
