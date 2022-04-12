import { FC } from 'react';

import { Progressbar } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const ProgressbarPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Progressbar',
      code: <Progressbar progress="10%" />,
    },
  ];

  return <DemoPage examples={examples} />;
};

export default ProgressbarPage;
