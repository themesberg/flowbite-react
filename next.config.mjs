import withMDX from '@next/mdx';

const mdxConfig = withMDX({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    swcFileReading: true,
  },
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
  swcMinify: true,
};

export default withMDX(mdxConfig)(nextConfig);
