import { apiIA } from '../apiIA';

export const analyzeEdital = async (file: File): Promise<Blob> => {
  const formData = new FormData();
  formData.append('arquivo', file);

  const { data } = await apiIA.post('/analisar-edital', formData, {
    responseType: 'blob',
  });

  return data;
};
