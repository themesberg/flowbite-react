import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { excludeClassName } from '../../helpers/exclude';
import range from '../../helpers/range';
import { useTheme } from '../Flowbite/ThemeContext';

export type PaginationProps = PropsWithChildren<Pagination>;
interface Pagination extends Omit<ComponentProps<'nav'>, 'className'> {
  currentPage: number;
  layout?: 'navigation' | 'pagination' | 'table';
  onPageChange: (page: number) => void;
  showIcons?: boolean;
  totalPages: number;
}

export const Pagination: FC<PaginationProps> = ({
  currentPage,
  layout = 'pagination',
  onPageChange,
  showIcons: showIcon = false,
  totalPages,
  ...props
}): JSX.Element => {
  const firstPage = Math.max(1, currentPage - 3);
  const lastPage = Math.min(currentPage + 3, totalPages);

  const theme = useTheme().theme.pagination;
  const theirProps = excludeClassName(props);

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <nav className={theme.base} {...theirProps}>
      {layout === 'table' && (
        <div className={theme.layout.table.base}>
          Showing <span className={theme.layout.table.span}>{firstPage}</span> to&nbsp;
          <span className={theme.layout.table.span}>{lastPage}</span> of&nbsp;
          <span className={theme.layout.table.span}>{totalPages}</span> Entries
        </div>
      )}
      <ul className={theme.pages.base}>
        <li>
          <button
            className={classNames(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
            onClick={() => goToPreviousPage()}
          >
            {showIcon && <HiChevronLeft aria-hidden className={theme.pages.previous.icon} />}
            Previous
          </button>
        </li>
        {layout === 'pagination' &&
          range(firstPage, lastPage).map(
            (page: number): JSX.Element => (
              <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
                <button
                  className={classNames(theme.pages.selector.base, {
                    [theme.pages.selector.active]: currentPage === page,
                  })}
                  onClick={() => onPageChange(page)}
                >
                  {page}
                </button>
              </li>
            ),
          )}
        <li>
          <button
            className={classNames(theme.pages.next.base, showIcon && theme.pages.showIcon)}
            onClick={() => goToNextPage()}
          >
            Next
            {showIcon && <HiChevronRight aria-hidden className={theme.pages.showIcon} />}
          </button>
        </li>
      </ul>
    </nav>
  );
};
