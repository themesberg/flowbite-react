'use client';

import { DocSearch } from '@docsearch/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { NextPage } from 'next/types';
import prism from 'prismjs';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import type { FC, PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import '~/app/docs.css';
import '~/app/style.css';
import { Accordion, Badge, Flowbite, Footer, Navbar, Sidebar } from '~/src';
import { isClient } from '~/src/helpers/is-client';
import { Banner } from '../components/banner';
import { CarbonAds } from '../components/carbon-ads';
import { NavbarIcons, NavbarLinks } from '../components/navbar';

interface DocsLayoutState {
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

const DocsLayout: NextPage<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  const [isCollapsed, setCollapsed] = useState(true);
  const [tableOfContents, setTableOfContents] = useState('');

  const state: DocsLayoutState = {
    isCollapsed,
    setCollapsed,
  };

  useEffect(() => {
    // syntax-highlight on each re-render, since user may interact with the page
    prism.highlightAll();

    // update client-rendered Table of Contents on each new page
    const toc = document.querySelector('#table-of-contents + ul')?.innerHTML;
    setTableOfContents(toc ?? '');
  }, [pathname]);

  useEffect(() => {
    setCollapsed(window.innerWidth < 768);
  }, [setCollapsed]);

  return (
    <Flowbite>
      <div className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
        <div className="relative max-h-screen w-full overflow-auto bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
          <Banner />
          <DocsNavbar {...state} />
          <div className="lg:flex">
            <DocsSidebar {...state} />
            <div className="w-full min-w-0 flex-auto lg:static lg:max-h-full lg:overflow-visible">
              <div className="flex w-full">
                <div className="pb:12 mx-auto flex min-w-0 max-w-4xl flex-col divide-y divide-gray-200 px-4 pt-6 dark:divide-gray-800 lg:px-8 lg:pb-16 lg:pt-8 xl:pb-24">
                  <main>{children}</main>
                  <DocsFooter />
                  <CarbonAds />
                </div>
                <div className="right-0 hidden w-64 flex-none pl-8 xl:block xl:text-sm">
                  <div className="sticky top-20 flex h-[calc(100vh-5rem)] flex-col justify-between overflow-y-auto pb-6">
                    <div className="mb-8">
                      <h4 className="my-4 pl-2.5 text-sm font-semibold uppercase tracking-wide text-gray-900 dark:text-white">
                        On this page
                      </h4>
                      <nav id="visible-table-of-contents">
                        <ul dangerouslySetInnerHTML={{ __html: tableOfContents }} />
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Flowbite>
  );
};

const DocsNavbar: FC<DocsLayoutState> = ({ isCollapsed, setCollapsed }) => {
  return (
    <Navbar
      fluid
      theme={{
        base: 'sticky top-0 z-[60] bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between w-full mx-auto py-2.5 px-4',
        inner: {
          base: 'mx-auto flex flex-wrap justify-between items-center w-full',
        },
      }}
    >
      <div className="flex items-center">
        {isCollapsed ? (
          <button
            type="button"
            className="-ml-3 mr-1 p-2 lg:ml-0 lg:mr-0 lg:hidden"
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <HiMenuAlt1 aria-label="Open sidebar" className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300" />
          </button>
        ) : (
          <button
            type="button"
            className="-ml-3 mr-1 rounded p-2 dark:bg-gray-700 lg:ml-0 lg:mr-0 lg:hidden"
            onClick={() => setCollapsed(!isCollapsed)}
          >
            <HiX aria-label="Close sidebar" className="h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-300" />
          </button>
        )}
        <Link href="/" className="sr-only">
          Flowbite React
        </Link>
        <Link
          aria-hidden
          href="/"
          className="flex items-center gap-3 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image alt="" height={32} src="/favicon.svg" width={32} className="h-8 w-8" />
          <span>Flowbite React</span>
        </Link>
        <div className="ml-4 hidden lg:flex">
          <DocSearch appId="4ECQXWXLSO" indexName="flowbite-react" apiKey="9c32f687c9058e3d3f27adff654d48d9" />
        </div>
      </div>
      <div className="flex items-center">
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </Navbar>
  );
};

const DocsSidebar: FC<DocsLayoutState> = ({ isCollapsed, setCollapsed }) => {
  const pathname = usePathname();

  // collapse sidebar on small screens when navigating to a new page
  useEffect(() => {
    if (isClient() && window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, [pathname, setCollapsed]);

  return (
    <>
      <div
        className={twMerge(
          'fixed inset-0 z-50 h-full w-64 flex-none border-r border-gray-200 dark:border-gray-600 lg:static lg:block lg:h-auto lg:overflow-y-visible lg:pt-6',
          isCollapsed && 'hidden',
        )}
      >
        <Sidebar
          collapsed={false}
          theme={{
            root: {
              base: 'h-full border-r border-gray-200 dark:border-gray-600',
              inner:
                'overflow-y-auto px-4 pt-20 lg:pt-0 h-full bg-white scrolling-touch max-w-2xs lg:h-[calc(100vh-8rem)] lg:block dark:bg-gray-900 lg:mr-0 lg:sticky top-20 font-normal text-base lg:text-sm',
            },
          }}
        >
          <Sidebar.Items className="grid grid-cols-1 gap-2">
            <Accordion collapseAll={!pathname.includes('/getting-started/')} flush className="border-none">
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    open: {
                      on: 'mb-2 text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                      off: 'mb-1 text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-500',
                    },
                  }}
                  className={twMerge(
                    'flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide',
                    pathname.includes('/getting-started/') &&
                      'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                  )}
                >
                  Getting started
                </Accordion.Title>
                <Accordion.Content className="mb-2 border-none p-0">
                  <Sidebar.ItemGroup className="border-none">
                    <SidebarLink href="/docs/getting-started/introduction">Introduction</SidebarLink>
                    <SidebarLink href="/docs/getting-started/quickstart">Quickstart</SidebarLink>
                    <SidebarLink href="/docs/getting-started/nextjs">
                      <span className="flex items-center gap-2">
                        Next.js{' '}
                        <Badge color="cyan" className="px-2">
                          New
                        </Badge>
                      </span>
                    </SidebarLink>
                    <SidebarLink href="/docs/getting-started/typescript">TypeScript</SidebarLink>
                    <SidebarLink href="/docs/getting-started/license">License</SidebarLink>
                    <SidebarLink href="https://github.com/themesberg/flowbite-react/releases">Changelog</SidebarLink>
                    <SidebarLink href="/docs/getting-started/contributing">Contributing</SidebarLink>
                  </Sidebar.ItemGroup>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll={!pathname.includes('/customize/')} flush className="border-none">
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    open: {
                      on: 'mb-2 text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                      off: 'mb-1 text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-500',
                    },
                  }}
                  className={twMerge(
                    'flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide',
                    pathname.includes('/customize/') &&
                      'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                  )}
                >
                  Customize
                </Accordion.Title>
                <Accordion.Content className="mb-2 space-y-0.5 border-none p-0">
                  <Sidebar.ItemGroup className="border-none">
                    <SidebarLink href="/docs/customize/theme">Theme</SidebarLink>
                    <SidebarLink href="/docs/customize/dark-mode">Dark mode</SidebarLink>
                  </Sidebar.ItemGroup>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll={!pathname.includes('/components/')} flush className="border-none">
              <Accordion.Panel className="focus:outline-none focus:ring-0">
                <Accordion.Title
                  theme={{
                    open: {
                      on: 'mb-2 text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                      off: 'mb-1 text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-500',
                    },
                  }}
                  className={twMerge(
                    'flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide',
                    pathname.includes('/components/') &&
                      'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                  )}
                >
                  Components
                </Accordion.Title>
                <Accordion.Content className="mb-2 border-none p-0">
                  <Sidebar.ItemGroup className="border-none">
                    <SidebarLink href="/docs/components/accordion">Accordion</SidebarLink>
                    <SidebarLink href="/docs/components/alert">Alert</SidebarLink>
                    <SidebarLink href="/docs/components/avatar">Avatar</SidebarLink>
                    <SidebarLink href="/docs/components/badge">Badge</SidebarLink>
                    <SidebarLink href="/docs/components/banner">
                      <span className="flex items-center gap-2">
                        Banner{' '}
                        <Badge color="cyan" className="px-2">
                          New
                        </Badge>
                      </span>
                    </SidebarLink>
                    <SidebarLink href="/docs/components/blockquote">Blockquote</SidebarLink>
                    <SidebarLink href="/docs/components/breadcrumb">Breadcrumb</SidebarLink>
                    <SidebarLink href="/docs/components/button">Button</SidebarLink>
                    <SidebarLink href="/docs/components/button-group">Button group</SidebarLink>
                    <SidebarLink href="/docs/components/card">Card</SidebarLink>
                    <SidebarLink href="/docs/components/carousel">Carousel</SidebarLink>
                    <SidebarLink href="/docs/components/datepicker">
                      <span className="flex items-center gap-2">
                        Datepicker{' '}
                        <Badge color="cyan" className="px-2">
                          New
                        </Badge>
                      </span>
                    </SidebarLink>
                    <SidebarLink href="/docs/components/dropdown">Dropdown</SidebarLink>
                    <SidebarLink href="/docs/components/footer">Footer</SidebarLink>
                    <SidebarLink href="/docs/components/forms">Forms</SidebarLink>
                    <SidebarLink href="/docs/components/kbd">
                      <span className="flex items-center gap-2">
                        KDB{' '}
                        <Badge color="cyan" className="px-2">
                          New
                        </Badge>
                      </span>
                    </SidebarLink>
                    <SidebarLink href="/docs/components/list-group">List group</SidebarLink>
                    <SidebarLink href="/docs/components/modal">Modal</SidebarLink>
                    <SidebarLink href="/docs/components/navbar">Navbar</SidebarLink>
                    <SidebarLink href="/docs/components/pagination">Pagination</SidebarLink>
                    <SidebarLink href="/docs/components/progress">Progress bar</SidebarLink>
                    <SidebarLink href="/docs/components/rating">Rating</SidebarLink>
                    <SidebarLink href="/docs/components/sidebar">Sidebar</SidebarLink>
                    <SidebarLink href="/docs/components/spinner">Spinner</SidebarLink>
                    <SidebarLink href="/docs/components/table">Table</SidebarLink>
                    <SidebarLink href="/docs/components/tabs">Tabs</SidebarLink>
                    <SidebarLink href="/docs/components/timeline">Timeline</SidebarLink>
                    <SidebarLink href="/docs/components/toast">Toast</SidebarLink>
                    <SidebarLink href="/docs/components/tooltip">Tooltip</SidebarLink>
                  </Sidebar.ItemGroup>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <Accordion collapseAll={!pathname.includes('/forms/')} flush className="border-none">
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    open: {
                      on: 'mb-2 text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                      off: 'mb-1 text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-500',
                    },
                  }}
                  className={twMerge(
                    'flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide',
                    pathname.includes('/forms/') &&
                      'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                  )}
                >
                  Forms
                </Accordion.Title>
                <Accordion.Content className="mb-2 border-none p-0">
                  <Sidebar.ItemGroup className="border-none">
                    <SidebarLink href="/docs/forms/floating-label">
                      <span className="flex items-center gap-2">
                        Floating Label{' '}
                        <Badge color="cyan" className="px-2">
                          New
                        </Badge>
                      </span>
                    </SidebarLink>
                  </Sidebar.ItemGroup>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>

            <Accordion collapseAll={!pathname.includes('/docs/typography/')} flush className="border-none">
              <Accordion.Panel>
                <Accordion.Title
                  theme={{
                    open: {
                      on: 'mb-2 text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                      off: 'mb-1 text-gray-900 dark:text-white hover:text-primary-700 dark:hover:text-primary-500',
                    },
                  }}
                  className={twMerge(
                    'flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide',
                    pathname.includes('/docs/typography/') &&
                      'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
                  )}
                >
                  Typography
                </Accordion.Title>
                <Accordion.Content className="mb-2 space-y-0.5 border-none p-0">
                  <Sidebar.ItemGroup className="border-none">
                    <SidebarLink href="/docs/typography/blockquote">
                      <span className="flex items-center gap-2">
                        Blockquote{' '}
                        <Badge color="cyan" className="px-2">
                          New
                        </Badge>
                      </span>
                    </SidebarLink>
                  </Sidebar.ItemGroup>
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
            <span className="h-64">&nbsp;</span>
          </Sidebar.Items>
        </Sidebar>
      </div>
      {!isCollapsed && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <div
          onClick={() => setCollapsed(true)}
          onKeyUp={(key) => key.code === 'Escape' && setCollapsed(true)}
          className="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/60 lg:hidden"
        />
      )}
    </>
  );
};

const SidebarLink: FC<PropsWithChildren & { href: string }> = ({ children, href }) => {
  const pathname = usePathname();

  return (
    <Sidebar.Item
      as={Link}
      href={href}
      className={twMerge(
        'p-0 font-medium transition-all hover:bg-transparent dark:hover:bg-transparent lg:text-sm [&>*]:px-0',
        pathname === href
          ? 'text-primary-700 hover:text-primary-700 dark:text-primary-500'
          : 'text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white',
      )}
    >
      {children}
    </Sidebar.Item>
  );
};

const DocsFooter: FC = () => {
  return (
    <Footer className="rounded-none px-4 pb-8 pt-16 shadow-none dark:bg-gray-900 lg:px-0">
      <div className="w-full">
        <div className="grid w-full justify-between md:grid-cols-2">
          <div className="mb-4 max-w-sm lg:mb-0">
            <Link href="/" className="flex items-center gap-3">
              <Image alt="" height="32" src="/favicon.svg" width="32" className="h-8 w-8" />
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
              <Footer.LinkGroup col className="text-gray-600 dark:text-gray-400">
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
              <Footer.LinkGroup col className="text-gray-600 dark:text-gray-400">
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
            className="text-base"
          />
        </div>
      </div>
    </Footer>
  );
};

export default DocsLayout;
