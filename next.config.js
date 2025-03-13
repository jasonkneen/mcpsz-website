/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    // Add raw-loader for txt files
    config.module.rules.push({
      test: /\.txt$/,
      use: 'raw-loader',
    });
    
    return config;
  },
}

module.exports = nextConfig