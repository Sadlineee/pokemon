import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

export default nextConfig