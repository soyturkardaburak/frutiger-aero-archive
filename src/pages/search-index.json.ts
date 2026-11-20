import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { href } from '../lib/paths';

function plain(value: string): string {
  return value.replace(/[#>*_\[\]()`]/g, ' ').replace(/\s+/g, ' ').trim();
}

export const GET: APIRoute = async () => {
  const wiki = await getCollection('wiki');
  const blog = await getCollection('blog');
  const pages = [
    { title: 'Home', url: href(''), kind: 'Page', summary: 'Welcome to Aero Atlas, the Frutiger Aero archive.', text: 'home welcome archive frutiger aero' },
    { title: 'The Aesthetic', url: href('aesthetic/'), kind: 'Guide', summary: 'An illustrated guide to the glossy technology look of about 2004 to 2013.', text: 'aesthetic gloss glass skeuomorphism aqua aero sky grass' },
    { title: 'Gallery', url: href('gallery/'), kind: 'Gallery', summary: 'Original studies of skies, water, glass, icons, and posters.', text: 'gallery wallpaper bubbles icons advertising' },
    { title: 'Timeline', url: href('timeline/'), kind: 'Timeline', summary: 'A sourced timeline from Aqua to the 2017 nickname.', text: 'timeline vista windows 7 ios flat design' },
    { title: 'Resources', url: href('resources/'), kind: 'Links', summary: 'Research, interface archives, type, and picture collections.', text: 'resources cari waterloo oreilly type commons' },
    { title: 'Image licenses', url: href('licensing/'), kind: 'Page', summary: 'Credits and licenses for pictures stored with the archive.', text: 'license credit creative commons original illustration' },
    { title: 'About', url: href('about/'), kind: 'Page', summary: 'What Aero Atlas is and how the personal note is edited.', text: 'about passion project github pages astro' },
  ];
  const records = [
    ...pages,
    ...wiki.map((entry) => ({
      title: entry.data.title,
      url: href(`wiki/${entry.slug}/`),
      kind: 'Encyclopedia',
      summary: entry.data.summary,
      text: plain(`${entry.data.title} ${entry.data.summary} ${entry.data.tags.join(' ')} ${entry.data.category} ${entry.body}`),
    })),
    ...blog.map((entry) => ({
      title: entry.data.title,
      url: href(`blog/${entry.slug}/`),
      kind: 'Journal',
      summary: entry.data.summary,
      text: plain(`${entry.data.title} ${entry.data.summary} ${entry.data.tags.join(' ')} ${entry.body}`),
    })),
  ];
  return new Response(JSON.stringify(records), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
