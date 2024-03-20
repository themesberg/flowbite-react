import Link from 'next/link';
import type { FC } from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiDiscord, SiStorybook } from 'react-icons/si';
import { Badge, Button, DarkThemeToggle, Tooltip } from '~/src';
import pkg from './../package.json' assert { type: 'json' };
import { DocSearchInput } from './docsearch-input';

const buttonIconTheme = {
  size: {
    md: 'p-2.5',
  },
};

export const NavbarLinks: FC = () => {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      <Link
        href="/docs/getting-started/introduction"
        className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
      >
        Docs
      </Link>
      <a
        href="/docs/getting-started/quickstart"
        className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
      >
        Quickstart
      </a>
      <a
        href="https://flowbite.com/figma/"
        className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
      >
        Figma
      </a>
      <a
        href="https://flowbite.com"
        className="rounded-lg p-2.5 text-sm font-medium text-gray-900 hover:text-cyan-700 dark:text-gray-300 dark:hover:text-cyan-500"
      >
        Flowbite
      </a>
    </div>
  );
};

export const NavbarIcons: FC = () => {
  const version = pkg?.version ?? 'latest';
  return (
    <div className="flex items-center gap-1">
      <div className="lg:hidden">
        <DocSearchInput />
      </div>
      <Tooltip animation={false} content="View Storybook">
        <Button
          as="a"
          href="https://storybook.flowbite-react.com/"
          color="ghost"
          className="hidden p-0 lg:block"
          theme={buttonIconTheme}
        >
          <SiStorybook aria-hidden className="h-5 w-5" />
        </Button>
      </Tooltip>

      <Tooltip animation={false} content="Join Discord Community">
        <Button
          as="a"
          href="https://discord.gg/4eeurUVvTy"
          color="ghost"
          className="hidden p-0 lg:block"
          theme={buttonIconTheme}
        >
          <SiDiscord aria-hidden className="h-5 w-5" />
        </Button>
      </Tooltip>

      <Tooltip animation={false} content="View on GitHub">
        <Button
          as="a"
          href="https://github.com/themesberg/flowbite-react"
          color="ghost"
          className="hidden p-0 lg:block"
          theme={buttonIconTheme}
        >
          <BsGithub aria-hidden className="h-5 w-5" />
        </Button>
      </Tooltip>

      <Tooltip animation={false} content="Toggle dark mode">
        <DarkThemeToggle />
      </Tooltip>
      <a href="https://npmjs.com/package/flowbite-react" className="ml-2 hidden lg:block">
        <Badge
          color="info"
          className="border-primary-700 bg-primary-50 px-2 text-sm font-normal text-primary-700 hover:bg-primary-600 hover:text-white dark:border-primary-700 dark:bg-gray-700  dark:text-primary-700 dark:hover:bg-primary-800 dark:hover:text-white lg:block"
        >
          v{version}
        </Badge>
      </a>
    </div>
  );
};
