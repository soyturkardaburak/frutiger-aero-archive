export type Resource = {
  title: string;
  url: string;
  description: string;
};

export type ResourceGroup = {
  id: string;
  title: string;
  intro: string;
  items: Resource[];
};

export const resourceGroups: ResourceGroup[] = [
  {
    id: 'research',
    title: 'Frutiger Aero research',
    intro: 'The name is recent. These are the places that established it and the exhibit that put it in a museum.',
    items: [
      {
        title: 'CARI — Frutiger Aero',
        url: 'https://cari.institute/aesthetics/frutiger-aero',
        description: 'The Consumer Aesthetics Research Institute entry: namesake, motifs, and the 2005–2013 span used throughout this archive.',
      },
      {
        title: 'University of Waterloo Computer Museum',
        url: 'https://uwaterloo.ca/computer-museum/exhibits/frutiger-aero-future-2000s',
        description: 'A museum exhibit treating the style as the future imagined between 2004 and 2013.',
      },
      {
        title: 'Wiktionary — Frutiger Aero',
        url: 'https://en.wiktionary.org/wiki/Frutiger_Aero',
        description: 'A short etymology that dates the coinage to 2017 and to CARI researcher Sofi Lee.',
      },
      {
        title: 'CARI on Are.na',
        url: 'https://www.are.na/consumer-aesthetics-research-institute/frutiger-aero-ptg8tgmzbig',
        description: 'The Institute’s own image channel, linked from the CARI aesthetic page.',
      },
      {
        title: 'Frutiger Aero Archive — history notes',
        url: 'https://frutigeraeroarchive.org/history',
        description: 'An enthusiast timeline. Useful for Longhorn and Vista context. Read it as a fan history, not as a primary document.',
      },
    ],
  },
  {
    id: 'design-history',
    title: 'Historical design references',
    intro: 'Primary and reference reading for the interfaces that the later nickname gathers together.',
    items: [
      {
        title: 'What Is Web 2.0 — Tim O’Reilly',
        url: 'https://www.oreilly.com/pub/a/web2/archive/what-is-web-20.html',
        description: 'The 30 September 2005 essay. It is about participation and platforms, which is exactly why the visual gloss needs a separate explanation.',
      },
      {
        title: 'Desktop Window Manager',
        url: 'https://learn.microsoft.com/en-us/windows/win32/dwm/dwm-overview',
        description: 'Microsoft’s overview of the compositor that made Aero Glass a desktop feature rather than a painted bitmap.',
      },
      {
        title: 'Windows Aero',
        url: 'https://en.wikipedia.org/wiki/Windows_Aero',
        description: 'A consolidated history of the Vista and Windows 7 theme, including the Authentic, Energetic, Reflective, Open expansion.',
      },
      {
        title: 'Aqua (user interface)',
        url: 'https://en.wikipedia.org/wiki/Aqua_(user_interface)',
        description: 'Apple’s earlier glossy system, introduced in 2000. Related water, different company, earlier date.',
      },
      {
        title: 'The interface behind glass',
        url: 'https://interfacecafe.com/liquid-glass-design-history/',
        description: 'A contemporary essay that quotes the Vista product guide on transparent glass and places Aero in a longer history of frosted interfaces.',
      },
    ],
  },
  {
    id: 'archives',
    title: 'Interface archives',
    intro: 'Long-running galleries of real software chrome. Use them when you want to see a period interface instead of a recreation.',
    items: [
      {
        title: 'Guidebook Gallery',
        url: 'https://www.guidebookgallery.org/',
        description: 'A large screenshot museum of graphical user interfaces, organized by element and by system.',
      },
      {
        title: 'ToastyTech GUI Gallery',
        url: 'https://toastytech.com/guis/',
        description: 'Nathan Lineback’s long-running collection of desktop screenshots, including the Windows versions around Vista.',
      },
      {
        title: 'Web Design Museum',
        url: 'https://www.webdesignmuseum.org/',
        description: 'Dated captures of commercial web design, useful when you want the actual Web 2.0 years rather than a tribute.',
      },
      {
        title: 'Wayback Machine',
        url: 'https://web.archive.org/',
        description: 'The Internet Archive’s record of sites as they looked when the gloss was ordinary.',
      },
    ],
  },
  {
    id: 'type',
    title: 'Typography',
    intro: 'The humanist faces the nickname points at, and the web-safe faces everyday pages actually specified.',
    items: [
      {
        title: 'Frutiger (typeface)',
        url: 'https://en.wikipedia.org/wiki/Frutiger_(typeface)',
        description: 'Adrian Frutiger’s 1976 signage face for Charles de Gaulle Airport, and the root of the aesthetic’s first name.',
      },
      {
        title: 'Segoe',
        url: 'https://en.wikipedia.org/wiki/Segoe',
        description: 'The Microsoft family that includes Segoe UI, the Vista-era system face designed under Steve Matteson.',
      },
      {
        title: 'Segoe UI on Microsoft Learn',
        url: 'https://learn.microsoft.com/en-us/typography/font-list/segoe-ui',
        description: 'Microsoft’s own font specimen for the face that shipped with Windows Vista.',
      },
      {
        title: 'Myriad (typeface)',
        url: 'https://en.wikipedia.org/wiki/Myriad_(typeface)',
        description: 'Adobe’s humanist sans by Robert Slimbach and Carol Twombly, widely used in 2000s technology branding.',
      },
      {
        title: 'Calibri',
        url: 'https://en.wikipedia.org/wiki/Calibri',
        description: 'Lucas de Groot’s default Office 2007 face. A different drawing, the same turn toward softer, more open text.',
      },
    ],
  },
  {
    id: 'pictures',
    title: 'Wallpaper and picture collections',
    intro: 'Places to study the skies, grass, and water that advertisers treated as the natural habitat of a new gadget.',
    items: [
      {
        title: 'Wikimedia Commons',
        url: 'https://commons.wikimedia.org/',
        description: 'The source of the photographs stored with this site. Each picture’s license is recorded on the licensing page.',
      },
      {
        title: 'Commons — blue sky and clouds',
        url: 'https://commons.wikimedia.org/wiki/Category:Blue_sky_with_clouds',
        description: 'A category that shows how common, and how specific, the “clear sky” stock picture really is.',
      },
      {
        title: 'Internet Archive wallpapers and software',
        url: 'https://archive.org/details/software',
        description: 'Old software and CD-ROM material. Check each item’s rights before saving a copy.',
      },
    ],
  },
  {
    id: 'nostalgia',
    title: 'Internet nostalgia',
    intro: 'Wider shelves for the old web, not only the glossy corner of it.',
    items: [
      {
        title: 'Internet Archive',
        url: 'https://archive.org/',
        description: 'The practical way to revisit a 2008 homepage, a manual, or a forgotten product film.',
      },
      {
        title: 'Oldweb.today via the Wayback Machine',
        url: 'https://web.archive.org/',
        description: 'Look up a company site from 2006–2010 and compare its gradients with what replaced them.',
      },
    ],
  },
  {
    id: 'related',
    title: 'Related aesthetics',
    intro: 'Neighboring names. They share a decade or a mood, and they are not the same style.',
    items: [
      {
        title: 'Consumer Aesthetics Research Institute',
        url: 'https://cari.institute/',
        description: 'The catalog that named Frutiger Aero and many of the styles around it. Start here before following a nickname.',
      },
      {
        title: 'Skeuomorph',
        url: 'https://en.wikipedia.org/wiki/Skeuomorph',
        description: 'The broader idea of an interface that imitates a physical material. Gloss can be skeuomorphic, but a shine is not automatically a metaphor.',
      },
      {
        title: 'Flat design',
        url: 'https://en.wikipedia.org/wiki/Flat_design',
        description: 'The reaction that made reflections look dated after Windows 8 and iOS 7.',
      },
    ],
  },
];
