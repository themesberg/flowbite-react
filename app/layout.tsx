import { Inter as InterFont } from 'next/font/google';
import type { Metadata, NextPage } from 'next/types';
import type { FC, PropsWithChildren } from 'react';
import { ThemeModeScript } from '~/src';

import '~/styles/globals.css';

const interFont = InterFont({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description:
    'Flowbite React is an open-source UI component library built with React components, Tailwind CSS utility classes and based on the Flowbite design system and components.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  manifest: '/site.webmanifest',
  other: {
    charSet: 'utf-8',
    lang: 'en',
  },
  title: 'Flowbite React - UI Component Library',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    description:
      'Flowbite React is an open-source UI component library built with React components, Tailwind CSS utility classes and based on the Flowbite design system and components.',
    images: 'https://flowbite.s3.amazonaws.com/github/flowbite-react.png',
    title: 'Flowbite React - UI Component Library',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flowbite React - UI component library',
    description:
      'Flowbite React is an open-source UI component library built with React components, Tailwind CSS utility classes and based on the Flowbite design system and components.',
    creator: '@zoltanszogyenyi',
    images: ['https://flowbite.s3.amazonaws.com/github/flowbite-react.png'],
  },
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${interFont.variable} font-sans`}>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        {children}
        <FathomScript />
      </body>
    </html>
  );
};

const FathomScript: FC = () => {
  return <script data-site="UXMSXUQI" defer src="https://cdn.usefathom.com/script.js" />;
};

export default RootLayout;
