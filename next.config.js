/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  output: 'export',
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  }
}

module.exports = nextConfig

const path = require('path')
