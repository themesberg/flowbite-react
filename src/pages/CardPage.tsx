import { FC } from 'react';

import { Card } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const CardPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default card',
      code: (
        <Card className="max-w-sm">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Card with image',
      code: (
        <Card className="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Horizontal card',
      code: (
        <Card className="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg" horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
        </Card>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];

  return <DemoPage examples={examples} />;
};

export default CardPage;
