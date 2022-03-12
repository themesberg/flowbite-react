import { FC } from 'react';
import { HiOutlineArrowCircleDown } from 'react-icons/hi';

import { Accordion, AccordionItem } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const AccordionPage: FC = () => {
  const items: AccordionItem[] = [
    {
      open: true,
      title: 'What is Flowbite?',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
            dropdowns, modals, navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{' '}
            <a
              href="https://flowbite.com/docs/getting-started/introduction/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              get started
            </a>{' '}
            and start developing websites even faster with components on top of Tailwind CSS.
          </p>
        </div>
      ),
    },
    {
      title: 'Is there a Figma file available?',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
            has a design equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{' '}
            <a href="https://flowbite.com/figma/" className="text-blue-600 dark:text-blue-500 hover:underline">
              Figma design system
            </a>{' '}
            based on the utility classes from Tailwind CSS and components from Flowbite.
          </p>
        </div>
      ),
    },
    {
      title: 'What are the differences between Flowbite and Tailwind UI?',
      body: (
        <div>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Flowbite are open source under the MIT license, whereas
            Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
            components, whereas Tailwind UI offers sections of pages.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
            technical reason stopping you from using the best of two worlds.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
          <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
            <li>
              <a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">
                Flowbite Pro
              </a>
            </li>
            <li>
              <a
                href="https://tailwindui.com/"
                rel="nofollow"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  const examples: CodeExample[] = [
    {
      title: 'Default accordion',
      code: <Accordion items={items} />,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Always open',
      code: <Accordion items={items} />,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Flush accordion',
      code: <Accordion items={items} flush />,
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Arrow style',
      code: <Accordion items={items} arrowIcon={HiOutlineArrowCircleDown} />,
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default AccordionPage;
