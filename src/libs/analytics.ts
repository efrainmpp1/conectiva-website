export const trackEvent = (
  action: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined') {
    const anyWindow = window as any;
    if (typeof anyWindow.gtag === 'function') {
      anyWindow.gtag('event', action, params);
    } else if (Array.isArray(anyWindow.dataLayer)) {
      anyWindow.dataLayer.push({ event: action, ...params });
    } else {
      console.log('Analytics event', action, params);
    }
  }
};
