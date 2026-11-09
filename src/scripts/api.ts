// Client for the download portal backend (registration, sign-in by email code, library, downloads).
// The backend is Sergiy's part; the contract is described in README ("Download portal API").
// With no PUBLIC_API_URL the same functions run in test mode in the browser: sample data from
// src/lib/portalSample.ts, any registration succeeds, the sign-in code is 123456, the session lives in
// localStorage.
import { config } from '../config';
// test data is loaded only in test mode, so it never ships with the real portal
const sample = () => import('../lib/portalSample');

export interface FileFormat { id: string; label: string; hint?: string }

/** one image of the Image Library */
export interface LibraryImage {
  id: string;
  title: string;
  /** tile and modal thumbnail (about 800px wide) */
  preview: string;
  /** detail page and full-screen view (about 1600px wide) */
  image: string;
  book: string;
  chapter: number;
  chapterName: string;
  /** "Daniel 2", "Revelation 6:1-8" */
  ref: string;
  testament: 'Old' | 'New';
  /** curated category ids (see LibraryCategory) */
  categories: string[];
  tags: string[];
  desc: string;
  /** group label shown on the detail page ("Biblical Scenes", "Prophecy") */
  group: string;
  sub?: string;
  dims: string;
  size: string;
  date: string;
  views: number;
  downloads: number;
  license: string;
  /** optional: shown on the detail page only when present */
  model?: string;
  modelVersion?: string;
  prompt?: string;
}
export interface LibraryCategory { id: string; label: string; thumb: string; count?: number }
export interface LibraryBook { book: string; testament: 'Old' | 'New'; order: number; count: number; chapters: { n: number; name: string; count: number }[] }
export interface LibraryFacets { total: number; books: LibraryBook[]; categories: LibraryCategory[]; tags: string[] }
export interface LibraryQuery { book?: string; chapter?: number; category?: string; q?: string; sort?: 'new' | 'views' | 'downloads' | 'az'; page: number; perPage: number }
export interface LibraryPage { items: LibraryImage[]; total: number; page: number; perPage: number }

export type MaterialGroupId = 'presentations' | 'video' | 'marketing' | 'audio' | 'book';
export interface MaterialItem {
  id: string;
  cat: string;
  title: string;
  thumb: string;
  size: string;
  slides?: number;
  duration?: string;
  fileType?: string;
  formats: FileFormat[];
}
export interface Materials {
  series: { sessions: number; files: string; formats: number; size: string; thumb: string; formatsList: FileFormat[] };
  languages: { code: string; name: string; available: boolean }[];
  groups: { id: MaterialGroupId; items: MaterialItem[] }[];
}
export interface DownloadRequest {
  kind: 'image' | 'material' | 'series';
  /** image or material id; for the series, the language code */
  id: string;
  format: string;
  purpose: string;
  /** free text when purpose is "other" */
  purposeText?: string;
  lang: string;
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

/* ---------------- library and materials ---------------- */

const BOOK_ORDER: Record<string, number> = { Genesis: 1, Exodus: 2, Daniel: 27, Joel: 29, Zechariah: 38, Matthew: 40, Revelation: 66 };

async function sampleFacets(): Promise<LibraryFacets> {
  const { SAMPLE_IMAGES, SAMPLE_CATEGORIES } = await sample();
  const books = new Map<string, LibraryBook>();
  for (const d of SAMPLE_IMAGES) {
    const b = books.get(d.book) ?? { book: d.book, testament: d.testament, order: BOOK_ORDER[d.book] ?? 99, count: 0, chapters: [] };
    b.count++;
    const ch = b.chapters.find((c) => c.n === d.chapter);
    if (ch) ch.count++; else b.chapters.push({ n: d.chapter, name: d.chapterName, count: 1 });
    books.set(d.book, b);
  }
  return {
    total: SAMPLE_IMAGES.length,
    books: [...books.values()].sort((a, b) => a.order - b.order).map((b) => ({ ...b, chapters: b.chapters.sort((x, y) => x.n - y.n) })),
    categories: SAMPLE_CATEGORIES.map((c) => ({ ...c, count: SAMPLE_IMAGES.filter((d) => d.categories.includes(c.id)).length })),
    tags: [...new Set(SAMPLE_IMAGES.flatMap((d) => d.tags))].slice(0, 10),
  };
}

/** books and chapters for the filter, curated categories with counts, popular tags */
export async function facets(lang: string): Promise<LibraryFacets> {
  if (!testMode) return call(`/library/facets?lang=${encodeURIComponent(lang)}`);
  return sampleFacets();
}

export async function images(query: LibraryQuery, lang: string): Promise<LibraryPage> {
  if (!testMode) {
    const q = new URLSearchParams({ lang, page: String(query.page), perPage: String(query.perPage), sort: query.sort ?? 'new' });
    if (query.book) q.set('book', query.book);
    if (query.chapter) q.set('chapter', String(query.chapter));
    if (query.category) q.set('category', query.category);
    if (query.q) q.set('q', query.q);
    return call(`/library/images?${q}`);
  }
  await wait(150);
  const { SAMPLE_IMAGES } = await sample();
  const words = (query.q ?? '').toLowerCase().split(/\s+/).filter(Boolean);
  let list = SAMPLE_IMAGES.filter((d) => {
    if (query.category) return d.categories.includes(query.category);
    if (query.book && d.book !== query.book) return false;
    if (query.chapter && d.chapter !== query.chapter) return false;
    if (words.length) {
      const hay = [d.title, d.book, d.chapter, d.ref, d.chapterName, d.group, d.sub, d.tags.join(' '), d.desc].join(' ').toLowerCase();
      return words.every((w) => hay.includes(w));
    }
    return true;
  });
  if (query.sort === 'views') list = [...list].sort((a, b) => b.views - a.views);
  else if (query.sort === 'downloads') list = [...list].sort((a, b) => b.downloads - a.downloads);
  else if (query.sort === 'az') list = [...list].sort((a, b) => a.title.localeCompare(b.title));
  const start = (query.page - 1) * query.perPage;
  return { items: list.slice(start, start + query.perPage), total: list.length, page: query.page, perPage: query.perPage };
}

export async function image(id: string, lang: string): Promise<LibraryImage | null> {
  if (!testMode) {
    try { return await call<LibraryImage>(`/library/images/${encodeURIComponent(id)}?lang=${encodeURIComponent(lang)}`); }
    catch (e) { if (e instanceof ApiError && e.status === 404) return null; throw e; }
  }
  return (await sample()).SAMPLE_IMAGES.find((d) => d.id === id) ?? null;
}

export async function materials(lang: string): Promise<Materials> {
  if (!testMode) return call(`/materials?lang=${encodeURIComponent(lang)}`);
  return (await sample()).SAMPLE_MATERIALS;
}

/** Records who downloads what and why, and returns a short-lived link to the file. Throws
    ApiError('unauthorized', 401) when there is no session. */
export async function download(req: DownloadRequest): Promise<string> {
  if (!testMode) return (await post<{ url: string }>('/download', req)).url;
  await wait(400);
  if (!(await me())) throw new ApiError('unauthorized', 401);
  // test mode: hand back the preview image (images) or nothing to fetch (materials, series)
  return req.kind === 'image' ? (await sample()).SAMPLE_IMAGES.find((d) => d.id === req.id)?.image ?? '' : '';
}
