import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const blogCollection = defineCollection({
  loader: glob({
    base: './src/content/blog',
    pattern: '**/*.{md,mdx}',
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string().max(200),
      image: z.object({ src: image(), alt: z.string() }),
      publishDate: z.string().transform(str => new Date(str)),
      author: z.string(),
      category: z.string(),
      tags: z.array(z.string()),
    }),
})

export const collections = { blog: blogCollection }