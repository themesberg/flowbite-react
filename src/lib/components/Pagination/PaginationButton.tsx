import classNames from 'classnames';
import { ReactEventHandler, ReactNode } from 'react';
import { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbitePaginationButtonTheme {
  base: string;
  active: string;
}

export interface PaginationButtonProps {
  active?: boolean;
  children?: ReactNode;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  className?: string;
  theme?: DeepPartial<FlowbitePaginationButtonTheme>;
}

const PaginationButton = ({ active, onClick, children, className, theme: customTheme = {} }: PaginationButtonProps) => {
  const theme = mergeDeep(useTheme().theme.pagination, customTheme);

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
