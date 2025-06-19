export async function enviarDescricaoProspeccao(descricao: string): Promise<Blob> {
  const response = await fetch(`${import.meta.env.VITE_API_IA_URL}/prospeccao-descritiva`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ descricao }),
  });

  if (!response.ok) {
    const erro = await response.json();
    throw new Error(erro.erro || 'Erro ao processar a prospecção.');
  }

  return await response.blob();
}
