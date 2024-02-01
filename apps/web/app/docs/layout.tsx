'use client';

import { Accordion, Badge, Navbar, Sidebar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { PropsWithChildren } from 'react';
import { useEffect, useState } from 'react';
import { HiMenuAlt1, HiX } from 'react-icons/hi';
import { twMerge } from 'tailwind-merge';
import { Banner } from '~/components/banner';
import { DocSearchInput } from '~/components/docsearch-input';
import { NavbarIcons, NavbarLinks } from '~/components/navbar';
import { DOCS_SIDEBAR, type DocsSidebarItem } from '~/data/docs-sidebar';

import '~/styles/docs.css';

interface DocsLayoutState {
  isCollapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}

export default function DocsLayout({ children }: PropsWithChildren) {
  const [isCollapsed, setCollapsed] = useState(true);

  const state: DocsLayoutState = {
    isCollapsed,
    setCollapsed,
  };

  return (
    <div className="w-full min-w-0 flex-auto">
      <div className="relative bg-white text-gray-600 antialiased dark:bg-gray-900 dark:text-gray-400">
        <Banner />
        <DocsNavbar {...state} />
        <div className="lg:flex">
          <DocsSidebar {...state} />
          <div className="w-full min-w-0">{children}</div>
        </div>
      </div>
    </div>
  );
}

function DocsNavbar({ isCollapsed, setCollapsed }: DocsLayoutState) {
  return (
    <Navbar
      fluid
      theme={{
        root: {
          base: 'sticky top-0 z-[60] mx-auto flex w-full items-center justify-between border-b border-gray-200 bg-white px-4 py-2.5 text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400',
          inner: {
            base: 'mx-auto flex w-full flex-wrap items-center justify-between',
          },
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
          <DocSearchInput />
        </div>
      </div>
      <div className="flex items-center">
        <NavbarLinks />
        <NavbarIcons />
      </div>
    </Navbar>
  );
}

function DocsSidebar({ isCollapsed, setCollapsed }: DocsLayoutState) {
  const pathname = usePathname();

  // collapse sidebar on small screens when navigating to a new page
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
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
          theme={{
            root: {
              base: 'h-full border-r border-gray-200 dark:border-gray-600',
              inner:
                'scrolling-touch max-w-2xs top-20 h-full overflow-y-auto bg-white px-4 pt-20 text-base font-normal dark:bg-gray-900 lg:sticky lg:mr-0 lg:block lg:h-[calc(100vh-8rem)] lg:pt-0 lg:text-sm',
            },
          }}
        >
          <Sidebar.Items className="grid grid-cols-1 gap-2">
            {DOCS_SIDEBAR.map((section) => (
              <SidebarSection key={section.title} title={section.title} href={section.href}>
                {section.items.map((item) => (
                  <SidebarItem key={`section-${section.title}_item-${item.title}`} {...item} />
                ))}
              </SidebarSection>
            ))}
          </Sidebar.Items>
        </Sidebar>
      </div>
      {!isCollapsed && (
        <div
          onClick={() => setCollapsed(true)}
          onKeyUp={(key) => key.code === 'Escape' && setCollapsed(true)}
          className="fixed inset-0 z-40 bg-gray-900/50 dark:bg-gray-900/60 lg:hidden"
        />
      )}
    </>
  );
}

function SidebarSection({ title, href, children }: PropsWithChildren<{ title: string; href: string }>) {
  const pathname = usePathname();

  return (
    <Accordion className="border-none" collapseAll={!pathname.includes(href)} flush>
      <Accordion.Panel>
        <Accordion.Title
          theme={{
            open: {
              on: 'mb-2 text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
              off: 'mb-1 text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500',
            },
          }}
          className={twMerge(
            'flex w-full items-center justify-between bg-transparent p-0 text-sm font-semibold uppercase tracking-wide',
            pathname.includes(href) &&
              'text-primary-700 hover:text-primary-700 dark:text-primary-500 dark:hover:text-primary-500',
          )}
        >
          {title}
        </Accordion.Title>
        <Accordion.Content className="mb-2 border-none p-0">
          <Sidebar.ItemGroup className="border-none">{children}</Sidebar.ItemGroup>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}

function SidebarItem({ title, href, isNew, isExternal }: DocsSidebarItem) {
  return (
    <SidebarLink href={href} isExternal={isExternal}>
      {isNew ? <NewBadge>{title}</NewBadge> : title}
    </SidebarLink>
  );
}

function SidebarLink({ children, href, isExternal }: PropsWithChildren<{ href: string; isExternal?: boolean }>) {
  const pathname = usePathname();

  return (
    <Sidebar.Item
      as={Link}
      href={href}
      target={isExternal && '_blank'}
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
}

function NewBadge({ children }: PropsWithChildren) {
  return (
    <span className="flex items-center gap-2">
      {children}
      <Badge color="cyan" className="h-4 px-1.5">
        New
      </Badge>
    </span>
  );
}
