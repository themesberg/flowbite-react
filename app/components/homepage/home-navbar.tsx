import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import { Navbar } from '~/src';
import { DocSearchInput } from '../docsearch-input';
import { NavbarIcons, NavbarLinks } from '../navbar';

export const HomeNavbar: FC = () => {
  return (
    <Navbar
      theme={{
        base: 'sticky top-0 z-40 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between w-full mx-auto py-0',
        inner: {
          base: 'mx-auto flex flex-wrap justify-between items-center w-full xl:max-w-8xl px-4 py-2.5 xl:px-20 max-w-none',
        },
      }}
    >
      <div className="flex items-center gap-3">
        <Link href="/" className="sr-only">
          Flowbite React
        </Link>
        <Link
          aria-hidden
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image alt="" aria-hidden height="32" src="/favicon.svg" width="32" />
          <span>Flowbite React</span>
        </Link>
        <div className="ml-4 hidden lg:flex">
          <DocSearchInput />
        </div>
      </div>
      <div className="flex items-center">
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </Navbar>
  );
};
