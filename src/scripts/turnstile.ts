// Cloudflare Turnstile, loaded once per page and only when a form gets close to the viewport.
import { config } from '../config';

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  scriptPromise ??= new Promise((resolve) => {
    (window as unknown as { onTurnstileLoad: () => void }).onTurnstileLoad = () => resolve();
    const s = document.createElement('script');
    s.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad';
    s.async = true;
    s.defer = true;
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export interface TurnstileHandle {
  /** current token ('' until the check passes) */
  token(): string;
  /** tokens are single use: reset after every submit */
  reset(): void;
  /** make sure the widget is (being) rendered, e.g. on first focus */
  load(): void;
}

/** Renders the widget into `box` when it nears the viewport. `onPass` runs once a token is available. */
export function mountTurnstile(box: HTMLElement, onPass: () => void, theme: 'light' | 'dark' = 'light'): TurnstileHandle {
  let widgetId: string | null = null;
  let started = false;

  const load = () => {
    if (started) return;
    started = true;
    loadScript().then(() => {
      widgetId = window.turnstile!.render(box, {
        sitekey: config.turnstileSiteKey,
        theme,
        size: box.clientWidth < 300 ? 'compact' : 'normal',
        callback: onPass,
      });
    });
  };

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      if (entries.some((e) => e.isIntersecting)) { load(); io.disconnect(); }
    }, { rootMargin: '600px 0px' });
    io.observe(box);
  } else load();

  return {
    token: () => (widgetId !== null ? window.turnstile?.getResponse(widgetId) ?? '' : ''),
    reset: () => { if (widgetId !== null) window.turnstile?.reset(widgetId); },
    load,
  };
}
