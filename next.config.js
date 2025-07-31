/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export', // Commented out for development
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '',
  assetPrefix: '',
}

module.exports = nextConfig 