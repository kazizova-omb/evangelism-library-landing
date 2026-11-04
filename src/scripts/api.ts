// Client for the download portal backend (registration, sign-in by email code, catalog, downloads).
// The backend is Sergiy's part; the contract is described in README ("Download portal API").
// With no PUBLIC_API_URL the same functions run in test mode in the browser: sample catalog,
// any registration succeeds, the sign-in code is 123456, the session lives in localStorage.
import { config } from '../config';

export type ItemType = 'presentation' | 'image' | 'video' | 'marketing';
export const ITEM_TYPES: ItemType[] = ['presentation', 'image', 'video', 'marketing'];

export interface CatalogItem {
  id: string;
  type: ItemType;
  title: string;
  preview: string;
  /** larger preview for full-screen viewing (about 1600px wide); falls back to `preview` */
  previewLarge?: string;
  /** videos: a playable preview (smaller, watermark-free stream or MP4), not the original file */
  previewVideo?: string;
  format: string;
  size: string;
  language: string;
  series?: number;
}
export interface CatalogPage {
  items: CatalogItem[];
  total: number;
  page: number;
  perPage: number;
}
export interface User { email: string; firstName: string }

export class ApiError extends Error {
  constructor(public code: string, public status = 0) { super(code); }
}

export const testMode = !config.apiUrl;
export const TEST_CODE = '123456';

/* ---------------- real backend ---------------- */

async function call<T>(path: string, init: RequestInit = {}): Promise<T> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 15000);
  try {
    const res = await fetch(`${config.apiUrl}${path}`, {
      credentials: 'include', // the session is an httpOnly cookie set by the backend
      headers: init.body ? { 'Content-Type': 'application/json' } : undefined,
      ...init,
      signal: ctrl.signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new ApiError((data as { error?: string }).error ?? 'server_error', res.status);
    return data as T;
  } catch (e) {
    if (e instanceof ApiError) throw e;
    throw new ApiError('network');
  } finally {
    clearTimeout(timer);
  }
}
const post = <T>(path: string, body: unknown) => call<T>(path, { method: 'POST', body: JSON.stringify(body) });

/* ---------------- test mode ---------------- */

const SESSION_KEY = 'rmr-test-session';
const USERS_KEY = 'rmr-test-users';
const SESSION_DAYS = 30;
const wait = (ms = 700) => new Promise((r) => setTimeout(r, ms));
const read = <T>(k: string, fallback: T): T => {
  try { return JSON.parse(localStorage.getItem(k) ?? '') as T; } catch { return fallback; }
};
const write = (k: string, v: unknown) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } };
const startSession = (u: User) => write(SESSION_KEY, { ...u, exp: Date.now() + SESSION_DAYS * 864e5 });

/** sample catalog, rendered into the page at build time (see src/lib/sampleCatalog.ts) */
function sampleCatalog(): CatalogItem[] {
  const el = document.getElementById('sample-catalog');
  return el ? (JSON.parse(el.textContent ?? '[]') as CatalogItem[]) : [];
}

/* ---------------- public API ---------------- */

export interface RegisterInput {
  firstName: string;
  lastName: string;
  email: string;
  lang: string;
  turnstileToken: string;
  termsVersion: string;
  utm: Record<string, string>;
}

/** Creates the account and signs the visitor in. Throws ApiError('already_registered') for a known email
    (the backend then sends a sign-in code instead). */
export async function register(input: RegisterInput): Promise<User> {
  if (!testMode) return post<User>('/register', { ...input, consent: true, source: 'revelation-media-resources' });
  await wait();
  const users = read<Record<string, string>>(USERS_KEY, {});
  const email = input.email.toLowerCase();
  if (email in users) throw new ApiError('already_registered', 409);
  write(USERS_KEY, { ...users, [email]: input.firstName });
  const user = { email, firstName: input.firstName };
  startSession(user);
  return user;
}

/** Sends a one-time code. Throws ApiError('not_registered') for an unknown email. */
export async function requestCode(email: string, lang: string, turnstileToken: string): Promise<void> {
  if (!testMode) { await post('/login/code', { email, lang, turnstileToken }); return; }
  await wait();
  if (!(email.toLowerCase() in read<Record<string, string>>(USERS_KEY, {}))) throw new ApiError('not_registered', 404);
}

/** Checks the code and starts a session. Throws ApiError('invalid_code' | 'expired_code'). */
export async function verifyCode(email: string, code: string): Promise<User> {
  if (!testMode) return post<User>('/login/verify', { email, code });
  await wait(500);
  if (code.trim() !== TEST_CODE) throw new ApiError('invalid_code', 400);
  const user = { email: email.toLowerCase(), firstName: read<Record<string, string>>(USERS_KEY, {})[email.toLowerCase()] ?? '' };
  startSession(user);
  return user;
}

/** The signed-in visitor, or null when there is no valid session. */
export async function me(): Promise<User | null> {
  if (!testMode) {
    try { return await call<User>('/me'); } catch (e) { if (e instanceof ApiError && e.status === 401) return null; throw e; }
  }
  const s = read<(User & { exp: number }) | null>(SESSION_KEY, null);
  return s && s.exp > Date.now() ? { email: s.email, firstName: s.firstName } : null;
}

export async function logout(): Promise<void> {
  if (!testMode) { await post('/logout', {}); return; }
  try { localStorage.removeItem(SESSION_KEY); } catch { /* ignore */ }
}

/** Catalog counts per type (public, no session needed: previews are shown behind the sign-in gate). */
export async function counts(lang: string): Promise<Record<ItemType, number>> {
  if (!testMode) return call(`/catalog/counts?lang=${encodeURIComponent(lang)}`);
  const all = sampleCatalog();
  return Object.fromEntries(ITEM_TYPES.map((t) => [t, all.filter((i) => i.type === t).length])) as Record<ItemType, number>;
}

export async function catalog(type: ItemType, page: number, perPage: number, lang: string): Promise<CatalogPage> {
  if (!testMode) return call(`/catalog?type=${type}&page=${page}&perPage=${perPage}&lang=${encodeURIComponent(lang)}`);
  await wait(250);
  const all = sampleCatalog().filter((i) => i.type === type);
  return { items: all.slice((page - 1) * perPage, page * perPage), total: all.length, page, perPage };
}

/** Records the purpose and returns a short-lived link to the file. Throws ApiError('unauthorized') when the
    session has expired. */
export async function download(id: string, purpose: string): Promise<string> {
  if (!testMode) return (await post<{ url: string }>('/download', { id, purpose })).url;
  await wait(400);
  if (!(await me())) throw new ApiError('unauthorized', 401);
  const item = sampleCatalog().find((i) => i.id === id);
  return (item as CatalogItem & { file?: string })?.file ?? item?.preview ?? '';
}
