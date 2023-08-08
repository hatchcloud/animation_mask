/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp']
  }
}

module.exports = nextConfig


const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}