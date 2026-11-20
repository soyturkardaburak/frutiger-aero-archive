import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';
import { href } from '../lib/paths';

export async function GET(context: APIContext) {
  const posts = (await getCollection('blog')).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return rss({
    title: 'Aero Atlas',
    description: 'A brighter internet, preserved. Essays from the Frutiger Aero Archive.',
    site: new URL(import.meta.env.BASE_URL, context.site).toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.summary,
      link: new URL(href(`blog/${post.slug}/`), context.site).toString(),
    })),
    trailingSlash: true,
  });
}
