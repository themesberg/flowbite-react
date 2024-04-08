"use client";

import { forwardRef, type ComponentPropsWithRef } from "react";
import { twMerge } from "tailwind-merge";
import { mergeDeep } from "../../helpers/merge-deep";
import { getTheme } from "../../theme-store";
import type { DeepPartial } from "../../types";

export interface FlowbiteTablePaginationTheme {
  base: string;
  totalPages: {
    base: string;
    pageRange: string;
    outOf: string;
  };
  page: {
    base: string;
    previous: string;
    pageNo: string;
    next: string;
  };
}

export interface TablePaginationProps extends ComponentPropsWithRef<"div"> {
  count: number;
  onPageChange: (newPage: number) => void;
  page: number;
  rowsPerPage: number;
  paginationType: "numbers" | "prevNextButton";
  theme?: DeepPartial<FlowbiteTablePaginationTheme>;
}

export const TablePagination = forwardRef<HTMLDivElement, TablePaginationProps>(
  (
    {
      count,
      onPageChange,
      page,
      rowsPerPage,
      paginationType = "numbers",
      className,
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const theme = mergeDeep(getTheme().table.pagination, customTheme);

    const nPages = Math.ceil(count / rowsPerPage);
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

    const goToPrevPage = (): void => {
      if (page !== 0) {
        onPageChange(page - 1);
      }
    };

    const goToNextPage = (): void => {
      if (page !== nPages) {
        onPageChange(page + 1);
      }
    };

    const directPageChange = (customPageNo: number): void => {
      if (page !== customPageNo) {
        onPageChange(customPageNo);
      }
    };

    const getLabelDisplayedRowsTo = (): number => {
      if (count === -1) {
        return (page + 1) * rowsPerPage;
      }

      return rowsPerPage === -1 ? count : Math.min(count, (page + 1) * rowsPerPage);
    };

    return (
      <div className={twMerge(theme.base, className)} aria-label="Table pagination" {...props} ref={ref}>
        <span className={theme.totalPages.base}>
          Showing{" "}
          <span className={theme.totalPages.pageRange}>
            {`${count === 0 ? 0 : page * rowsPerPage + 1}-${getLabelDisplayedRowsTo()}`}
          </span>
          of
          <span className={theme.totalPages.outOf}>{count === -1 ? -1 : count}</span>
        </span>

        <ul className={theme.page.base}>
          <button onClick={goToPrevPage} className={theme.page.previous} disabled={page === 0}>
            Previous
          </button>
          {paginationType === "numbers" ? (
            <>
              {pageNumbers.map((pgNumber, index) => {
                return (
                  <button
                    onClick={() => directPageChange(index)}
                    key={index}
                    className={twMerge(theme.page.pageNo, index === page ? "bg-blue-50 text-blue-600" : "")}
                  >
                    {pgNumber}
                  </button>
                );
              })}
            </>
          ) : null}

          <button
            role="button"
            onClick={goToNextPage}
            className={theme.page.next}
            disabled={count !== -1 ? page >= Math.ceil(count / rowsPerPage) - 1 : false}
          >
            Next
          </button>
        </ul>
      </div>
    );
  },
);

TablePagination.displayName = "Table.Pagination";
