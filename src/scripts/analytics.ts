import { config } from '../config';

// Consent Mode v2, "basic" setup: defaults are set to denied in <head>
// (see Base.astro) and gtag.js is only loaded after the visitor accepts.
export const CONSENT_KEY = 'esl-consent';

export function getConsent(): 'granted' | 'denied' | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === 'granted' || v === 'denied' ? v : null;
  } catch {
    return null;
  }
}

let loaded = false;
export function loadGa() {
  if (!config.ga4Id || loaded) return;
  loaded = true;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4Id)}`;
  document.head.appendChild(s);
  window.gtag?.('js', new Date());
  window.gtag?.('config', config.ga4Id);
}

export function setConsent(value: 'granted' | 'denied') {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked: the choice lasts for this page view only */
  }
  window.gtag?.('consent', 'update', {
    analytics_storage: value,
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  if (value === 'granted') loadGa();
}

/** Sends a GA4 event. No-op without a GA4 ID or without consent. */
export function track(name: string, params: Record<string, string> = {}) {
  if (!config.ga4Id || getConsent() !== 'granted') return;
  window.gtag?.('event', name, params);
}
