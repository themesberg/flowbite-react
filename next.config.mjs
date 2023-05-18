import withMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    mdxRs: true,
    swcFileReading: true,
  },
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
};

export default withMDX()(nextConfig);
