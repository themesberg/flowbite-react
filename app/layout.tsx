'use client';

import { useRouter } from 'next/router';
import type { NextPage } from 'next/types';
import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/themes/prism-tomorrow.css';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
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
  const router = useRouter();

  useEffect(() => {
    // start syntax highlighting once the page is mounted
    prism.highlightAll();
  }, [router.pathname]);

  return (
    <html lang="en">
      <body>
        <Flowbite>{children}</Flowbite>
      </body>
    </html>
  );
};

export default RootLayout;
