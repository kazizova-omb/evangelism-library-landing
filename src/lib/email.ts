// Email checks for the request form. The backend must still validate;
// this catches typos before a sign-in email goes nowhere.

const LOCAL = /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+$/;
const LABEL = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;

export function isValidEmail(raw: string): boolean {
  const v = raw.trim();
  if (v.length > 254) return false;
  const at = v.lastIndexOf('@');
  if (at < 1 || at !== v.indexOf('@')) return false;
  const local = v.slice(0, at);
  const domain = v.slice(at + 1).toLowerCase();
  if (local.length > 64 || !LOCAL.test(local)) return false;
  if (local.startsWith('.') || local.endsWith('.') || local.includes('..')) return false;
  const labels = domain.split('.');
  if (labels.length < 2 || !labels.every((l) => LABEL.test(l))) return false;
  const tld = labels[labels.length - 1];
  return /^(?:[a-z]{2,63}|xn--[a-z0-9-]{2,59})$/.test(tld);
}

// Domains most sign-ups use; a near miss of one of these is probably a typo.
const DOMAINS = [
  'gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'icloud.com', 'live.com', 'aol.com',
  'msn.com', 'me.com', 'protonmail.com', 'proton.me', 'yahoo.es', 'hotmail.es', 'outlook.es',
  'yahoo.com.mx', 'hotmail.com.br', 'yahoo.com.br', 'adventist.org',
];
const TLD_FIXES: Record<string, string> = { con: 'com', cmo: 'com', ocm: 'com', vom: 'com', xom: 'com', cpm: 'com', comm: 'com', co: 'com', og: 'org', ogr: 'org', rog: 'org', nte: 'net', ent: 'net' };

function distance(a: string, b: string): number {
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++)
    for (let j = 1; j <= b.length; j++)
    {
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
      // swapped neighbours ("gmial") count as one edit
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  return d[a.length][b.length];
}

/** A likely correction ("jo@gmial.com" -> "jo@gmail.com"), or null. */
export function suggestEmail(raw: string): string | null {
  const v = raw.trim();
  const at = v.lastIndexOf('@');
  if (at < 1) return null;
  const local = v.slice(0, at);
  const typed = v.slice(at + 1).toLowerCase();
  if (!typed || DOMAINS.includes(typed)) return null;

  // 1) fix an obviously wrong ending (".con"); ".co" is a real TLD, so only
  //    when that turns it into a big provider
  let domain = typed;
  const parts = typed.split('.');
  const fix = TLD_FIXES[parts[parts.length - 1]];
  if (fix && parts.length >= 2) {
    const fixed = [...parts.slice(0, -1), fix].join('.');
    if (parts[parts.length - 1] !== 'co' || DOMAINS.includes(fixed)) domain = fixed;
  }

  // 2) a near miss of a common provider ("gmial.com")
  let best: string | null = null;
  let bestD = 3;
  for (const d of DOMAINS) {
    const dist = distance(domain, d);
    if (dist > 0 && dist < bestD && dist <= (d.length > 9 ? 2 : 1)) { best = d; bestD = dist; }
  }
  if (best) domain = best;

  return domain !== typed ? `${local}@${domain}` : null;
}
