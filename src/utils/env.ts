export function isProductionEnv() {
  return import.meta.env.VITE_PROD === 'true';
}
