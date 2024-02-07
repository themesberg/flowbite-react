import type { Meta, StoryFn } from '@storybook/react';
import { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button';

export default {
  title: 'Components/Drawer',
  component: Drawer,
} as Meta<typeof Drawer>;

const Template: StoryFn<typeof Drawer> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex min-h-[50vh] items-center justify-center">
        <Button onClick={() => setIsOpen(true)}>Drawer Toggle Button</Button>
      </div>

      <Drawer open={isOpen} {...args}>
        <Drawer.Header title="Drawer" />
        <Drawer.Items>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            Supercharge your hiring by taking advantage of our{' '}
            <a href="#" className="text-blue-600 underline hover:no-underline dark:text-blue-500">
              limited-time sale
            </a>{' '}
            for Flowbite Docs + Job Board. Unlimited access to over 190K top-ranked candidates and the #1 design job
            board.
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <a
              href="#"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Learn more
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get access{' '}
              <svg
                className="ms-2 h-3.5 w-3.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  position: 'left',
  open: undefined,
  onClose: undefined,
  children: <Button>Open Drawer</Button>,
};
