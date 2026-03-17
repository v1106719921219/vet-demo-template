import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://example.vercel.app'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/reservation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
