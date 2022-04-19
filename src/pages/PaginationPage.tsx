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
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          displayFormat={'pagination'}
        />
      ),
    },
    {
      title: 'Pagination with icons',
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          displayFormat={'pagination-icon-only'}
        />
      ),
    },
    {
      title: 'Pagination with icons and text',
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcon
          displayFormat={'pagination'}
        />
      ),
    },
    {
      title: 'Previous and next with icons',
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          displayFormat={'navigation'}
          showIcon
        />
      ),
    },
    {
      title: 'Table data navigation',
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={1000}
          onPageChange={onPageChange}
          displayFormat="navigation-group"
        />
      ),
    },
    {
      title: 'Table data navigation with icon',
      code: (
        <Pagination
          currentPage={currentPage}
          totalPages={1000}
          onPageChange={onPageChange}
          displayFormat="navigation-group"
          showIcon={true}
        />
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default PaginationPage;
