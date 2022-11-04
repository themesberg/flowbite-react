import classNames from 'classnames';
import { ReactEventHandler, ReactNode } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type PaginationButtonProps = {
  active?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  className?: string;
};

const PaginationButton = ({ active, onClick, children, className }: PaginationButtonProps) => {
  const theme = useTheme().theme.pagination;
  return (
    <button
      className={classNames(
        {
          [theme.pages.selector.active]: active,
        },
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default PaginationButton;
