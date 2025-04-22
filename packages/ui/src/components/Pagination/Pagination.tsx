"use client";

import { forwardRef, type ComponentProps, type ReactNode } from "react";
import { get } from "../../helpers/get";
import { resolveProps } from "../../helpers/resolve-props";
import { useResolveTheme } from "../../helpers/resolve-theme";
import { twMerge } from "../../helpers/tailwind-merge";
import { ChevronLeftIcon } from "../../icons/chevron-left-icon";
import { ChevronRightIcon } from "../../icons/chevron-right-icon";
import { useThemeProvider } from "../../theme/provider";
import type { ThemingProps } from "../../types";
import { range } from "./helpers";
import type { PaginationButtonProps, PaginationButtonTheme } from "./PaginationButton";
import { PaginationButton, PaginationNavigation } from "./PaginationButton";
import { paginationTheme } from "./theme";

export interface PaginationTheme {
  base: string;
  layout: PaginationLayoutTheme;
  pages: PaginationPagesTheme;
}

export interface PaginationRootTheme {
  base: string;
}

export interface PaginationLayoutTheme {
  table: {
    base: string;
    span: string;
  };
}

export interface PaginationPagesTheme {
  base: string;
  showIcon: string;
  previous: PaginationNavigationTheme;
  next: PaginationNavigationTheme;
  selector: PaginationButtonTheme;
}

export interface PaginationNavigationTheme {
  base: string;
  icon: string;
}

export interface BasePaginationProps extends ComponentProps<"nav">, ThemingProps<PaginationTheme> {
  currentPage: number;
  nextLabel?: string;
  onPageChange: (page: number) => void;
  previousLabel?: string;
  showIcons?: boolean;
}

export interface DefaultPaginationProps extends BasePaginationProps {
  layout?: "navigation" | "pagination";
  renderPaginationButton?: (props: PaginationButtonProps) => ReactNode;
  totalPages: number;
}
export interface TablePaginationProps extends BasePaginationProps {
  layout: "table";
  itemsPerPage: number;
  totalItems: number;
}

export type PaginationProps = DefaultPaginationProps | TablePaginationProps;

export const Pagination = forwardRef<HTMLElement, PaginationProps>((props, ref) => {
  if (props.layout === "table") return <TablePagination {...props} ref={ref} />;
  return <DefaultPagination {...props} ref={ref} />;
});

const DefaultPagination = forwardRef<HTMLElement, DefaultPaginationProps>((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [paginationTheme, provider.theme?.pagination, props.theme],
    [get(provider.clearTheme, "pagination"), props.clearTheme],
    [get(provider.applyTheme, "pagination"), props.applyTheme],
  );

  const {
    className,
    currentPage,
    layout = "pagination",
    nextLabel = "Next",
    onPageChange,
    previousLabel = "Previous",
    renderPaginationButton = (props: PaginationButtonProps) => <PaginationButton {...props} />,
    totalPages,
    showIcons: showIcon = false,
    ...restProps
  } = resolveProps<DefaultPaginationProps>(props, provider.props?.pagination);

  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);

  function goToNextPage() {
    onPageChange(Math.min(currentPage + 1, totalPages));
  }

  function goToPreviousPage() {
    onPageChange(Math.max(currentPage - 1, 1));
  }

  return (
    <nav ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      <ul className={theme.pages.base}>
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {showIcon && <ChevronLeftIcon aria-hidden className={theme.pages.previous.icon} />}
            {previousLabel}
          </PaginationNavigation>
        </li>
        {layout === "pagination" &&
          range(firstPage, lastPage).map((page: number) => (
            <li aria-current={page === currentPage ? "page" : undefined} key={page}>
              {renderPaginationButton({
                className: twMerge(theme.pages.selector.base, currentPage === page && theme.pages.selector.active),
                active: page === currentPage,
                onClick: () => onPageChange(page),
                children: page,
              })}
            </li>
          ))}
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon)}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {nextLabel}
            {showIcon && <ChevronRightIcon aria-hidden className={theme.pages.next.icon} />}
          </PaginationNavigation>
        </li>
      </ul>
    </nav>
  );
});

const TablePagination = forwardRef<HTMLElement, TablePaginationProps>((props, ref) => {
  const provider = useThemeProvider();
  const theme = useResolveTheme(
    [paginationTheme, provider.theme?.pagination, props.theme],
    [get(provider.clearTheme, "pagination"), props.clearTheme],
    [get(provider.applyTheme, "pagination"), props.applyTheme],
  );

  const {
    className,
    currentPage,
    nextLabel = "Next",
    onPageChange,
    previousLabel = "Previous",
    showIcons: showIcon = false,
    itemsPerPage,
    totalItems,
    ...restProps
  } = resolveProps<TablePaginationProps>(props, provider.props?.pagination);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const offset = (currentPage - 1) * itemsPerPage;
  const firstItem = offset + 1;
  const lastItem = currentPage === totalPages ? totalItems : offset + itemsPerPage;

  function goToNextPage() {
    onPageChange(Math.min(currentPage + 1, totalPages));
  }

  function goToPreviousPage() {
    onPageChange(Math.max(currentPage - 1, 1));
  }

  return (
    <nav ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      <div role="meter" aria-label="Table Pagination" className={theme.layout.table.base}>
        Showing <span className={theme.layout.table.span}>{firstItem}</span> to&nbsp;
        <span className={theme.layout.table.span}>{lastItem}</span> of&nbsp;
        <span className={theme.layout.table.span}>{totalItems}</span> Entries
      </div>
      <ul className={theme.pages.base}>
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            {showIcon && <ChevronLeftIcon aria-hidden className={theme.pages.previous.icon} />}
            {previousLabel}
          </PaginationNavigation>
        </li>
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon)}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            {nextLabel}
            {showIcon && <ChevronRightIcon aria-hidden className={theme.pages.next.icon} />}
          </PaginationNavigation>
        </li>
      </ul>
    </nav>
  );
});
Pagination.displayName = "Pagination";
