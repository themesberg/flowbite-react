import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export type PaginationProps = PropsWithChildren<{
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  // Optional props
  showIcon?: boolean;
  displayFormat: 'pagination' | 'pagination-icon-only' | 'navigation' | 'navigation-group';
}>;

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  showIcon = false,
  displayFormat = 'pagination',
}) => {
  switch (displayFormat) {
    case 'pagination':
    case 'pagination-icon-only':
      return renderPagination(currentPage, totalPages, onPageChange, showIcon, displayFormat);
    case 'navigation':
      return renderNavigation(currentPage, totalPages, onPageChange, showIcon);
    default:
      return renderNavigationGroup(currentPage, totalPages, onPageChange, showIcon);
  }
};

const renderPagination = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void,
  showIcon: boolean,
  displayFormat: 'pagination' | 'pagination-icon-only',
) => {
  const pageNumbers = [];
  const startPage = Math.max(1, currentPage - 3);
  const endPage = Math.min(currentPage + 3, totalPages);
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }
  const showIconOnly = displayFormat == 'pagination-icon-only';
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
                <HiChevronLeft className="h-5 w-5" />
                Previous
              </>
            )}
            {showIconOnly && <HiChevronLeft className="h-5 w-5" />}
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
                <HiChevronRight className="h-5 w-5" />
              </>
            )}
            {showIconOnly && <HiChevronRight className="h-5 w-5" />}
          </a>
        </li>
      </ul>
    </nav>
  );
};

const renderNavigation = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void,
  showIcon: boolean,
) => {
  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <a
            onClick={() => onPageChange(currentPage - 1 > 0 ? currentPage - 1 : 1)}
            className={classNames(
              'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIcon ? 'inline-flex' : '',
            )}
          >
            {showIcon && (
              <>
                <BsArrowLeft className="mr-3 h-5 w-5" />
                Previous
              </>
            )}
            {!showIcon && 'Previous'}
          </a>
        </li>
        <li>
          <a
            onClick={() => onPageChange(currentPage + 1 < totalPages ? currentPage + 1 : totalPages)}
            className={classNames(
              'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIcon ? 'inline-flex' : '',
            )}
          >
            {!showIcon && 'Next'}
            {showIcon && (
              <>
                Next
                <BsArrowRight className="ml-3 h-5 w-5" />
              </>
            )}
          </a>
        </li>
      </ul>
    </nav>
  );
};

const renderNavigationGroup = (
  currentPage: number,
  totalPages: number,
  onPageChange: (page: number) => void,
  showIcon: boolean,
) => {
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
            showIcon ? 'inline-flex items-center' : '',
          )}
        >
          {!showIcon && 'Prev'}
          {showIcon && (
            <>
              <BsArrowLeft className="mr-3 h-5 w-5" />
              Prev
            </>
          )}
        </button>
        <button
          onClick={() => onPageChange(currentPage + 1 < totalPages ? currentPage + 1 : totalPages)}
          className={classNames(
            'rounded-r border-0 border-l border-gray-700 bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
            showIcon ? 'inline-flex items-center' : '',
          )}
        >
          {!showIcon && 'Next'}
          {showIcon && (
            <>
              Next
              <BsArrowRight className="ml-3 h-5 w-5" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};
