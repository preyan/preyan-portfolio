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

export const collections = { projects };
