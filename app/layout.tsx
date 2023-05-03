'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Metadata, NextPage } from 'next/types';
import type { FC, PropsWithChildren } from 'react';
import { useRef, useState } from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { SiStorybook } from 'react-icons/si';
import '~/app/style.css';
import '~/app/docs.css';
import { DarkThemeToggle, Flowbite, Footer, Navbar, Tooltip } from '~/src';

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

interface LayoutState {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const RootLayout: NextPage<PropsWithChildren> = function ({ children }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  const state: LayoutState = {
    collapsed,
    setCollapsed,
  };

  return (
    <Flowbite>
      <div className="max-h-screen overflow-auto relative w-full bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 antialiased">
        <MainNavbar {...state} />
        <div className="lg:flex">
          <main className="flex-auto min-w-0 lg:static lg:max-h-full lg:overflow-visible divide-y dark:divide-gray-700" ref={mainRef}>
            {children}
            <MainFooter />
          </main>
        </div>
      </div>
    </Flowbite>
  );
};

const MainNavbar: FC<LayoutState> = function ({ collapsed, setCollapsed }) {
  return (
    <Navbar
      fluid
      theme={{
        base: 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-200 dark:border-gray-700 flex items-center justify-between w-full mx-auto py-2.5 px-4 max-w-8xl lg:px-20 px-4 sticky',
        inner: {
          base: 'mx-auto flex flex-wrap justify-between items-center w-full'
        }
      }}
    >
      <div className="flex items-center gap-3">
        {collapsed ? (
          <span className="p-2 lg:hidden">
            <HiMenuAlt1
              aria-label="Open sidebar"
              className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300"
              onClick={() => setCollapsed(!collapsed)}
            />
          </span>
        ) : (
          <span className="rounded p-2 dark:bg-gray-700 lg:hidden">
            <HiX
              aria-label="Close sidebar"
              className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300"
              onClick={() => setCollapsed(!collapsed)}
            />
          </span>
        )}
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
      </div>
      <div className="hidden items-center gap-1 lg:flex">
        <a
          href="https://flowbite.com/docs/getting-started/react/"
          className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
        >
          Quickstart
        </a>
        <Link
          href="/docs/theme"
          className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
        >
          Customize
        </Link>
        <a
          href="https://flowbite.com/figma/"
          className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
        >
          Figma
        </a>
        <a
          href="https://flowbite.com/blog/"
          className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
        >
          Blog
        </a>
        <a
          href="https://flowbite.com"
          className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
        >
          Flowbite
        </a>
        <Link
          href="/storybook"
          className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <Tooltip content="Browse Storybook">
            <SiStorybook aria-hidden className="h-5 w-5" />
          </Tooltip>
        </Link>
        <a
          href="https://github.com/themesberg/flowbite-react"
          className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <Tooltip content="View on GitHub">
            <BsGithub aria-hidden className="h-5 w-5" />
          </Tooltip>
        </a>
        <a
          href="https://discord.gg/4eeurUVvTy"
          className="rounded-lg p-2.5 text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        >
          <Tooltip content="Join community on Discord">
            <BsDiscord aria-hidden className="h-5 w-5" />
          </Tooltip>
        </a>
        <Tooltip content="Toggle dark mode">
          <DarkThemeToggle />
        </Tooltip>
      </div>
    </Navbar>
  );
};

const MainFooter: FC = () => {
  return (
    <Footer className="rounded-none pb-8 pt-16 shadow-none">
      <div className="w-full max-w-8xl mx-auto px-4 lg:px-20">
        <div className="grid gap-8 w-full justify-between md:grid-cols-2">
          <div className='max-w-sm mb-4 lg:mb-0'>
            <Link href="/" className="flex items-center gap-3">
              <Image alt="" height="32" src="/favicon.svg" width="32" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Flowbite React</span>
            </Link>
            <p className="max-w-sm mb-3 text-gray-600 dark:text-gray-400 mt-4">
              Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a
              Figma design system and other resources.
            </p>
            <p className="max-w-sm mb-3 text-gray-600 dark:text-gray-400 mt-4">
              Code licensed <a href="https://github.com/themesberg/flowbite-react/blob/main/LICENSE" className='text-cyan-600 hover:underline'>MIT</a>, docs <a href="https://creativecommons.org/licenses/by/3.0/" rel='nofollow noopener noreferrer' className='text-cyan-600 hover:underline'>CC BY 3.0</a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Resources" className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white' />
              <Footer.LinkGroup col className='text-gray-600 dark:text-gray-400'>
                <Footer.Link href="https://github.com/themesberg/flowbite-react" className='text-base'>GitHub</Footer.Link>
                <Footer.Link href="https://flowbite.com/" className='text-base'>Flowbite</Footer.Link>
                <Footer.Link href="https://tailwindcss.com/" className='text-base'>Tailwind CSS</Footer.Link>
                <Footer.Link href="https://flowbite.com/figma/" className='text-base'>Figma</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Help & Support" className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href="https://discord.gg/4eeurUVvTy" className='text-base'>Discord</Footer.Link>
                <Footer.Link href="https://github.com/themesberg/flowbite-react/discussions" className='text-base'>Github Discussions</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className='mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white' />
              <Footer.LinkGroup col>
                <Footer.Link href="https://flowbite.com/license/" className='text-base'>License</Footer.Link>
                <Footer.Link href="https://flowbite.com/brand/" className='text-base'>Brand guideline</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center text-center">
          <Footer.Copyright
            by="All Rights Reserved. Flowbite™ is a registered trademark."
            href="/"
            year={2023}
            className="!text-base"
          />
        </div>
      </div>
    </Footer>
  );
};

export default RootLayout;
