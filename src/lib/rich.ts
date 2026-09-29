const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes text, then turns **x** into <strong> and *x* into <em>. */
export function rich(text: string): string {
  return escape(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>');
}

/** Removes the inline markers, for plain-text contexts (alt, aria-label, meta). */
export function plain(text: string): string {
  return text.replace(/\*\*?(.+?)\*\*?/g, '$1');
}

/** Replaces {key} tokens in escaped text with raw HTML snippets. */
export function fill(text: string, parts: Record<string, string>): string {
  return escape(text).replace(/\{(\w+)\}/g, (m, key: string) => parts[key] ?? m);
}

export { escape };
