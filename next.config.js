/** @type {import('next').NextConfig} */
const nextConfig = {
  // Conditionally set output mode based on deployment target
  output: process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET === 'vercel' ? undefined : 'export',
  
  // Image optimization settings
  images: {
    unoptimized: process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET === 'vercel' ? false : true,
    remotePatterns: process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET === 'vercel' ? [
      {
        protocol: 'https',
        hostname: '**',
      },
    ] : [],
  },
  
  // Webpack configuration
  webpack: (config) => {
    // Add raw-loader for txt files
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });
    
    return config;
  },
  
  // Conditional environment variables based on deployment target
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_DEPLOYMENT_TARGET === 'vercel' 
      ? 'https://mcpsx.vercel.app' 
      : 'https://mcpsx.run',
    NEXT_PUBLIC_DISCOVER_URL: 'https://discover.mcpsx.run',
    NEXT_PUBLIC_NEWS_URL: 'https://news.mcpsx.run',
  },
  
  // Redirects for subdomains
  async redirects() {
    return [
      {
        source: '/discover-redirect',
        destination: process.env.NEXT_PUBLIC_DISCOVER_URL || '/discover',
        permanent: false,
      },
      {
        source: '/news-redirect',
        destination: process.env.NEXT_PUBLIC_NEWS_URL || '/blog',
        permanent: false,
      },
    ];
  },
}

module.exports = nextConfig