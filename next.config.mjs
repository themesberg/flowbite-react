import mdx from '@next/mdx';
import slug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
    swcFileReading: true,
  },
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
  },
});

export default withMDX(nextConfig);
