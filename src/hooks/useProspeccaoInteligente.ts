import { useState, useEffect } from 'react';
import { enviarDescricaoProspeccao } from '../services/prospeccao';

export type StatusProspeccao = 'idle' | 'processando' | 'concluido' | 'erro';

export function useProspeccaoInteligente() {
  const [descricao, setDescricao] = useState('');
  const [status, setStatus] = useState<StatusProspeccao>('idle');
  const [erro, setErro] = useState<string | null>(null);
  const [csvUrl, setCsvUrl] = useState<string | null>(null);

  const executarProspeccao = async () => {
    if (!descricao.trim()) return;

    setStatus('processando');
    setErro(null);
    setCsvUrl(null);

    try {
      const blob = await enviarDescricaoProspeccao(descricao);
      const url = URL.createObjectURL(blob);
      setCsvUrl(url);
      setStatus('concluido');
    } catch (e: any) {
      setErro(e?.message || 'Erro ao executar prospecção.');
      setStatus('erro');
    }
  };

  const resetar = () => {
    setDescricao('');
    setErro(null);
    setStatus('idle');
    if (csvUrl) {
      URL.revokeObjectURL(csvUrl);
      setCsvUrl(null);
    }
  };

  useEffect(() => {
    return () => {
      if (csvUrl) {
        URL.revokeObjectURL(csvUrl);
      }
    };
  }, [csvUrl]);

  return {
    descricao,
    setDescricao,
    status,
    erro,
    csvUrl,
    executarProspeccao,
    resetar,
  };
}
