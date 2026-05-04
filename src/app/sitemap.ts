import { MetadataRoute } from 'next'

const BASE_URL = 'https://bowmew-ah.com'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/reservation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
