/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  output: 'export',
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      config.output.publicPath = 'https://hatchcloud.github.io/animation_mask/';
    }
    return config;
  },
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: { unoptimized: true }
}

module.exports = nextConfig