export const analyzeEdital = async (): Promise<Blob> => {
  const csvContent = 'nome,cnpj\nEmpresa Exemplo,00.000.000/0000-00';
  return new Blob([csvContent], { type: 'text/csv' });
};
