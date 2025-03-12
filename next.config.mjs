let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

// Set the correct base path and asset prefix for GitHub Pages
const isProd = process.env.NODE_ENV === 'production';
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubActions ? '/mcpsx-web' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    
  },
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', 
  assetPrefix: basePath,
  basePath: basePath,
  // Add custom webpack config to ensure assets are correctly prefixed
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Set the publicPath for static assets in production
      config.output.publicPath = `${basePath}/_next/`;
    }
    return config;
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
