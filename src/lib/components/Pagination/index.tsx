import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import range from '../../helpers/range';

export type PaginationProps = PropsWithChildren<Pagination>;
interface Pagination extends ComponentProps<'nav'> {
  currentPage: number;
  layout?: 'navigation' | 'pagination' | 'table';
  onPageChange: (page: number) => void;
  showIcons?: boolean;
  totalPages: number;
}

const Pagination: FC<PaginationProps> = ({
  currentPage,
  layout = 'pagination',
  onPageChange,
  showIcons: showIcon = false,
  totalPages,
  ...rest
}): JSX.Element => {
  const firstPage = Math.max(1, currentPage - 3);
  const lastPage = Math.min(currentPage + 3, totalPages);

  const goToNextPage = (): void => {
    onPageChange(currentPage + 1 < totalPages ? currentPage + 1 : totalPages);
  };

  const goToPreviousPage = (): void => {
    onPageChange(currentPage - 1 > 0 ? currentPage - 1 : 1);
  };

  return (
    <nav {...rest}>
      {layout === 'table' && (
        <div className="text-sm text-gray-700 dark:text-gray-400">
          Showing <span className="font-semibold text-gray-900 dark:text-white">{firstPage}</span> to&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">{lastPage}</span> of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">{totalPages}</span> Entries
        </div>
      )}
      <ul className="xs:mt-0 mt-2 inline-flex items-center -space-x-px">
        <li>
          <button
            className={classNames(
              'ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIcon ? 'inline-flex' : '',
            )}
            onClick={() => goToPreviousPage()}
          >
            {showIcon && <HiChevronLeft aria-hidden="true" className="h-5 w-5" />}
            Previous
          </button>
        </li>
        {layout === 'pagination' &&
          range(firstPage, lastPage).map(
            (page: number): JSX.Element => (
              <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
                <button
                  className={classNames(
                    'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
                    currentPage === page &&
                      'bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
                  )}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ),
          )}
        <li>
          <button
            className={classNames(
              'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white',
              showIcon ? 'inline-flex' : '',
            )}
            onClick={() => goToNextPage()}
          >
            Next
            {showIcon && <HiChevronRight aria-hidden="true" className="h-5 w-5" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
