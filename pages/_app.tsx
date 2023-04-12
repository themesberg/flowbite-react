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
import { DarkThemeToggle, Flowbite, Footer, Navbar, Sidebar, Tooltip } from '~/src';
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
      inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-5',
    },
    item: {
      base: 'flex items-center justify-center pb-1 rounded-lg text-gray-600 hover:text-gray-800 dark:text-gray-100 dark:hover:text-gray-300',
      content: {
        base: 'flex-1 whitespace-nowrap',
      },
    },
    itemGroup: 'mt-4 space-y-2 pt-4 first:mt-0 first:pt-0',
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
      <div className="flex w-full flex-col overflow-hidden">
        <AppNavbar {...state} />
        <div className="flex overflow-hidden bg-white pt-6 dark:bg-gray-900">
          {!isHomepage && <AppSidebar {...state} />}
          <main className="flex-1 overflow-auto p-4" ref={mainRef}>
            <Component {...pageProps} />
          </main>
        </div>
        <AppFooter />
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
        {!isHomepage && collapsed && (
          <span className="p-2 lg:hidden">
            <HiMenuAlt1
              aria-label="Open sidebar"
              className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300"
              onClick={() => setCollapsed(!collapsed)}
            />
          </span>
        )}
        {!isHomepage && !collapsed && (
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
          className="flex items-center gap-3 text-2xl font-semibold text-gray-800 dark:text-white"
        >
          <Image alt="" aria-hidden height="32" src="/favicon.svg" width="32" />
          <span>Flowbite React</span>
        </Link>
      </div>
      <div className="hidden items-center gap-1 lg:flex">
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
          <span className="font-bold uppercase text-gray-800 dark:text-gray-200">Getting started</span>
          <Sidebar.Item as={Link} href="/docs">
            Introduction
          </Sidebar.Item>
          <Sidebar.Item href="https://flowbite.com/docs/getting-started/react/">Quickstart</Sidebar.Item>
          <Sidebar.Item href="https://github.com/themesberg/flowbite-react/releases">Changelog</Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <span className="font-bold uppercase text-gray-800 dark:text-gray-200">Customize</span>
          <Sidebar.Item as={Link} href="/docs/theme">
            Theme
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/dark-theme-toggle">
            Dark mode
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <span className="font-bold uppercase text-gray-800 dark:text-gray-200">Components</span>
          <Sidebar.Item as={Link} href="/docs/components/accordion">
            Accordion
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/alert">
            Alert
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/avatar">
            Avatar
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/badge">
            Badge
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/breadcrumb">
            Breadcrumb
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/button">
            Button
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/card">
            Card
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/carousel">
            Carousel
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/dropdown">
            Dropdown
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/forms">
            Forms
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/list-group">
            List group
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/modal">
            Modal
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/navbar">
            Navbar
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/pagination">
            Pagination
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/progress">
            Progress
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/rating">
            Rating
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/sidebar">
            Sidebar
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/spinner">
            Spinner
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/table">
            Table
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/tabs">
            Tabs
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/toast">
            Toast
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/tooltip">
            Tooltip
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <span className="h-64">&nbsp;</span>
      </Sidebar.Items>
    </Sidebar>
  );
};

const AppFooter: FC = () => {
  return (
    <Footer className="rounded-none px-5 pb-8 pt-16">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <Image alt="" height="32" src="/favicon.svg" width="32" />
              <span className="text-xl font-bold text-gray-800 dark:text-gray-100">Flowbite React</span>
            </Link>
            <p className="mt-6 max-w-lg text-gray-600 dark:text-gray-200">
              Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a
              Figma design system and other resources.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-4 sm:gap-6">
            <div>
              <Footer.Title title="Resources" />
              <Footer.LinkGroup col>
                <Footer.Link href="/docs">Documentation</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Help & support" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://flowbite.com/contact/">Contact us</Footer.Link>
                <Footer.Link href="https://flowbite.com/dashboard/support/">Support Center</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://discord.gg/4eeurUVvTy">Discord</Footer.Link>
                <Footer.Link href="https://github.com/themesberg">Github</Footer.Link>
                <Footer.Link href="https://twitter.com/zoltanszogyenyi">Twitter</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://flowbite.com/license/">License (EULA)</Footer.Link>
                <Footer.Link href="https://flowbite.com/privacy-policy/">Privacy policy</Footer.Link>
                <Footer.Link href="https://flowbite.com/terms-and-conditions/">Terms & Conditions</Footer.Link>
                <Footer.Link href="https://flowbite.com/brand/">Brand guideline</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-center">
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

export default App;
