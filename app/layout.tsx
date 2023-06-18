import type { Metadata, NextPage } from 'next/types';

import { Inter as InterFont } from 'next/font/google';
import type { FC, PropsWithChildren } from 'react';
import '~/app/docs.css';
import '~/app/style.css';

const interFont = InterFont({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  description: 'Official React components built for Flowbite and Tailwind CSS',
  icons: '/favicon.svg',
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
    <html lang="en" className={`${interFont.variable} font-sans`}>
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
