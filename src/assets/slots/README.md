# Image slots

Drop an image here, named after its slot, and rebuild. The CSS placeholder is
replaced by an optimized `<picture>` (AVIF + WebP + JPEG fallback).

| File name (any of .jpg .jpeg .png .webp .avif) | Where | Recommended size |
| --- | --- | --- |
| `hero` | Hero key visual (full-bleed background) | 2560 x 1440 |
| `trailer` | Trailer cover (16:9 on desktop, cropped to 4:5 on phones) | 2320 x 1305 |
| `gallery-slide` | Gallery, large tile | 1600 x 800 |
| `gallery-flyer` | Gallery, tall tile | 800 x 800 |
| `gallery-art` | Gallery, small tile | 800 x 400 |
| `gallery-video` | Gallery, small tile | 800 x 400 |
| `gallery-social` | Gallery, small tile | 800 x 400 |
| `demo-flyer` | Demo fan, left card (8.5:11) | 360 x 466 |
| `demo-slide` | Demo fan, middle card (16:9) | 680 x 383 |
| `demo-image` | Demo fan, right card (1:1) | 340 x 340 |
| `team` | About, team portrait (4:5, arched top) | 880 x 1100 |
| `og` | Social share image (cropped to 1200 x 630) | 1200 x 630 |

Images are cropped with `object-fit: cover`, so keep the subject near the center.
Alt text for each slot lives in `src/content/site.ts`.
