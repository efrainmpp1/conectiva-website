import { useState, useEffect } from 'react';
import { analyzeEdital } from '../../services/edital';

export type StatusAnalise = 'idle' | 'processando' | 'concluido' | 'erro';

export function useAnaliseDeEdital() {
  const [statusAnalise, setStatusAnalise] = useState<StatusAnalise>('idle');
  const [csvBlobUrl, setCsvBlobUrl] = useState<string | null>(null);
  const [mensagemErro, setMensagemErro] = useState<string | null>(null);

  const analisar = async (arquivoPdf: File) => {
    setStatusAnalise('processando');
    setMensagemErro(null);
    if (csvBlobUrl) {
      URL.revokeObjectURL(csvBlobUrl);
    }
    setCsvBlobUrl(null);
    try {
      const blob = await analyzeEdital(arquivoPdf);
      const url = URL.createObjectURL(blob);
      setCsvBlobUrl(url);
      setStatusAnalise('concluido');
    } catch (error) {
      setStatusAnalise('erro');
      console.error('Erro ao analisar o edital:', error);
      setMensagemErro(
        `Ocorreu um erro ao analisar o edital. Verifique o arquivo e tente novamente. ${
          error instanceof Error ? error.message : ''
        }`,
      );
    }
  };

  const reset = () => {
    if (csvBlobUrl) {
      URL.revokeObjectURL(csvBlobUrl);
    }
    setCsvBlobUrl(null);
    setMensagemErro(null);
    setStatusAnalise('idle');
  };

  useEffect(() => {
    return () => {
      if (csvBlobUrl) {
        URL.revokeObjectURL(csvBlobUrl);
      }
    };
  }, [csvBlobUrl]);

  return { statusAnalise, csvBlobUrl, mensagemErro, analisar, reset };
}
