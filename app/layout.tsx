import type { Metadata, NextPage } from 'next/types';

import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';
import '~/app/docs.css';
import '~/app/style.css';
import Fathom from './components/fathom';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  icons: '/favicon.svg',
  description: 'Official React components built for Flowbite and Tailwind CSS',
  other: {
    charSet: 'utf-8',
    lang: 'en',
  },
  title: 'Flowbite React - UI Component Library',
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  openGraph: {
    description:
      'Flowbite React is an open-source UI component library built with React components, Tailwind CSS utility classes and based on the Flowbite design system and components.',
    images: 'https://flowbite-react.vercel.app/favicon.svg',
    title: 'Flowbite React - UI Component Library',
  },
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <Fathom />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
