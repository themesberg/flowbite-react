import { FC } from 'react';

import { Pagination } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const PaginationPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default Pagination',
      code: <Pagination />,
    },
  ];

  return <DemoPage examples={examples} />;
};

export default PaginationPage;
