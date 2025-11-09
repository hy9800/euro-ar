import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-ar.euroqst.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ar.euroqst.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['api-ar.euroqst.com', 'ar.euroqst.com'],
  },
};


export default nextConfig;
