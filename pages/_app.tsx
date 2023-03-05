import type { AppProps } from 'next/app';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import type { NextPage } from 'next/types';
import type { FC } from 'react';
import { useRef, useState } from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { SiStorybook } from 'react-icons/si';
import type { CustomFlowbiteTheme } from '~/src';
import { DarkThemeToggle, Flowbite, Navbar, Sidebar, Tooltip } from '~/src';
import '~/styles/globals.css';

const theme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: 'border-transparent border-y-2 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
    },
  },
  sidebar: {
    root: {
      base: 'h-full bg-inherit',
      inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
    },
  },
};

interface AppState {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const App: NextPage<AppProps> = function ({ Component, pageProps }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const isHomepage = router.pathname === '/';
  const state: AppState = {
    collapsed,
    setCollapsed,
  };

  return (
    <Flowbite theme={{ theme }}>
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <meta charSet="utf-8" />
        <meta lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <AppNavbar {...state} />
        <div className="flex h-full overflow-hidden bg-white dark:bg-gray-900">
          {!isHomepage && <AppSidebar {...state} />}
          <main className="flex-1 overflow-auto p-4" ref={mainRef}>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </Flowbite>
  );
};

const AppNavbar: FC<AppState> = function ({ collapsed, setCollapsed }) {
  const router = useRouter();

  const isHomepage = router.pathname === '/';

  return (
    <Navbar fluid>
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
          className="hidden items-center gap-3 text-2xl font-semibold text-gray-800 dark:text-white lg:flex"
        >
          <Image alt="" aria-hidden height="32" src="/favicon.svg" width="32" />
          Flowbite React
        </Link>
      </div>
      <div className="flex items-center gap-1">
        {isHomepage && (
          <Link
            href="/docs"
            className="rounded-lg p-2.5 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
          >
            Docs
          </Link>
        )}
        <a
          href="https://flowbite.com/docs/getting-started/react/"
          className="rounded-lg p-2.5 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
        >
          Quickstart
        </a>
        <Link
          href="/docs/theme"
          className="rounded-lg p-2.5 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
        >
          Customize
        </Link>
        <a
          href="https://flowbite.com/figma/"
          className="rounded-lg p-2.5 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
        >
          Figma
        </a>
        <a
          href="https://flowbite.com/blog/"
          className="rounded-lg p-2.5 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
        >
          Blog
        </a>
        <a
          href="https://flowbite.com"
          className="rounded-lg p-2.5 text-gray-500 hover:text-blue-700 dark:text-gray-300 dark:hover:text-blue-500"
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

const AppSidebar: FC<AppState> = function ({ collapsed }) {
  return (
    <Sidebar collapsed={collapsed} collapseBehavior="hide">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item as={Link} href="/accordion">
            Accordion
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/alert">
            Alert
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/badge">
            Badge
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/button">
            Button
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/card">
            Card
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default App;
