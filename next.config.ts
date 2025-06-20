import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
      },
    ];
  },
  images: {
    domains: ['pub-e292ef2c981c41ddb874365aaf43390c.r2.dev'],
  },
};

export default withVanillaExtract(nextConfig);
