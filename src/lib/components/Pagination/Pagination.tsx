import classNames from 'classnames';
import type { ComponentProps, PropsWithChildren, ReactNode } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import range from '../../helpers/range';
import { useTheme } from '../Flowbite/ThemeContext';
import PaginationButton, { FlowbitePaginationButtonTheme, PaginationButtonProps } from './PaginationButton';

export interface FlowbitePaginationTheme {
  base: string;
  layout: FlowbitePaginationLayoutTheme;
  pages: FlowbitePaginationPagesTheme;
}

export interface FlowbitePaginationRootTheme {
  base: string;
}

export interface FlowbitePaginationLayoutTheme {
  table: {
    base: string;
    span: string;
  };
}

export interface FlowbitePaginationPagesTheme {
  base: string;
  showIcon: string;
  previous: FlowbitePaginationNavigationTheme;
  next: FlowbitePaginationNavigationTheme;
  selector: FlowbitePaginationButtonTheme;
}

export interface FlowbitePaginationNavigationTheme {
  base: string;
  icon: string;
}

export interface PaginationProps extends PropsWithChildren<Pagination> {
  theme?: DeepPartial<FlowbitePaginationTheme>;
}

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
  theme: customTheme = {},
  ...props
}: PaginationProps): JSX.Element => {
  const theme = mergeDeep(useTheme().theme.pagination, customTheme);

  const firstPage = Math.max(1, currentPage - 3);
  const lastPage = Math.min(currentPage + 3, totalPages);

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
