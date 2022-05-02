import { FC } from 'react';

import { Spinner } from '../lib';
import { CodeExample, DemoPage } from './DemoPage';

const SpinnersPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default spinner',
      code: <Spinner />,
    },
    {
      title: 'Colors',
      code: (
        <div className="flex flex-wrap gap-2">
          <Spinner color="blue" />
          <Spinner color="gray" />
          <Spinner color="green" />
          <Spinner color="red" />
          <Spinner color="yellow" />
          <Spinner color="pink" />
          <Spinner color="purple" />
        </div>
      ),
    },
    {
      title: 'Sizing',
      code: (
        <div className="flex flex-wrap items-center gap-2">
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
        </div>
      ),
    },
    {
      title: 'Alignment',
      code: (
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
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default SpinnersPage;
