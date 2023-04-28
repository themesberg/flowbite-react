import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  icons: '/favicon.svg',
  other: {
    description: 'Official React components built for Flowbite and Tailwind CSS',
    charSet: 'utf-8',
    lang: 'en',
    title: 'Flowbite React',
    viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  },
};

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
