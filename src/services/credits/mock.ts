let balance = 0;

export const getBalance = async (): Promise<number> => {
  return balance;
};

export const buyCredits = async (): Promise<void> => {
  balance += 10;
};
