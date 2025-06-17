import { apiNode } from '../apiNode';

export const getBalance = async (): Promise<number> => {
  const { data } = await apiNode.get<{ balance: number }>('/credits');
  return data.balance;
};

export const buyCredits = async (): Promise<void> => {
  await apiNode.post('/credits/buy');
};
