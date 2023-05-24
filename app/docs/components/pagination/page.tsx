'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { CodePreview } from '~/app/components/code-preview';
import { Pagination } from '~/src';
import { DocsContentLayout } from '../../../components/docs-content-layout';

const PaginationPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <DocsContentLayout
      title="React Pagination - Flowbite"
      description="Use the Tailwind CSS pagination element to indicate a series of content across various pages"
    >
      <CodePreview title="Default pagination">
        <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
      </CodePreview>
      <CodePreview title="Pagination with icons">
        <Pagination currentPage={currentPage} onPageChange={onPageChange} showIcons totalPages={100} />
      </CodePreview>
      <CodePreview title="Previous and next">
        <Pagination currentPage={currentPage} layout="navigation" totalPages={100} onPageChange={onPageChange} />
      </CodePreview>
      <CodePreview title="Previous and next with icons">
        <Pagination
          currentPage={currentPage}
          layout="navigation"
          onPageChange={onPageChange}
          showIcons
          totalPages={100}
        />
      </CodePreview>
      <CodePreview title="Table data navigation">
        <div className="flex items-center justify-center text-center">
          <Pagination currentPage={currentPage} layout="table" onPageChange={onPageChange} totalPages={1000} />
        </div>
      </CodePreview>
      <CodePreview title="Table data navigation with icons">
        <div className="flex items-center justify-center text-center">
          <Pagination
            currentPage={currentPage}
            layout="table"
            onPageChange={onPageChange}
            showIcons
            totalPages={1000}
          />
        </div>
      </CodePreview>
      <CodePreview title="Change 'Previous' and 'Next' text">
        <div className="flex items-center justify-center text-center">
          <Pagination
            currentPage={currentPage}
            layout="pagination"
            onPageChange={onPageChange}
            showIcons
            totalPages={1000}
            previousLabel="Go back"
            nextLabel="Go forward"
          />
        </div>
      </CodePreview>
    </DocsContentLayout>
  );
};

export default PaginationPage;
