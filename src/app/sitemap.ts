import type { MetadataRoute } from 'next'

export const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || 'https://integratherapie.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ]
}
