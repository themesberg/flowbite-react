import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { Breadcrumb, Card } from '../components';
import { HomeIcon } from '@heroicons/react/solid';

SyntaxHighlighter.registerLanguage('tsx', tsx);

export const BreadcrumbPage: FC = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default badge</span>
        <Card>
          <div className="flex gap-2">
            <Breadcrumb
              items={[
                {
                  icon: HomeIcon,
                  label: 'Home',
                  href: '#/breadcrumb',
                },
                {
                  label: 'Projects',
                  href: '#/breadcrumb',
                },
                {
                  label: 'Flowbite React',
                },
              ]}
            />
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Breadcrumb
  items={[
    {
      icon: HomeIcon,
      label: 'Home',
      href: '/'
    },
    {
      label: 'Projects',
      href: '/projects'
    },
    {
      label: 'Flowbite React'
    }
  ]}
/>`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};
