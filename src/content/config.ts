// 1. Import utilities from `astro:content`
import { z, defineCollection, reference } from 'astro:content'

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string().max(200),
      image: z.object({ src: image(), alt: z.string() }),
      publishDate: z.string().transform(str => new Date(str)),
      author: reference('team'),
      category: z.string(),
      tags: z.array(z.string()),
    }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = { blog: blogCollection }
