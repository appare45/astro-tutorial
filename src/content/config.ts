import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    author: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    tags: z.array(z.string()),
  })
})

export const collection = {
  "posts": postsCollection
}
