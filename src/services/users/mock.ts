import { RegisterNewUser, User } from '../../libs/interfaces/User';

export const registerUser = async (newUserRegisterData: RegisterNewUser): Promise<User> => {
  // Simula um usuário registrado retornando os dados enviados com um ID fictício
  return {
    id: 1, // ID fictício
    ...newUserRegisterData,
  } as User;
};
