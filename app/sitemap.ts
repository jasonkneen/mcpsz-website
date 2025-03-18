import { MetadataRoute } from 'next'

// Add this line to specify the dynamic behavior
export const dynamic = "force-static";

// Add this line to configure revalidation (in seconds)
export const revalidate = 3600; // Revalidate every hour

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mcpz.run'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]
}