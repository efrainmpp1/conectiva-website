export async function enviarDescricaoProspeccao(_: string): Promise<Blob> {
  const conteudoSimulado = `nome,cnpj,setor,uf\nEmpresa Alpha,00.000.000/0001-00,Tecnologia,SP\nEmpresa Beta,00.000.000/0002-00,Saúde,SP\n`;
  return new Blob([conteudoSimulado], { type: 'text/csv' });
}
