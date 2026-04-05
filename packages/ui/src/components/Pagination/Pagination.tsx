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
  layout?: "navigation" | "pagination" | "table";
  currentPage: number;
  nextLabel?: string;
  previousLabel?: string;
  showIcons?: boolean;
}

interface DefaultPaginationSharedProps extends BasePaginationProps {
  layout?: "navigation" | "pagination";
  renderPaginationButton?: (props: PaginationButtonProps) => ReactNode;
  totalPages: number;
}

/**
 * Client-side pagination: uses `onPageChange` callback for navigation.
 */
interface ClientSidePaginationProps extends DefaultPaginationSharedProps {
  onPageChange: (page: number) => void;
  getPageUrl?: never;
}

/**
 * Anchor-based pagination: uses `getPageUrl` to render `<a>` elements for SEO.
 * `onPageChange` is optional — if omitted, anchor links handle navigation natively.
 */
interface AnchorPaginationProps extends DefaultPaginationSharedProps {
  /**
   * A function that returns a URL for a given page number. When provided, pagination buttons
   * render as `<a>` elements instead of `<button>` elements, improving SEO by making
   * pagination links crawlable by search engines.
   */
  getPageUrl: (page: number) => string;
  onPageChange?: (page: number) => void;
}

export type DefaultPaginationProps = ClientSidePaginationProps | AnchorPaginationProps;

export interface TablePaginationProps extends BasePaginationProps {
  layout: "table";
  onPageChange: (page: number) => void;
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
    getPageUrl,
    layout = "pagination",
    nextLabel = "Next",
    onPageChange,
    previousLabel = "Previous",
    renderPaginationButton = (props: PaginationButtonProps) => <PaginationButton {...props} />,
    totalPages,
    showIcons: showIcon = false,
    ...restProps
  } = resolveProps<DefaultPaginationProps>(props, provider.props?.pagination);

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    throw new Error("Invalid props: currentPage must be a positive integer");
  }

  if (!Number.isInteger(totalPages) || totalPages < 1) {
    throw new Error("Invalid props: totalPages must be a positive integer");
  }

  const lastPage = Math.min(Math.max(layout === "pagination" ? currentPage + 2 : currentPage + 4, 5), totalPages);
  const firstPage = Math.max(1, lastPage - 4);

  const previousPage = Math.max(currentPage - 1, 1);
  const nextPage = Math.min(currentPage + 1, totalPages);

  function goToNextPage() {
    onPageChange?.(nextPage);
  }

  function goToPreviousPage() {
    onPageChange?.(previousPage);
  }

  const previousHref = getPageUrl && currentPage > 1 ? getPageUrl(previousPage) : undefined;
  const nextHref = getPageUrl && currentPage < totalPages ? getPageUrl(nextPage) : undefined;

  return (
    <nav ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      <ul className={theme.pages.base}>
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.previous.base, showIcon && theme.pages.showIcon)}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            {...(previousHref ? { href: previousHref } : {})}
          >
            {showIcon && <ChevronLeftIcon aria-hidden className={theme.pages.previous.icon} />}
            {previousLabel}
          </PaginationNavigation>
        </li>
        {layout === "pagination" &&
          range(firstPage, lastPage).map((page: number) => {
            const pageHref = getPageUrl ? getPageUrl(page) : undefined;
            return (
              <li aria-current={page === currentPage ? "page" : undefined} key={page}>
                {renderPaginationButton({
                  className: theme.pages.selector.base,
                  active: page === currentPage,
                  onClick: () => onPageChange?.(page),
                  ...(pageHref ? { href: pageHref } : {}),
                  children: page,
                })}
              </li>
            );
          })}
        <li>
          <PaginationNavigation
            className={twMerge(theme.pages.next.base, showIcon && theme.pages.showIcon)}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            {...(nextHref ? { href: nextHref } : {})}
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

  if (!Number.isInteger(currentPage) || currentPage < 1) {
    throw new Error("Invalid props: currentPage must be a positive integer");
  }
  if (!Number.isInteger(itemsPerPage) || itemsPerPage < 1) {
    throw new Error("Invalid props: itemsPerPage must be a positive integer");
  }
  if (!Number.isInteger(totalItems) || totalItems < 0) {
    throw new Error("Invalid props: totalItems must be a non-negative integer");
  }
  const totalPages = totalItems > 0 ? Math.ceil(totalItems / itemsPerPage) : 1;

  const offset = (currentPage - 1) * itemsPerPage;
  const firstItem = totalItems > 0 ? offset + 1 : 0;
  const lastItem = currentPage === totalPages ? totalItems : offset + itemsPerPage;

  function goToNextPage() {
    onPageChange(Math.min(currentPage + 1, totalPages));
  }

  function goToPreviousPage() {
    onPageChange(Math.max(currentPage - 1, 1));
  }

  return (
    <nav ref={ref} className={twMerge(theme.base, className)} {...restProps}>
      <div role="status" aria-live="polite" aria-label="Table Pagination" className={theme.layout.table.base}>
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
