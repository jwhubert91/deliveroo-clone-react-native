import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const sanityClient = createClient({
  projectId: "p50y2faq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source) => builder.image(source)

// RUN THIS to add exception for localhost 3000 CORS policy
// cd sanity -> $ sanity cors add http:/localhost:3000

export { sanityClient }
