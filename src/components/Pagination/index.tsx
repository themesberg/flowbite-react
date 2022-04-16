import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
export type PaginationProps = PropsWithChildren<{
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  // Optional props
  showIcon?: boolean;
  showIconOnly?: boolean;
}>;
export const Pagination: FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, showIcon, showIconOnly }) => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  const startPage = Math.max(1, currentPage - 3);
  const endPage = Math.min(currentPage + 3, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            onClick={() => onPageChange(currentPage - 1 > 0 ? currentPage - 1 : 1)}
            className={classNames(
              'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIconOnly ? 'block' : '',
              showIcon ? 'inline-flex' : '',
            )}
          >
            {showIcon && (
              <>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous
              </>
            )}
            {showIconOnly && (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            {!showIconOnly && !showIcon && 'Previous'}
          </a>
        </li>
        {pageNumbers.map((page) => {
          return (
            <li key={page}>
              <a
                onClick={() => onPageChange(page)}
                className={classNames(
                  'border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
                  currentPage === page &&
                    'bg-blue-50 py-2 px-3 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
                )}
              >
                {page}
              </a>
            </li>
          );
        })}
        <li>
          <a
            onClick={() => onPageChange(currentPage + 1 < totalPages ? currentPage + 1 : totalPages)}
            className={classNames(
              'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIconOnly ? 'block' : '',
              showIcon ? 'inline-flex' : '',
            )}
          >
            {!showIconOnly && !showIcon && 'Next'}
            {showIcon && (
              <>
                Next
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </>
            )}
            {showIconOnly && (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};
