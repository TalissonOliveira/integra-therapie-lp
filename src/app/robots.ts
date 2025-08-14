import type { MetadataRoute } from 'next'
import { baseUrl } from './sitemap'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/_next/',
        '/private/',
        '*.pdf$',
        '/search',
        '/*?utm_*',
        '/*?ref=*',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: `${baseUrl}`,
  }
}
