'use client';

import type { NextPage } from 'next/types';
import type { PropsWithChildren } from 'react';
import '~/app/docs.css';
import '~/app/style.css';

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

const RootLayout: NextPage<PropsWithChildren> = function ({ children }) {
  return <div>{children}</div>;
};

export default RootLayout;
