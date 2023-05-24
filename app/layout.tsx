'use client';

import type { NextPage } from 'next/types';

import type { PropsWithChildren } from 'react';
import '~/app/docs.css';
import '~/app/style.css';
import { Flowbite } from '~/src';

// export const metadata: Metadata = {
//   icons: '/favicon.svg',
//   other: {
//     description: 'Official React components built for Flowbite and Tailwind CSS',
//     charSet: 'utf-8',
//     lang: 'en',
//     title: 'Flowbite React',
//     viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
//   },
// };

const RootLayout: NextPage<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <Flowbite>{children}</Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
