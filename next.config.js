/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  }
}

module.exports = {
  ...nextConfig,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',  
        port: '',
        pathname: '**',
      },
    ],
  },
}