// Sample data for the download portal's test mode (no PUBLIC_API_URL yet), taken from the portal design
// mock-up so the screens can be reviewed before Sergiy's backend and the real image table exist.
// Image files: public/portal-sample/. Replaced by the API responses once the backend is connected.
import type { LibraryImage, LibraryCategory, Materials } from '../scripts/api';

const B = import.meta.env.BASE_URL.replace(/\/$/, '');
const T = (id: string) => `${B}/portal-sample/${id}.webp`;

const RAW: LibraryImage[] = [
  {
    "id": "img_9f3a71",
    "title": "Four Horsemen of the Apocalypse",
    "image": "/portal-sample/img_9f3a71.webp",
    "preview": "/portal-sample/img_9f3a71.webp",
    "book": "Revelation",
    "chapter": 6,
    "chapterName": "The Seals",
    "ref": "Revelation 6:1-8",
    "testament": "New",
    "categories": [],
    "tags": [
      "horsemen",
      "revelation",
      "eschatology",
      "horses",
      "fire",
      "cinematic",
      "drama",
      "epic"
    ],
    "desc": "Four horsemen charge across cracked earth beneath a stormy sky: a crowned king on a white horse with a bow, a bloodied warrior on a red horse, a figure holding scales on a black horse, and Death with a scythe on a pale horse.",
    "group": "Biblical Scenes",
    "sub": "Apocalypse",
    "dims": "2042 × 1132",
    "size": "3.83 MB",
    "date": "March 14, 2025",
    "views": 1284,
    "downloads": 96,
    "license": "CC BY-NC 4.0",
    "model": "Midjourney",
    "modelVersion": "v6.1 · RAW",
    "prompt": "The Four Horsemen of the Apocalypse riding across cracked scorched earth, dramatic stormy sky, epic cinematic composition, embers and ash in the air, volumetric light, hyper detailed, photorealistic, 8k --ar 16:9 --style raw --v 6.1"
  },
  {
    "id": "img_2b7c04",
    "title": "The Crowned Archer",
    "image": "/portal-sample/img_2b7c04.webp",
    "preview": "/portal-sample/img_2b7c04.webp",
    "book": "Revelation",
    "chapter": 6,
    "chapterName": "The Seals",
    "ref": "Revelation 6:1-2",
    "testament": "New",
    "categories": [],
    "tags": [
      "white horse",
      "archer",
      "crown",
      "conquest",
      "bow",
      "armor"
    ],
    "desc": "A crowned rider on a white horse draws a bow, going out to conquer. Warm gilded light, dust and ash around the hooves.",
    "group": "Biblical Scenes",
    "sub": "Conquest",
    "dims": "1456 × 1160",
    "size": "2.41 MB",
    "date": "March 14, 2025",
    "views": 842,
    "downloads": 51,
    "license": "CC BY-NC 4.0",
    "model": "Midjourney",
    "modelVersion": "v6.1",
    "prompt": "A crowned king on a white horse drawing a bow, first horseman of the apocalypse, golden light, dust and embers, cinematic portrait, photorealistic --ar 5:4 --v 6.1"
  },
  {
    "id": "img_c51e9d",
    "title": "War on the Red Horse",
    "image": "/portal-sample/img_c51e9d.webp",
    "preview": "/portal-sample/img_c51e9d.webp",
    "book": "Revelation",
    "chapter": 6,
    "chapterName": "The Seals",
    "ref": "Revelation 6:3-4",
    "testament": "New",
    "categories": [
      "daniel3"
    ],
    "tags": [
      "red horse",
      "war",
      "sword",
      "blood",
      "warrior",
      "cape"
    ],
    "desc": "The second horseman, a bloodied warrior raising a sword astride a red horse, given power to take peace from the earth.",
    "group": "Biblical Scenes",
    "sub": "War",
    "dims": "1344 × 1152",
    "size": "2.72 MB",
    "date": "March 15, 2025",
    "views": 1033,
    "downloads": 74,
    "license": "CC BY-NC 4.0",
    "model": "Flux",
    "modelVersion": "1.1 Pro",
    "prompt": "A bloodied warrior in armor raising a great sword on a red horse, second horseman War, high contrast, crimson tones, cinematic, photorealistic --ar 7:6"
  },
  {
    "id": "img_47af18",
    "title": "The Scales of Judgment",
    "image": "/portal-sample/img_47af18.webp",
    "preview": "/portal-sample/img_47af18.webp",
    "book": "Revelation",
    "chapter": 6,
    "chapterName": "The Seals",
    "ref": "Revelation 6:5-6",
    "testament": "New",
    "categories": [],
    "tags": [
      "black horse",
      "scales",
      "judgment",
      "famine",
      "hooded",
      "balance"
    ],
    "desc": "A hooded figure on a black horse lifts a pair of golden scales, the third horseman weighing the harvest of the earth.",
    "group": "Biblical Scenes",
    "sub": "Famine",
    "dims": "1360 × 1152",
    "size": "2.55 MB",
    "date": "March 16, 2025",
    "views": 690,
    "downloads": 38,
    "license": "CC BY-NC 4.0",
    "model": "Midjourney",
    "modelVersion": "v6",
    "prompt": "A hooded figure holding golden scales on a black horse, third horseman Famine, cold teal shadows, moody atmosphere, photorealistic --ar 7:6 --v 6"
  },
  {
    "id": "img_8e0a63",
    "title": "The Pale Rider",
    "image": "/portal-sample/img_8e0a63.webp",
    "preview": "/portal-sample/img_8e0a63.webp",
    "book": "Revelation",
    "chapter": 6,
    "chapterName": "The Seals",
    "ref": "Revelation 6:7-8",
    "testament": "New",
    "categories": [
      "rev13"
    ],
    "tags": [
      "pale horse",
      "death",
      "scythe",
      "skeletal",
      "hades",
      "ashen"
    ],
    "desc": "Death rides a pale horse with a scythe, the fourth horseman, and Hades follows close behind. Ashen, desaturated palette.",
    "group": "Biblical Scenes",
    "sub": "Death",
    "dims": "1024 × 1024",
    "size": "1.98 MB",
    "date": "March 16, 2025",
    "views": 1510,
    "downloads": 118,
    "license": "CC BY-NC 4.0",
    "model": "Stable Diffusion",
    "modelVersion": "SDXL",
    "prompt": "Skeletal Death with a scythe on a pale horse, fourth horseman, ashen desaturated palette, smoke and ash, ominous, photorealistic --ar 1:1"
  },
  {
    "id": "img_d92f57",
    "title": "Storm Over the Wastes",
    "image": "/portal-sample/img_d92f57.webp",
    "preview": "/portal-sample/img_d92f57.webp",
    "book": "Revelation",
    "chapter": 16,
    "chapterName": "The Bowls",
    "ref": "Revelation 16:18-21",
    "testament": "New",
    "categories": [],
    "tags": [
      "storm",
      "sky",
      "clouds",
      "wasteland",
      "atmosphere",
      "dramatic"
    ],
    "desc": "A vast stormy sky breaks over a cracked wasteland, cold blue light cutting through heavy clouds.",
    "group": "Landscapes",
    "sub": "Apocalypse",
    "dims": "1792 × 960",
    "size": "2.10 MB",
    "date": "March 18, 2025",
    "views": 421,
    "downloads": 22,
    "license": "CC BY-NC 4.0",
    "model": "Ideogram",
    "modelVersion": "2.0",
    "prompt": "A dramatic stormy sky over a cracked apocalyptic wasteland, cold blue light, heavy clouds, wide cinematic landscape, photorealistic --ar 16:9"
  },
  {
    "id": "img_1fa6b2",
    "title": "Embers of the End",
    "image": "/portal-sample/img_1fa6b2.webp",
    "preview": "/portal-sample/img_1fa6b2.webp",
    "book": "Revelation",
    "chapter": 8,
    "chapterName": "The Trumpets",
    "ref": "Revelation 8:6-7",
    "testament": "New",
    "categories": [
      "daniel3"
    ],
    "tags": [
      "embers",
      "ash",
      "fire",
      "ground",
      "sparks",
      "warm"
    ],
    "desc": "Embers and sparks drift over scorched, cracked ground, a warm glowing texture pulled from the battlefield floor.",
    "group": "Textures",
    "sub": "Fire & Ash",
    "dims": "1920 × 640",
    "size": "1.74 MB",
    "date": "March 19, 2025",
    "views": 308,
    "downloads": 19,
    "license": "CC BY-NC 4.0",
    "model": "Flux",
    "modelVersion": "1.1 Pro",
    "prompt": "Glowing embers and sparks over cracked scorched earth, warm amber glow, fine ash particles, macro cinematic texture, photorealistic --ar 3:1"
  },
  {
    "id": "img_6cb830",
    "title": "Conquest Rides Out",
    "image": "/portal-sample/img_6cb830.webp",
    "preview": "/portal-sample/img_6cb830.webp",
    "book": "Zechariah",
    "chapter": 6,
    "chapterName": "Four Chariots",
    "ref": "Zechariah 6:1-8",
    "testament": "Old",
    "categories": [],
    "tags": [
      "white horse",
      "red horse",
      "riders",
      "sepia",
      "duo",
      "charge"
    ],
    "desc": "The first two horsemen charge side by side, rendered in a warm, aged sepia grade.",
    "group": "Biblical Scenes",
    "sub": "Apocalypse",
    "dims": "1536 × 896",
    "size": "2.33 MB",
    "date": "March 20, 2025",
    "views": 565,
    "downloads": 41,
    "license": "CC BY-NC 4.0",
    "model": "Midjourney",
    "modelVersion": "v6.1",
    "prompt": "Two horsemen charging side by side, white and red horses, aged sepia tone, dust and motion, cinematic, photorealistic --ar 16:9 --v 6.1"
  },
  {
    "id": "img_e3d095",
    "title": "Riders in the Ash",
    "image": "/portal-sample/img_e3d095.webp",
    "preview": "/portal-sample/img_e3d095.webp",
    "book": "Joel",
    "chapter": 2,
    "chapterName": "The Day of the Lord",
    "ref": "Joel 2:1-11",
    "testament": "Old",
    "categories": [],
    "tags": [
      "four horsemen",
      "ash",
      "moody",
      "desaturated",
      "wide",
      "ensemble"
    ],
    "desc": "The full company of riders seen wide through drifting ash, in a cool, moody, desaturated grade.",
    "group": "Biblical Scenes",
    "sub": "Apocalypse",
    "dims": "1792 × 1024",
    "size": "2.19 MB",
    "date": "March 21, 2025",
    "views": 732,
    "downloads": 55,
    "license": "CC BY-NC 4.0",
    "model": "DALL·E 3",
    "modelVersion": "HD",
    "prompt": "Four horsemen of the apocalypse seen wide through drifting ash, moody desaturated grade, cool tones, epic ensemble shot, photorealistic --ar 16:9"
  },
  {
    "id": "img_da2stat",
    "title": "The Great Image",
    "image": "/portal-sample/img_da2stat.webp",
    "preview": "/portal-sample/img_da2stat.webp",
    "book": "Daniel",
    "chapter": 2,
    "chapterName": "The Great Image",
    "ref": "Daniel 2",
    "testament": "Old",
    "categories": [
      "daniel2"
    ],
    "tags": [
      "daniel",
      "statue",
      "kingdoms",
      "gold",
      "nebuchadnezzar",
      "prophecy"
    ],
    "desc": "The towering metallic figure of Nebuchadnezzar's dream: head of gold, chest of silver, belly of bronze, legs of iron, feet of iron and clay. A visual anchor for teaching the sweep of prophetic history.",
    "group": "Prophecy",
    "sub": "Daniel's dream statue",
    "dims": "3840 × 2160",
    "size": "6.4 MB",
    "date": "Jun 4, 2026",
    "views": 2100,
    "downloads": 410,
    "license": "CC BY-NC 4.0",
    "model": "Midjourney",
    "modelVersion": "v6.1",
    "prompt": "Colossal statue in a barren valley, golden crowned head, polished silver chest and arms, bronze midsection, dark iron legs, feet of iron mixed with clay, dramatic storm sky, cinematic lighting, hyperreal, 8k"
  },
  {
    "id": "img_dan7bear",
    "title": "The Beast That Devours",
    "image": "/portal-sample/img_dan7bear.webp",
    "preview": "/portal-sample/img_dan7bear.webp",
    "book": "Daniel",
    "chapter": 7,
    "chapterName": "The Four Beasts",
    "ref": "Daniel 7",
    "testament": "Old",
    "categories": [
      "rev13"
    ],
    "tags": [
      "beast",
      "daniel",
      "bear",
      "ribs",
      "sea",
      "prophecy",
      "judgment"
    ],
    "desc": "A monstrous bear-like beast rising from a storm-struck sea with ribs in its mouth, echoing the predatory kingdoms of Daniel 7 and the sea beast imagery of Revelation 13.",
    "group": "Prophecy",
    "sub": "Beast rising from the sea",
    "dims": "1672 × 941",
    "size": "3.1 MB",
    "date": "Jun 4, 2026",
    "views": 1400,
    "downloads": 286,
    "license": "CC BY-NC 4.0",
    "model": "Midjourney",
    "modelVersion": "v6.1",
    "prompt": "Enormous bear-like beast rising from a stormy sea, three ribs in its mouth, lightning, dark apocalyptic sky, hyperreal, cinematic, 8k"
  }
];

export const SAMPLE_IMAGES: LibraryImage[] = RAW.map((d) => ({ ...d, image: B + d.image, preview: B + d.preview }));

/** curated categories over the library (Sergiy's table: a "categories" column) */
export const SAMPLE_CATEGORIES: LibraryCategory[] = [
  { id: 'jesus', label: 'Jesus', thumb: T('prev-pray') },
  { id: 'sanctuary', label: 'Sanctuary', thumb: T('img_1fa6b2') },
  { id: 'daniel2', label: 'Daniel 2', thumb: T('img_da2stat') },
  { id: 'daniel3', label: 'Daniel 3', thumb: T('img_c51e9d') },
  { id: 'rev13', label: 'Revelation 13', thumb: T('prev-bear') },
];

const PPTX = [{ id: 'pptx', label: 'PPTX', hint: 'PowerPoint' }, { id: 'pdf', label: 'PDF', hint: 'Print ready' }, { id: 'gslides', label: 'Slides', hint: 'Google' }];
const VIDEO = [{ id: 'mp4', label: 'MP4', hint: '1080p' }, { id: 'mov', label: 'MOV', hint: 'ProRes' }];
const AUDIO = [{ id: 'mp3', label: 'MP3', hint: '320 kbps' }, { id: 'wav', label: 'WAV', hint: 'Lossless' }];
const MKT = [{ id: 'pdf', label: 'PDF', hint: 'Print' }, { id: 'png', label: 'PNG', hint: 'Digital' }, { id: 'zip', label: 'ZIP', hint: 'Source' }];

export const SAMPLE_MATERIALS: Materials = {
  series: { sessions: 9, files: '40+', formats: 5, size: '2.4 GB', thumb: T('img_da2stat'), formatsList: [{ id: 'zip', label: 'ZIP', hint: 'All files' }] },
  languages: [
    { code: 'en', name: 'English', available: true },
    { code: 'es', name: 'Español', available: false },
    { code: 'pt', name: 'Português', available: false },
    { code: 'fr', name: 'Français', available: false },
  ],
  groups: [
    { id: 'presentations', items: [
      { id: 'p1', cat: 'Daniel', title: 'History Written in Advance', slides: 28, size: '18 MB', thumb: T('img_da2stat'), formats: PPTX },
      { id: 'p2', cat: 'Revelation', title: 'The War Behind the World', slides: 22, size: '15 MB', thumb: T('img_c51e9d'), formats: PPTX },
      { id: 'p3', cat: 'Sanctuary', title: 'The Longest Prophecy and Our High Priest', slides: 31, size: '21 MB', thumb: T('img_2b7c04'), formats: PPTX },
      { id: 'p4', cat: 'Gospel', title: 'The Sign He Never Changed', slides: 19, size: '13 MB', thumb: T('prev-pray'), formats: PPTX },
      { id: 'p5', cat: 'Revelation', title: 'The Final Choice', slides: 24, size: '17 MB', thumb: T('img_8e0a63'), formats: PPTX },
      { id: 'p6', cat: 'Revelation', title: "Heaven's Last Message", slides: 26, size: '18 MB', thumb: T('img_1fa6b2'), formats: PPTX },
      { id: 'p7', cat: 'Gospel', title: 'The Church God Is Looking For', slides: 20, size: '14 MB', thumb: T('img_47af18'), formats: PPTX },
      { id: 'p8', cat: 'Revelation', title: 'The End of Evil', slides: 30, size: '22 MB', thumb: T('img_d92f57'), formats: PPTX },
      { id: 'p9', cat: 'Gospel', title: 'All Things New: Hope Starts Here', slides: 16, size: '11 MB', thumb: T('prev-pray'), formats: PPTX },
    ] },
    { id: 'video', items: [
      { id: 'v1', cat: 'Promo', title: 'Series Trailer', duration: '2:14', size: '84 MB', thumb: T('img_9f3a71'), formats: VIDEO },
      { id: 'v2', cat: 'Sessions', title: 'Episode 1: History Written in Advance', duration: '38:20', size: '1.1 GB', thumb: T('img_da2stat'), formats: VIDEO },
      { id: 'v3', cat: 'Sessions', title: 'Episode 3: Our High Priest', duration: '41:05', size: '1.2 GB', thumb: T('prev-pray'), formats: VIDEO },
      { id: 'v4', cat: 'Promo', title: 'Social Teaser: The Beast', duration: '0:45', size: '22 MB', thumb: T('prev-bear'), formats: VIDEO },
    ] },
    { id: 'marketing', items: [
      { id: 'm1', cat: 'Print', title: 'Invitation Flyer (A5)', fileType: 'PDF', size: '4 MB', thumb: T('img_9f3a71'), formats: MKT },
      { id: 'm2', cat: 'Social', title: 'Social Media Pack', fileType: 'ZIP', size: '38 MB', thumb: T('img_c51e9d'), formats: MKT },
      { id: 'm3', cat: 'Print', title: 'Roll-up Banner 85×200', fileType: 'PDF', size: '26 MB', thumb: T('img_da2stat'), formats: MKT },
      { id: 'm4', cat: 'Social', title: 'Sermon Title Slides Pack', fileType: 'ZIP', size: '44 MB', thumb: T('img_1fa6b2'), formats: MKT },
      { id: 'm5', cat: 'Print', title: 'Invitation Postcard Set', fileType: 'PDF', size: '7 MB', thumb: T('prev-pray'), formats: MKT },
    ] },
    { id: 'audio', items: [
      { id: 'a1', cat: 'Music', title: 'Series Soundtrack (12 tracks)', duration: '48:30', size: '112 MB', thumb: T('img_1fa6b2'), formats: AUDIO },
      { id: 'a2', cat: 'Sermon', title: 'Full Series Audio', duration: '6:12:00', size: '340 MB', thumb: T('img_9f3a71'), formats: AUDIO },
      { id: 'a3', cat: 'Audiobook', title: 'The Book of Daniel (12 chapters)', duration: '2:10:00', size: '313 MB', thumb: T('img_da2stat'), formats: AUDIO },
    ] },
    { id: 'book', items: [
      { id: 'b1', cat: 'Illustrated book', title: 'All Things New: Daniel 2', fileType: 'PDF', size: '50 MB', thumb: T('img_da2stat'), formats: [{ id: 'pdf', label: 'PDF', hint: 'Print ready' }] },
    ] },
  ],
};

export const IMAGE_FORMATS = [{ id: 'png', label: 'PNG', hint: 'Full res' }, { id: 'jpg', label: 'JPEG', hint: 'Compressed' }, { id: 'webp', label: 'WebP', hint: 'For web' }];
