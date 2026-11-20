export const mainNav = [
  { href: '', label: 'Home', icon: 'home' },
  { href: 'aesthetic/', label: 'The Aesthetic', icon: 'sun' },
  { href: 'wiki/', label: 'Wiki', icon: 'book' },
  { href: 'gallery/', label: 'Gallery', icon: 'photo' },
  { href: 'blog/', label: 'Blog', icon: 'note' },
  { href: 'timeline/', label: 'Timeline', icon: 'clock' },
  { href: 'resources/', label: 'Resources', icon: 'link' },
  { href: 'about/', label: 'About', icon: 'orb' },
] as const;

export const wikiCategories = ['Foundations', 'Interfaces', 'Graphics', 'Culture'] as const;

export const galleryCategories = [
  'Wallpapers',
  'Aero Glass',
  'Blue Skies',
  'Water and Bubbles',
  'Nature and Technology',
  'Software Interfaces',
  'Glossy Icons',
  'Futuristic Advertising',
] as const;
