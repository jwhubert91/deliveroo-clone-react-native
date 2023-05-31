import { SanityClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = SanityClient({
  projectId: "znws132h",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)

// RUN THIS to add exception for localhost 3000 CORS policy
// cd sanity -> $ sanity cors add http:/localhost:3000

export default client
