import mdx from '@next/mdx';
import slug from 'rehype-slug';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    scrollRestoration: true,
  },
  pageExtensions: ['mdx', 'tsx'],
  reactStrictMode: true,
  webpack(config) {
    // Retain React FC display names and anonymous function bodies for docs
    config.optimization.minimize = false;
    return config;
  },
  async redirects() {
    return [
      {
        source: '/alerts',
        destination: '/docs/components/alert',
        permanent: true,
      },
      {
        source: '/accordion',
        destination: '/docs/components/accordion',
        permanent: true,
      },
      {
        source: '/avatar',
        destination: '/docs/components/avatar',
        permanent: true,
      },
      {
        source: '/badges',
        destination: '/docs/components/badge',
        permanent: true,
      },
      {
        source: '/buttons',
        destination: '/docs/components/button',
        permanent: true,
      },
      {
        source: '/button-group',
        destination: '/docs/components/button-group',
        permanent: true,
      },
      {
        source: '/card',
        destination: '/docs/components/card',
        permanent: true,
      },
      {
        source: '/carousel',
        destination: '/docs/components/carousel',
        permanent: true,
      },
      {
        source: '/dropdown',
        destination: '/docs/components/dropdown',
        permanent: true,
      },
      {
        source: '/forms',
        destination: '/docs/components/forms',
        permanent: true,
      },
      {
        source: '/footer',
        destination: '/docs/components/footer',
        permanent: true,
      },
      {
        source: '/list-group',
        destination: '/docs/components/list-group',
        permanent: true,
      },
      {
        source: '/modal',
        destination: '/docs/components/modal',
        permanent: true,
      },
      {
        source: '/navbars',
        destination: '/docs/components/navbar',
        permanent: true,
      },
      {
        source: '/pagination',
        destination: '/docs/components/paginat',
        permanent: true,
      },
      {
        source: '/progress',
        destination: '/docs/components/progress',
        permanent: true,
      },
      {
        source: '/rating',
        destination: '/docs/components/rating',
        permanent: true,
      },
      {
        source: '/sidebar',
        destination: '/docs/components/sidebar',
        permanent: true,
      },
      {
        source: '/spinners',
        destination: '/docs/components/spinner',
        permanent: true,
      },
      {
        source: '/tables',
        destination: '/docs/components/table',
        permanent: true,
      },
      {
        source: '/tabs',
        destination: '/docs/components/tabs',
        permanent: true,
      },
      {
        source: '/timeline',
        destination: '/docs/components/timeline',
        permanent: true,
      },
      {
        source: '/theme',
        destination: '/docs/customize/theme',
        permanent: true,
      },
      {
        source: '/toast',
        destination: '/docs/components/toast',
        permanent: true,
      },
      {
        source: '/tooltips',
        destination: '/docs/components/tooltip',
        permanent: true,
      },
    ];
  },
};

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [slug],
  },
});

export default withMDX(nextConfig);
