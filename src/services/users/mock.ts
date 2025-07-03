import { RegisterNewUser, User } from '../../libs/interfaces/User';

export const registerUser = async (newUserRegisterData: RegisterNewUser): Promise<User> => {
  // Simula um usuário registrado retornando os dados enviados com um ID fictício
  return {
    id: 1, // ID fictício
    ...newUserRegisterData,
  } as User;
};

export const getUserByFirebaseUid = async (): Promise<User> => {
  // Simula a busca de um usuário pelo Firebase UID
  return {
    id: 1, // ID fictício
    name: 'Usuário Exemplo',
    email: 'usario.example@email.com',
    coins: 20,
    plan: 'free',
  } as User;
};
