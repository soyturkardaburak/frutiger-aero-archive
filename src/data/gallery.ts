import { galleryCategories } from './nav';

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  category: GalleryCategory;
  /** Path under the site root, without a leading slash. */
  src: string;
  alt: string;
  credit: string;
  license: string;
  sourceUrl?: string;
  download: boolean;
  kind: 'photograph' | 'original';
};

export const gallery: GalleryItem[] = [
  {
    id: 'field-clouds',
    title: 'Green field, blue sky',
    description:
      'A photographed meadow under cumulus. This is the kind of horizon that late-2000s wallpapers and technology ads treated as a default weather.',
    category: 'Blue Skies',
    src: 'images/field-clouds.jpg',
    alt: 'A green field under a blue sky with scattered white clouds.',
    credit: 'Photograph by Sjgdzn, via Wikimedia Commons.',
    license: 'CC BY-SA 4.0. Attribution required. Adaptations must stay under a compatible license.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Green_Field_Blue_Sky_Clouds.jpg',
    download: true,
    kind: 'photograph',
  },
  {
    id: 'grass-mara',
    title: 'Grass and open sky',
    description:
      'A wide June horizon from the Maasai Mara. Macro grass and a clear sky were stock-library staples of the glossy advertising years.',
    category: 'Nature and Technology',
    src: 'images/grass-mara.jpg',
    alt: 'Green grass in the foreground and a blue sky with clouds above a distant landscape.',
    credit: 'Photograph by Kandukuru Nagarjun, via Wikimedia Commons. Taken in the Maasai Mara, June 2018.',
    license: 'CC BY 2.0. Attribution required.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Green_grass_and_blue_sky_(42359539310).jpg',
    download: true,
    kind: 'photograph',
  },
  {
    id: 'bubbles-grass',
    title: 'Bubbles over grass',
    description:
      'Soap bubbles drifting above sunlit grass. The picture is often shared as an example of the look; it was made in 2014, after the original commercial period, and it is filed here as a later photograph of the same ingredients.',
    category: 'Water and Bubbles',
    src: 'images/bubbles-grass.jpg',
    alt: 'Sunlit green grass with floating soap bubbles and trees in the distance.',
    credit: 'Photograph by ThePixelman on Pixabay, dedicated CC0, mirrored on Wikimedia Commons.',
    license: 'CC0 1.0. No copyright reserved by the photographer, to the extent the law allows.',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Frutiger_Aero_Bubbles_And_Grass.jpg',
    download: true,
    kind: 'photograph',
  },
  {
    id: 'meadow-study',
    title: 'Meadow, glass, and a low sun',
    description:
      'An original wallpaper study: open sky, a grass field, soap bubbles, and a glass globe. Painted for this archive so the homepage would have a horizon even before any photograph was added.',
    category: 'Wallpapers',
    src: 'art/scene-meadow.svg',
    alt: 'Illustrated blue sky over a green field, with clouds, a sun, floating bubbles, and a glass globe.',
    credit: 'Original illustration for Aero Atlas. Not a historical wallpaper or a product screenshot.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'sky-window',
    title: 'A sky you could put behind a window',
    description:
      'The same horizon, framed as a desktop backdrop. Early high-definition wallpaper sets loved a clean gradient from deep blue down to a pale horizon.',
    category: 'Blue Skies',
    src: 'art/scene-meadow.svg',
    alt: 'Illustrated blue sky with soft white clouds and a bright sun near the horizon.',
    credit: 'Original illustration for Aero Atlas. Not a historical wallpaper.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'water-study',
    title: 'Water, caustics, and a borrowed fish',
    description:
      'A surface study of clear water. The fish is a drawn silhouette, not a nature photograph, and it stands in for the tropical stock imagery that filled phone and camera ads.',
    category: 'Water and Bubbles',
    src: 'art/scene-water.svg',
    alt: 'Illustrated clear blue water with light caustics, bubbles, and a stylized tropical fish.',
    credit: 'Original illustration for Aero Atlas. Not a photograph and not an advertisement.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'bubble-sheet',
    title: 'Bubble sheet',
    description:
      'Soap bubbles were an easy way to say “clean, light, and a little bit scientific.” This sheet is a drawing of that habit.',
    category: 'Water and Bubbles',
    src: 'art/scene-bubbles.svg',
    alt: 'A cluster of translucent soap bubbles with bright highlights on a pale aqua background.',
    credit: 'Original illustration for Aero Atlas.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'glass-study',
    title: 'Glass window, original study',
    description:
      'A recreation of the feeling of an Aero window: translucent title bar, orb buttons, a reflective address strip, and a landscape inside the page. The ribbon on the drawing says it is an archive illustration.',
    category: 'Aero Glass',
    src: 'art/scene-glass.svg',
    alt: 'Original illustration of a translucent blue window frame over a bright landscape, marked as an archive study.',
    credit: 'Original illustration for Aero Atlas. This is not a screenshot of Windows or of any other product.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'interface-study',
    title: 'What a glossy window was trying to do',
    description:
      'The same study, filed with software interfaces. Compare it with the real screenshot archives linked from Resources when you want the historical pixels.',
    category: 'Software Interfaces',
    src: 'art/scene-glass.svg',
    alt: 'Original illustration of a glossy software window with orb buttons and a landscape page.',
    credit: 'Original illustration for Aero Atlas. Not a historical screenshot.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'eco-study',
    title: 'A white pavilion in the grass',
    description:
      'Eco-futurism in one frame: a glassy white curve, a deep lawn, and a sky with nothing industrial in it. Technology advertising used this arrangement constantly, as if the product had already cleaned the air.',
    category: 'Nature and Technology',
    src: 'art/scene-eco.svg',
    alt: 'Illustrated white curved pavilion standing in a green field under a blue sky.',
    credit: 'Original illustration for Aero Atlas. Not a photograph of a real building or an advertisement.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'advert-study',
    title: 'Tomorrow, naturally',
    description:
      'A poster study in the manner of late-2000s technology advertising. The slogan is original to this archive. It is not a reproduction of a campaign.',
    category: 'Futuristic Advertising',
    src: 'art/scene-advert.svg',
    alt: 'Original poster illustration with a glass globe, grass, sky, and the words Tomorrow, naturally.',
    credit: 'Original illustration for Aero Atlas. Not a historical advertisement.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'orb-icons',
    title: 'Orb icons',
    description:
      'A small set of glossy orbs: globe, drop, leaf, sun, and lens. Vista-era icon style liked a single light from the upper left and a floor that reflected the object.',
    category: 'Glossy Icons',
    src: 'art/orbs.svg',
    alt: 'Five glossy spherical icons: a globe, a water drop, a leaf, a sun, and a camera lens.',
    credit: 'Original illustration for Aero Atlas. Not a Microsoft, Apple, or other commercial icon set.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
  {
    id: 'globe-mark',
    title: 'The Aero Atlas mark',
    description:
      'The site mark: a blue-green glass Earth with a hard highlight, drawn to sit beside a 2007-style wordmark.',
    category: 'Glossy Icons',
    src: 'art/logo.svg',
    alt: 'A glossy blue and green glass globe with a bright highlight.',
    credit: 'Original logo drawn for Aero Atlas.',
    license: 'Original work, released with this site’s source.',
    download: true,
    kind: 'original',
  },
];

export function itemForDay(date = new Date()): GalleryItem {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const day = Math.floor((date.getTime() - start) / 86400000);
  return gallery[((day % gallery.length) + gallery.length) % gallery.length];
}
