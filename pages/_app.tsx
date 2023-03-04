import type { AppProps } from 'next/app';
import Link from 'next/link';
import type { NextPage } from 'next/types';
import { useRef, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';
import { SiStorybook } from 'react-icons/si';
import type { CustomFlowbiteTheme } from '../src';
import { DarkThemeToggle, Flowbite, Navbar, Sidebar } from '../src';
import '../styles/globals.css';

const theme: CustomFlowbiteTheme = {
  sidebar: {
    root: {
      base: 'h-full bg-inherit',
      inner: 'h-full overflow-y-auto overflow-x-hidden rounded bg-inherit py-4 px-3',
    },
  },
};

const App: NextPage<AppProps> = function ({ Component, pageProps }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Flowbite theme={{ theme }}>
      <div className="flex h-screen w-full flex-col overflow-hidden">
        <Navbar fluid>
          <div className="flex items-center">
            <HiMenuAlt1
              className="mr-6 h-6 w-6 cursor-pointer text-gray-600 dark:text-gray-400"
              onClick={() => setCollapsed(!collapsed)}
            />
            <span className="text-xl font-semibold dark:text-white">Flowbite React Components</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              className="cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              href={`${process.env.PUBLIC_URL}/storybook`}
              title="Storybook"
              target="_blank"
              rel="noreferrer"
            >
              <SiStorybook className="h-5 w-5" />
            </a>
            <a
              className="cursor-pointer rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              href="https://github.com/themesberg/flowbite-react"
              title="Github Repository"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="h-5 w-5" />
            </a>
            <DarkThemeToggle />
          </div>
        </Navbar>
        <div className="flex h-full overflow-hidden bg-white dark:bg-gray-900">
          <Sidebar collapsed={collapsed}>
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
          <main className="flex-1 overflow-auto p-4" ref={mainRef}>
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </Flowbite>
  );
};

export default App;
