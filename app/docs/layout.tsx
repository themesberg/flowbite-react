'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { NextPage } from 'next/types';
import type { FC, PropsWithChildren } from 'react';
import { useRef, useState } from 'react';
import { BsDiscord, BsGithub } from 'react-icons/bs';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { SiStorybook } from 'react-icons/si';
import '~/app/docs.css';
import '~/app/style.css';
import { DarkThemeToggle, Flowbite, Footer, Navbar, Sidebar, Tooltip } from '~/src';

interface LayoutState {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const DocsLayout: NextPage<PropsWithChildren> = function ({ children }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  const state: LayoutState = {
    collapsed,
    setCollapsed,
  };

  return (
    <Flowbite>
      <div className="relative max-h-screen w-full overflow-auto bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
        <DocsNavbar {...state} />
        <div className="lg:flex">
          <DocsSidebar {...state} />
          <main className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible" ref={mainRef}>
            <div className="flex w-full">
              <div className="pb:12 mx-auto flex w-full min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 pt-6 dark:divide-gray-800 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
                {children}
                <DocsFooter />
              </div>
              <div className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
                <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
                  <div className="mb-8">
                    <h4 className="my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                      On this page
                    </h4>
                    <nav>
                      <ul className="space-y-2.5 overflow-x-hidden font-medium text-gray-500 dark:text-gray-400">
                        <li>
                          <a
                            href="#"
                            className='inline-block border-l border-white pl-2.5 transition-none duration-200 after:ml-2 after:text-cyan-700 after:opacity-0 after:transition-opacity after:duration-100 after:content-["#"] hover:border-gray-300 hover:text-gray-900 hover:after:opacity-100 dark:border-gray-900 dark:after:text-cyan-700 dark:hover:border-gray-700 dark:hover:text-white'
                          >
                            Getting started
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Flowbite>
  );
};

const DocsNavbar: FC<LayoutState> = function ({ collapsed, setCollapsed }) {
  return (
    <Navbar
      fluid
      theme={{
        base: 'sticky top-0 z-40 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between w-full mx-auto py-3 px-4',
        inner: {
          base: 'mx-auto flex flex-wrap justify-between items-center w-full',
        },
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

const DocsSidebar: FC<LayoutState> = function ({ collapsed }) {
  return (
    <Sidebar
      collapsed={collapsed}
      collapseBehavior="hide"
      theme={{
        root: {
          base: 'fixed inset-0 z-30 flex-none h-full w-64 lg:static lg:h-auto border-r border-gray-200 dark:border-gray-600 lg:overflow-y-visible lg:pt-0 lg:block hidden',
          inner:
            'overflow-y-auto px-4 pt-20 lg:pt-0 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:mr-0 lg:sticky top-20 font-normal text-base lg:text-sm',
        },
        item: {
          base: 'transition-colors duration-200 relative flex items-center flex-wrap font-medium hover:text-gray-900 hover:cursor-pointer text-gray-500 dark:text-gray-400 dark:hover:text-white',
          active: 'bg-gray-100 dark:bg-gray-700',
          collapsed: {
            insideCollapse: 'group w-full pl-8 transition duration-75',
            noIcon: 'font-bold',
          },
          content: {
            base: 'px-3 flex-1 whitespace-nowrap',
          },
          icon: {
            base: 'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
            active: 'text-gray-700 dark:text-gray-100',
          },
          label: '',
        },
      }}
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <span className="my-4 flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-600">
            Getting started
          </span>
          <Sidebar.Item as={Link} href="/docs">
            Introduction
          </Sidebar.Item>
          <Sidebar.Item href="https://flowbite.com/docs/getting-started/react/">Quickstart</Sidebar.Item>
          <Sidebar.Item href="https://github.com/themesberg/flowbite-react/releases">Changelog</Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <span className="my-4 flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-600">
            Customize
          </span>
          <Sidebar.Item as={Link} href="/docs/theme">
            Theme
          </Sidebar.Item>
          <Sidebar.Item as={Link} href="/docs/components/dark-theme-toggle">
            Dark mode
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        <Sidebar.ItemGroup>
          <span className="my-4 flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-gray-900 hover:text-cyan-700 dark:text-white dark:hover:text-cyan-600">
            Components
          </span>
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

const DocsFooter: FC = () => {
  return (
    <Footer className="rounded-none px-4 pb-8 pt-16 shadow-none lg:px-0">
      <div className="w-full">
        <div className="grid w-full justify-between md:grid-cols-2">
          <div className="mb-4 max-w-sm lg:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image alt="" height="32" src="/favicon.svg" width="32" />
              <span className="text-xl font-semibold text-gray-900 dark:text-gray-100">Flowbite React</span>
            </Link>
            <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Flowbite is an ecosystem built on top of Tailwind CSS including a component library, block sections, a
              Figma design system and other resources.
            </p>
            <p className="mb-3 mt-4 max-w-sm text-gray-600 dark:text-gray-400">
              Code licensed{' '}
              <a
                href="https://github.com/themesberg/flowbite-react/blob/main/LICENSE"
                className="text-cyan-600 hover:underline"
              >
                MIT
              </a>
              , docs{' '}
              <a
                href="https://creativecommons.org/licenses/by/3.0/"
                rel="nofollow noopener noreferrer"
                className="text-cyan-600 hover:underline"
              >
                CC BY 3.0
              </a>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title
                title="Resources"
                className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col className="text-gray-600 dark:text-gray-400">
                <Footer.Link href="https://github.com/themesberg/flowbite-react" className="text-base">
                  GitHub
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/" className="text-base">
                  Flowbite
                </Footer.Link>
                <Footer.Link href="https://tailwindcss.com/" className="text-base">
                  Tailwind CSS
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/figma/" className="text-base">
                  Figma
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Help & Support"
                className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="https://discord.gg/4eeurUVvTy" className="text-base">
                  Discord
                </Footer.Link>
                <Footer.Link href="https://github.com/themesberg/flowbite-react/discussions" className="text-base">
                  Github Discussions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title
                title="Legal"
                className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white"
              />
              <Footer.LinkGroup col>
                <Footer.Link href="https://flowbite.com/license/" className="text-base">
                  License
                </Footer.Link>
                <Footer.Link href="https://flowbite.com/brand/" className="text-base">
                  Brand guideline
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full text-center sm:flex sm:items-center sm:justify-center">
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

export default DocsLayout;
