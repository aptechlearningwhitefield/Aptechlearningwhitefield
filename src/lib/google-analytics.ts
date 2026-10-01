// Keep the production measurement ID available even when hosting has not
// been configured with a VITE_ variable yet.
const measurementId = (import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-K0KHS9RL2F').trim();
const validMeasurementId = measurementId && /^G-[A-Z0-9]+$/i.test(measurementId)
  ? measurementId
  : undefined;
const tagManagerId = 'GTM-TKT5H8G8';

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __gaInitialized?: boolean;
    __gaConsentGranted?: boolean;
    __gtmInitialized?: boolean;
  }
}

/** Load the GTM container after analytics consent, sharing the GA dataLayer. */
export function initGoogleTagManager(): void {
  if (typeof window === 'undefined' || window.__gtmInitialized) return;
  window.__gtmInitialized = true;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(tagManagerId)}`;
  document.head.appendChild(script);
}

/** Loads GA4 only after the visitor has accepted analytics cookies. */
export function initGoogleAnalytics(): void {
  if (typeof window === 'undefined' || !validMeasurementId) return;

  if (window.__gaInitialized) {
    window.__gaConsentGranted = true;
    window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    window.gtag?.('config', validMeasurementId, {
      page_path: `${window.location.pathname}${window.location.search}`,
      page_title: document.title,
      send_page_view: true,
    });
    return;
  }

  window.__gaInitialized = true;
  window.__gaConsentGranted = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = (...args: unknown[]) => window.dataLayer!.push(args);
  window.gtag('consent', 'default', { analytics_storage: 'denied' });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', validMeasurementId, { send_page_view: true });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(validMeasurementId)}`;
  document.head.appendChild(script);

  const trackPageView = () => {
    if (!window.__gaConsentGranted) return;
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

/** Stop page/event tracking after a visitor revokes analytics consent. */
export function revokeGoogleAnalyticsConsent(): void {
  if (typeof window === 'undefined') return;
  window.__gaConsentGranted = false;
  window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
  window.gtag?.('config', validMeasurementId, { send_page_view: false });
}

/** Send consent-gated conversion events without passing form or personal data. */
export function trackGoogleAnalyticsEvent(
  eventName: 'generate_lead' | 'submit_review',
  formName: string,
): void {
  if (typeof window === 'undefined' || !window.gtag || !window.__gaConsentGranted) return;
  window.gtag('event', eventName, { form_name: formName });
}
