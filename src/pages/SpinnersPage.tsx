import { FC } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import tsx from 'react-syntax-highlighter/dist/esm/languages/prism/tsx';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Card, Spinner } from '../components';

SyntaxHighlighter.registerLanguage('tsx', tsx);

const SpinnersPage: FC = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto gap-4 dark:text-white">
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Default spinner</span>
        <Card>
          <Spinner />
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`<Spinner />`}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Colors</span>
        <Card>
          <div className="flex flex-wrap gap-2">
            <Spinner color="blue" />
            <Spinner color="gray" />
            <Spinner color="green" />
            <Spinner color="red" />
            <Spinner color="yellow" />
            <Spinner color="pink" />
            <Spinner color="purple" />
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Spinner color="blue" />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Sizing</span>
        <Card>
          <div className="flex flex-wrap items-center gap-2">
            <Spinner size="xs" />
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
            <Spinner size="xl" />
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<Spinner size="xs" />
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
<Spinner size="xl" />
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-2xl font-bold">Alignment</span>
        <Card>
          <div className="flex flex-col gap-2">
            <div className="text-left">
              <Spinner />
            </div>
            <div className="text-center">
              <Spinner />
            </div>
            <div className="text-right">
              <Spinner />
            </div>
          </div>
          <SyntaxHighlighter language="tsx" style={dracula}>
            {`
<div className="text-left">
  <Spinner />
</div>
<div className="text-center">
  <Spinner />
</div>
<div className="text-right">
  <Spinner />
</div>
`.trim()}
          </SyntaxHighlighter>
        </Card>
      </div>
    </div>
  );
};

export default SpinnersPage;
