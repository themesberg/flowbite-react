import { ComponentProps, PropsWithChildren, ReactEventHandler, ReactNode } from 'react';

export type PaginationProps = PropsWithChildren<Pagination>;

interface Pagination extends ComponentProps<'nav'> {
  currentPage: number;
  layout?: 'navigation' | 'pagination' | 'table';
  onClick?: () => void;
  showIcons?: boolean;
  totalPages: number;
  previousLabel?: string;
  nextLabel?: string;
  buttonClassName?: string;
}

export type PaginationButtonProps = {
  active?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  className?: string;
};
