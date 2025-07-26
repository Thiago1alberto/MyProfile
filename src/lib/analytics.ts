// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = 'GA_MEASUREMENT_ID';

// Google Analytics 4 pageview
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Google Analytics 4 event
export const event = (action: string, { category, label, value }: {
  category: string;
  label?: string;
  value?: number;
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
