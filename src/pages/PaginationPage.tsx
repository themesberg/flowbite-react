import { FC, useState } from 'react';

import { Pagination } from '../components';
import { CodeExample, DemoPage } from './DemoPage';

const PaginationPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    console.log('Page changed to:', page);
  };
  const examples: CodeExample[] = [
    {
      title: 'Default Pagination',
      code: <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />,
    },
    {
      title: 'Pagination with icons',
      code: <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIconOnly />,
    },
    {
      title: 'Pagination with icons and text',
      code: <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showIcon />,
    },
  ];

  return <DemoPage examples={examples} />;
};

export default PaginationPage;
