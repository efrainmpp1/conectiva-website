const useMock = process.env.NODE_ENV !== 'production';
let mod;
if (useMock) {
  mod = await import('./mock.js');
} else {
  mod = await import('./integration.js');
}
export const { getServices, getServiceById } = mod;
