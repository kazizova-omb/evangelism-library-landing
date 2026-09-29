// Files offered on the download page. Replace with the real kit.
//
// Where each file comes from (first that applies):
//   1. r2Key  -> streamed from the R2 bucket bound as KIT (recommended; links never expose the file)
//   2. url    -> redirect to an external address (Google Drive, Dropbox, CDN...)
//   3. neither -> a small placeholder text file (test mode)
export interface KitFile {
  id: string;
  label: { en: string; es: string };
  size: string;
  r2Key?: string;
  url?: string;
}

export const KIT_FILES: KitFile[] = [
  { id: 'presentations', label: { en: 'Presentations (PowerPoint, Keynote, Google Slides)', es: 'Presentaciones (PowerPoint, Keynote, Google Slides)' }, size: 'ZIP · 1.2 GB', r2Key: 'kit/presentations.zip' },
  { id: 'images', label: { en: 'Images', es: 'Imágenes' }, size: 'ZIP · 850 MB', r2Key: 'kit/images.zip' },
  { id: 'videos', label: { en: 'Videos', es: 'Videos' }, size: 'ZIP · 2.4 GB', r2Key: 'kit/videos.zip' },
  { id: 'promo', label: { en: 'Promotional materials (posters, social posts, invitations)', es: 'Materiales promocionales (carteles, redes sociales, invitaciones)' }, size: 'ZIP · 320 MB', r2Key: 'kit/promo.zip' },
  { id: 'print', label: { en: 'Handouts, study sheets and certificates', es: 'Folletos, guías de estudio y certificados' }, size: 'ZIP · 60 MB', r2Key: 'kit/print.zip' },
];
