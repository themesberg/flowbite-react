'use client';

import type { NextPage } from 'next/types';
import prism from 'prismjs';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
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

const DocsLayout: NextPage<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    // start syntax highlighting once the page is mounted
    prism.highlightAll();
  }, []);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default DocsLayout;
