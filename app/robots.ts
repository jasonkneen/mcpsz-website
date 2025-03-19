import { MetadataRoute } from 'next'

// Add this line to specify the dynamic behavior
export const dynamic = "force-static";

// Add this line to configure revalidation (in seconds)
export const revalidate = 3600; // Revalidate every hour

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://mcpz.tools/sitemap.xml',
  }
}