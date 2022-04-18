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
  showOnlyPreviousAndNext?: boolean;
  tableDataPagination?: boolean;
}>;

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showIcon,
  showIconOnly,
  showOnlyPreviousAndNext,
  tableDataPagination,
}) => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  const startPage = Math.max(1, currentPage - 3);
  const endPage = Math.min(currentPage + 3, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  if (tableDataPagination) {
    return (
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{currentPage * 10 - 9}</span> to{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{currentPage * 10}</span> of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">{totalPages * 10}</span> Entries
        </span>
        <div className={classNames('xs:mt-0 mt-2 inline-flex', showIcon ? 'xs:mt-0 mt-2 inline-flex' : '')}>
          <button
            onClick={() => onPageChange(currentPage - 1 > 0 ? currentPage - 1 : 1)}
            className={classNames(
              'rounded-l bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIcon
                ? 'inline-flex items-center rounded-l bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : '',
            )}
          >
            {!showIcon && 'Prev'}
            {showIcon && (
              <>
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Prev
              </>
            )}
          </button>
          <button
            onClick={() => onPageChange(currentPage + 1 < totalPages ? currentPage + 1 : totalPages)}
            className={classNames(
              'rounded-r border-0 border-l border-gray-700 bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIcon
                ? 'inline-flex items-center rounded-r border-0 border-l border-gray-700 bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                : '',
            )}
          >
            {!showIcon && 'Next'}
            {showIcon && (
              <>
                Next
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </>
            )}
          </button>
        </div>
      </div>
    );
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
              showOnlyPreviousAndNext ? 'mr-3 inline-flex items-center' : '',
            )}
          >
            {!showOnlyPreviousAndNext && showIcon && (
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
            {!showOnlyPreviousAndNext && showIconOnly && (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            {!showOnlyPreviousAndNext && !showIconOnly && !showIcon && 'Previous'}
            {showOnlyPreviousAndNext && (
              <>
                <svg
                  className="mr-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Previous
              </>
            )}
          </a>
        </li>
        {!showOnlyPreviousAndNext &&
          pageNumbers.map((page) => {
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
              showOnlyPreviousAndNext ? 'inline-flex items-center' : '',
            )}
          >
            {!showOnlyPreviousAndNext && !showIconOnly && !showIcon && 'Next'}
            {!showOnlyPreviousAndNext && showIcon && (
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
            {!showOnlyPreviousAndNext && showIconOnly && (
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
            {showOnlyPreviousAndNext && (
              <>
                Next
                <svg
                  className="ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};
