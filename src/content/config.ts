import { defineCollection, z } from 'astro:content';

const wiki = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    order: z.number(),
    category: z.enum(['Foundations', 'Interfaces', 'Graphics', 'Culture']),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    imageCredit: z.string(),
    related: z.array(z.string()),
    featured: z.boolean().default(false),
    infobox: z.object({
      period: z.string(),
      alsoCalled: z.string(),
      field: z.string(),
    }),
    references: z.array(
      z.object({
        title: z.string(),
        url: z.string().url(),
      }),
    ),
    updated: z.coerce.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    author: z.string().default('Aero Atlas'),
    category: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    imageCredit: z.string(),
  }),
});

export const collections = { wiki, blog };
