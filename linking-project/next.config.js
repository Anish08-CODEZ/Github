/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { weight: ['400', '500', '600', '700'], subsets: ['latin'] } }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**'
      },
      {
        protocol: 'https',
        hostname: 'tailwindui',
        port: '',
        pathname: '/img/logos/**'
      }
    ]
  }
}

module.exports = nextConfig
