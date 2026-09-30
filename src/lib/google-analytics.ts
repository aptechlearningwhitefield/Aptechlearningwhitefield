const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();
const validMeasurementId = measurementId && /^G-[A-Z0-9]+$/i.test(measurementId)
  ? measurementId
  : undefined;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
  }
}

/** Loads GA4 only after the visitor has accepted analytics cookies. */
export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined' || !validMeasurementId || window.__gaInitialized) return;

  window.__gaInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer!.push(args);
  window.gtag('js', new Date());
  window.gtag('config', validMeasurementId, { send_page_view: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(validMeasurementId)}`;
  document.head.appendChild(script);

  const trackPageView = () => {
    window.gtag?.('config', validMeasurementId, {
      page_path: `${window.location.pathname}${window.location.search}`,
      page_title: document.title,
    });
  };
  const originalPushState = history.pushState;
  history.pushState = function (...args) {
    originalPushState.apply(this, args);
    trackPageView();
  };
  window.addEventListener('popstate', trackPageView);
}
