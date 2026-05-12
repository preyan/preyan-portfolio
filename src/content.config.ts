import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
    stack: z.array(z.string()).readonly(),
    liveUrl: z.string().url().optional(),
    codeUrl: z.string().url(),
    npmUrl: z.string().url().optional(),
    status: z.enum(['live', 'archived', 'wip']),
    featured: z.boolean().default(false),
    order: z.number().int().positive(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    readingTime: z.string().optional(),
  }),
});

export const collections = { projects, blog };
