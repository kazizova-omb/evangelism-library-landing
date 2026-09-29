import type { ImageMetadata } from 'astro';

// Image slots. Drop a file named after the slot into src/assets/slots/
// (jpg, jpeg, png, webp or avif) and the matching CSS placeholder is replaced
// by an optimized image on the next build. See README "Images".
export type SlotName =
  | 'hero'
  | 'trailer'
  | 'gallery-slide'
  | 'gallery-flyer'
  | 'gallery-art'
  | 'gallery-video'
  | 'gallery-social'
  | 'demo-flyer'
  | 'demo-slide'
  | 'demo-image'
  | 'team'
  | 'og';
// plus 'logo' (svg allowed), see logoUrl below

const files = import.meta.glob<{ default: ImageMetadata }>(
  ['/src/assets/slots/*.{jpg,jpeg,png,webp,avif}', '/src/assets/slots/v2/*.{jpg,jpeg,png,webp,avif}', '/src/assets/slots/v3/*.{jpg,jpeg,png,webp,avif}'],
  { eager: true },
);

function find(dir: string, name: string) {
  for (const [path, mod] of Object.entries(files)) {
    const parts = path.split('/');
    const base = parts.pop()!.replace(/\.[^.]+$/, '');
    if (base === name && parts.join('/') === dir) return mod.default;
  }
  return undefined;
}

/** Image for a slot. v3 looks in slots/v3, then slots/v2; v2 in slots/v2; then the shared folder. */
export function slot(name: SlotName, theme: 'v1' | 'v2' | 'v3' = 'v1'): ImageMetadata | undefined {
  const dirs = theme === 'v3' ? ['v3', 'v2'] : theme === 'v2' ? ['v2'] : [];
  for (const d of dirs) {
    const hit = find(`/src/assets/slots/${d}`, name);
    if (hit) return hit;
  }
  return find('/src/assets/slots', name);
}

// Logo: src/assets/slots/logo.svg (or .png/.webp). Replaces the star mark
// next to the brand name in the header and footer.
const logoUrls = import.meta.glob<string>('/src/assets/slots/logo.{svg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});
const logoSvgs = import.meta.glob<string>('/src/assets/slots/logo.svg', { eager: true, query: '?raw', import: 'default' });
const logoBitmaps = import.meta.glob<{ default: ImageMetadata }>('/src/assets/slots/logo.{png,webp}', { eager: true });

function logoRatio(): number {
  const svg = Object.values(logoSvgs)[0];
  if (svg) {
    const vb = svg.match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);
    if (vb) return Number(vb[1]) / Number(vb[2]);
  }
  const bmp = Object.values(logoBitmaps)[0]?.default;
  return bmp ? bmp.width / bmp.height : 1;
}

export const logo = Object.values(logoUrls)[0]
  ? { url: Object.values(logoUrls)[0], ratio: logoRatio() }
  : undefined;
