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
    {
      title: 'Previous and next with icons',
      code: (
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} showOnlyPreviousAndNext />
      ),
    },
    {
      title: 'Table data navigation',
      code: <Pagination currentPage={currentPage} totalPages={1000} onPageChange={onPageChange} tableDataPagination />,
    },
    {
      title: 'Table data navigation with icon',
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={1000}
          onPageChange={onPageChange}
          tableDataPagination
          showIcon
        />
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default PaginationPage;
