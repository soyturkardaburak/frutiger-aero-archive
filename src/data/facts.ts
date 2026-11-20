export type Fact = { text: string; source: string; url: string };

export const facts: Fact[] = [
  {
    text: '“Frutiger Aero” is a name from 2017. In 2008 the same pictures were just called Aero, Aqua, gloss, or Web 2.0.',
    source: 'CARI / Wiktionary',
    url: 'https://cari.institute/aesthetics/frutiger-aero',
  },
  {
    text: 'Adrian Frutiger’s Frutiger typeface was released in 1976 for the signage at Charles de Gaulle Airport.',
    source: 'Frutiger (typeface)',
    url: 'https://en.wikipedia.org/wiki/Frutiger_(typeface)',
  },
  {
    text: 'Windows Vista reached consumers on 30 January 2007. Its glass desktop was drawn by the Desktop Window Manager.',
    source: 'Windows Vista',
    url: 'https://en.wikipedia.org/wiki/Windows_Vista',
  },
  {
    text: 'Microsoft expanded the Aero name as Authentic, Energetic, Reflective, and Open.',
    source: 'Windows Aero',
    url: 'https://en.wikipedia.org/wiki/Windows_Aero',
  },
  {
    text: 'Windows 7 kept the glass and went on sale to the public on 22 October 2009.',
    source: 'Windows 7',
    url: 'https://en.wikipedia.org/wiki/Windows_7',
  },
  {
    text: 'Tim O’Reilly published “What Is Web 2.0” on 30 September 2005. Glossy marketing followed the phrase.',
    source: 'O’Reilly',
    url: 'https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html',
  },
  {
    text: 'Windows 8 shipped on 26 October 2012 with flat tiles. iOS 7 followed on 18 September 2013 and retired a lot of skeuomorphic texture.',
    source: 'iOS 7 / Windows 8',
    url: 'https://www.apple.com/newsroom/2013/09/18iOS-7-Available-Tomorrow-as-a-Free-Software-Update/',
  },
  {
    text: 'Segoe UI, the default Windows Vista face, is a humanist sans. That family resemblance is why the later nickname borrows Frutiger’s name.',
    source: 'Segoe',
    url: 'https://en.wikipedia.org/wiki/Segoe',
  },
];

export function factForDay(date = new Date()): Fact {
  const start = Date.UTC(date.getFullYear(), 0, 0);
  const day = Math.floor((date.getTime() - start) / 86400000);
  return facts[((day % facts.length) + facts.length) % facts.length];
}
