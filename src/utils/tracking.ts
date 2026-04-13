// Facebook Pixel tracking utilities

export const trackFacebookPixelLead = () => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Lead');
  }
};

export const trackFacebookPixelEvent = (eventName: string, params?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params);
  }
};
