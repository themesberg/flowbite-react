import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import range from '../../helpers/range';
import { useTheme } from '../Flowbite/ThemeContext';
import PaginationButton, { PaginationButtonProps } from './PaginationButton';

export type PaginationProps = PropsWithChildren<Pagination>;

interface Pagination extends ComponentProps<'nav'> {
  currentPage: number;
  layout?: 'navigation' | 'pagination' | 'table';
  onPageChange: (page: number) => void;
  showIcons?: boolean;
  totalPages: number;
  previousLabel?: string;
  nextLabel?: string;
  renderPaginationButton?: (props: PaginationButtonProps) => ReactNode;
}

export const Pagination = ({
  currentPage,
  layout = 'pagination',
  onPageChange,
  showIcons: showIcon = false,
  totalPages,
  previousLabel = 'Previous',
  nextLabel = 'Next',
  className,
  renderPaginationButton = (props) => <PaginationButton {...props} />,
  ...props
}: PaginationProps): JSX.Element => {
  const firstPage = Math.max(1, currentPage - 3);
  const lastPage = Math.min(currentPage + 3, totalPages);

  const theme = useTheme().theme.pagination;

  const goToNextPage = (): void => {
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const goToPreviousPage = (): void => {
    onPageChange(Math.max(currentPage - 1, 1));
  };

  return (
    <nav className={classNames(theme.base, className)} {...props}>
      {layout === 'table' && (
        <div className={theme.layout.table.base}>
          Showing <span className={theme.layout.table.span}>{firstPage}</span> to&nbsp;
          <span className={theme.layout.table.span}>{lastPage}</span> of&nbsp;
          <span className={theme.layout.table.span}>{totalPages}</span> Entries
        </div>
      )}
      <ul className={theme.pages.base}>
        <li>
          {renderPaginationButton({
            className: classNames(classNames(theme.pages.previous.base, showIcon && theme.pages.showIcon)),
            onClick: goToPreviousPage,
            children: (
              <>
                {showIcon && <HiChevronLeft aria-hidden className={theme.pages.previous.icon} />}
                {previousLabel}
              </>
            ),
          })}
        </li>
        {layout === 'pagination' &&
          range(firstPage, lastPage).map(
            (page: number): JSX.Element => (
              <li aria-current={page === currentPage ? 'page' : undefined} key={page}>
                {renderPaginationButton({
                  className: classNames(theme.pages.selector.base, {
                    [theme.pages.selector.active]: currentPage === page,
                  }),
                  active: page === currentPage,
                  onClick: () => onPageChange(page),
                  children: page,
                })}
              </li>
            ),
          )}
        <li>
          {renderPaginationButton({
            className: classNames(theme.pages.next.base, showIcon && theme.pages.showIcon),
            onClick: goToNextPage,
            children: (
              <>
                {nextLabel}
                {showIcon && <HiChevronRight aria-hidden className={theme.pages.next.icon} />}
              </>
            ),
          })}
        </li>
      </ul>
    </nav>
  );
};

Pagination.Button = PaginationButton;
