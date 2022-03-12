import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { Card } from '../components';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const CardPage: FC = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default card</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                  order.
                </p>
              </Card>
            </div>
            <SyntaxHighlighter language="tsx" style={dracula}>
              {`
<Card className="max-w-sm">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>`.trim()}
            </SyntaxHighlighter>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Card with image</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Card className="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                  order.
                </p>
              </Card>
            </div>
            <SyntaxHighlighter language="tsx" style={dracula}>
              {`
<Card className="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>`.trim()}
            </SyntaxHighlighter>
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Horizontal card</span>
        <Card className="dark:!bg-gray-900">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Card className="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg" horizontal>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
                  order.
                </p>
              </Card>
            </div>
            <SyntaxHighlighter language="tsx" style={dracula}>
              {`
<Card className="max-w-sm" imgSrc="https://flowbite.com/docs/images/blog/image-4.jpg" horizontal>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    Noteworthy technology acquisitions 2021
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
    order.
  </p>
</Card>`.trim()}
            </SyntaxHighlighter>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CardPage;
