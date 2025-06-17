export function isProductionEnv() {
  return import.meta.env.VITE_PROD === 'true';
}

export function isMockMode() {
  return import.meta.env.VITE_MOCK_MODE === 'true';
}
