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
  '/src/assets/slots/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function slot(name: SlotName): ImageMetadata | undefined {
  for (const [path, mod] of Object.entries(files)) {
    const base = path.split('/').pop()!.replace(/\.[^.]+$/, '');
    if (base === name) return mod.default;
  }
  return undefined;
}

// Logo: src/assets/slots/logo.svg (or .png/.webp). Replaces the star mark
// next to the brand name in the header and footer.
const logoFiles = import.meta.glob<string>('/src/assets/slots/logo.{svg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
});
export const logoUrl: string | undefined = Object.values(logoFiles)[0];
