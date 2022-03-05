import { FC } from 'react';
import { ArrowCircleDownIcon } from '@heroicons/react/outline';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';

import { Accordion, AccordionItem, Card } from '../components';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export const AccordionPage: FC = () => {
  const items: AccordionItem[] = [
    {
      open: true,
      title: 'What is Flowbite?',
      body: (
        <>
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
        </>
      ),
    },
    {
      title: 'Is there a Figma file available?',
      body: (
        <>
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
        </>
      ),
    },
    {
      title: 'What are the differences between Flowbite and Tailwind UI?',
      body: (
        <>
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
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default accordion</span>
        <Card className="dark:!bg-gray-900">
          <Accordion items={items} />
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`<Accordion items={items} />`}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Always open</span>
        <Card className="dark:!bg-gray-900">
          <Accordion items={items} />
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
const items = [
    {
        open: true,
        title: 'What is Flowbite?',
        body: (
          <>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Flowbite is an open-source library of interactive components built
              on top of Tailwind CSS including buttons, dropdowns, modals,
              navbars, and more.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out this guide to learn how to{' '}
              <a
                href="https://flowbite.com/docs/getting-started/introduction/"
                className="text-blue-600 dark:text-blue-500 hover:underline"
              >
                get started
              </a>{' '}
              and start developing websites even faster with components on top of
              Tailwind CSS.
            </p>
          </>
        )
    }
];

...

<Accordion items={items} />`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Flush accordion</span>
        <Card className="dark:!bg-gray-900">
          <Accordion items={items} flush />
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`<Accordion items={items} flush />`}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Arrow style</span>
        <Card className="dark:!bg-gray-900">
          <Accordion items={items} arrowIcon={ArrowCircleDownIcon} />
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`<Accordion items={items} arrowIcon={ArrowCircleDownIcon} />`}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};
