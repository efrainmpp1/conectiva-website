import { RegisterNewUser, User } from '../../libs/interfaces/User';
import { UserHistoricalService } from '../../libs/interfaces/UserHistoricalService';

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

export const getUserHistoricalServices = async (): Promise<UserHistoricalService[]> => {
  // Simula a busca de serviços históricos do usuário
  return [
    {
      id: 2,
      qtd: 2,
      total: 2,
      status: 'success',
      created_at: '03/07/2025 às 17:17',
      service: {
        id: 4,
        name: 'Agente de Prospecção - Descritivo',
      },
    },
    {
      id: 1,
      qtd: 2,
      total: 4,
      status: 'success',
      created_at: '03/07/2025 às 17:16',
      service: {
        id: 3,
        name: 'Agente de Edital - Licitação',
      },
    },
  ];
};
