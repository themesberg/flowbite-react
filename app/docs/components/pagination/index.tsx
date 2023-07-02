'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { DocsContentLayout } from '~/app/components/docs-content-layout';
import PaginationDocs from './pagination.mdx';

const PaginationPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const state = {
    currentPage,
    setCurrentPage,
    onPageChange,
  };

  return (
    <DocsContentLayout
      title="React Pagination - Flowbite"
      description="Get started with the pagination component to indicate the number of pages with number, link, and control buttons and allow the user to navigate through these pages"
    >
      <PaginationDocs {...state} />
    </DocsContentLayout>
  );
};

export default PaginationPage;
