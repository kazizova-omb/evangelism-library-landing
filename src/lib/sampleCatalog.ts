// Sample catalog for the download portal's test mode (no PUBLIC_API_URL yet). Built at build time from the
// images already in src/assets/slots, so the portal can be designed and reviewed before Sergiy's backend and
// the real image table exist. Replaced by GET /api/catalog once the backend is connected.
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import type { CatalogItem } from '../scripts/api';
import { slot, type SlotName } from './slots';
import { config } from '../config';
import { withBase } from '../i18n';

type Item = CatalogItem & { file?: string };

const IMAGES: [SlotName, string][] = [
  ['hero', "Nebuchadnezzar's statue"],
  ['gallery-art', 'Babylon at sunset'],
  ['about', 'Presenting the seminar'],
  ['gallery-slide', 'All Things New title slide'],
  ['gallery-flyer', 'The Book of Daniel flyer'],
  ['gallery-social', 'Big Truths social post'],
  ['gallery-video', 'The Big Picture video still'],
  ['demo', 'Series collage'],
  ['trailer', 'Trailer still'],
];

async function preview(name: SlotName, width = 480): Promise<string> {
  const img = slot(name, 'v3') as ImageMetadata | undefined;
  return img ? (await getImage({ src: img, width, format: 'webp' })).src : '';
}

export async function sampleCatalog(series: readonly { title: string; ref: string }[]): Promise<Item[]> {
  const previews = Object.fromEntries(await Promise.all(IMAGES.map(async ([n]) => [n, await preview(n)])));
  const large = Object.fromEntries(await Promise.all(IMAGES.map(async ([n]) => [n, await preview(n, 1600)])));
  const pick = (i: number) => IMAGES[i % IMAGES.length];
  const items: Item[] = [];

  series.forEach((s, i) => items.push({
    id: `p${i + 1}`, type: 'presentation', title: `${String(i + 1).padStart(2, '0')} ${s.title}`,
    preview: previews[i === 0 ? 'gallery-slide' : pick(i + 2)[0]], previewLarge: large[i === 0 ? 'gallery-slide' : pick(i + 2)[0]], format: 'PPTX', size: i === 0 ? '182 MB' : '',
    language: 'en', series: i + 1, file: config.presentationUrls[i] || undefined,
  }));
  for (let i = 0; i < 64; i++) {
    const [n, title] = pick(i);
    items.push({ id: `i${i + 1}`, type: 'image', title: `${title} ${Math.floor(i / IMAGES.length) + 1}`, preview: previews[n], previewLarge: large[n], format: 'JPG', size: `${(2.1 + (i % 7) * 0.4).toFixed(1)} MB`, language: 'en' });
  }
  for (let i = 0; i < 10; i++) {
    items.push({ id: `v${i + 1}`, type: 'video', title: i === 0 ? 'Series trailer' : `Video clip ${i + 1}`, preview: previews[i === 0 ? 'trailer' : 'gallery-video'], previewLarge: large[i === 0 ? 'trailer' : 'gallery-video'], previewVideo: i === 0 ? withBase('/media/trailer.mp4') : undefined, format: 'MP4', size: `${12 + i * 3} MB`, language: 'en', file: i === 0 ? withBase('/media/trailer.mp4') : undefined });
  }
  const promo: [SlotName, string, string][] = [['gallery-flyer', 'Flyer', 'PDF'], ['gallery-social', 'Social post', 'PNG'], ['demo', 'Billboard', 'PDF'], ['gallery-video', 'Story', 'PNG']];
  for (let i = 0; i < 20; i++) {
    const [n, title, format] = promo[i % promo.length];
    items.push({ id: `m${i + 1}`, type: 'marketing', title: `${title} ${Math.floor(i / promo.length) + 1}`, preview: previews[n], previewLarge: large[n], format, size: `${(1.2 + (i % 5) * 0.8).toFixed(1)} MB`, language: 'en' });
  }
  return items;
}
