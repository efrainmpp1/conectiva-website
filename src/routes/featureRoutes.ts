export interface FeatureRoute {
  id: string;
  path: string; // relative path used in router and navigation
}

export const featureRoutes: FeatureRoute[] = [
  { id: 'ai-public-bidding', path: 'ferramenta/agente-edital' },
  { id: 'ai-search-companies', path: 'ferramenta/busca-descritiva' },
  { id: 'ai-contact-automation', path: 'ferramenta/contato-automatico' },
];

export const getFeaturePathById = (id: string): string | undefined =>
  featureRoutes.find(route => route.id === id)?.path;
