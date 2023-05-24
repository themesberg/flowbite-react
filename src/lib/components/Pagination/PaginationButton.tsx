import classNames from 'classnames';
import type { ComponentProps, FC, ReactEventHandler, ReactNode } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbitePaginationButtonTheme {
  base: string;
  active: string;
  disabled: string;
}

export interface PaginationButtonProps extends ComponentProps<'button'> {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  theme?: DeepPartial<FlowbitePaginationButtonTheme>;
}

export interface PaginationPrevButtonProps extends Omit<PaginationButtonProps, 'active'> {
  disabled?: boolean;
}

export const PaginationButton: FC<PaginationButtonProps> = ({
  active,
  children,
  className,
  onClick,
  theme: customTheme = {},
  ...props
}) => {
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
      {...props}
    >
      {children}
    </button>
  );
};

PaginationButton.displayName = 'Pagination.Button';

export const PaginationNavigation: FC<PaginationPrevButtonProps> = ({
  children,
  className,
  onClick,
  theme: customTheme = {},
  disabled,
  ...props
}) => {
  const theme = mergeDeep(useTheme().theme.pagination, customTheme);

  return (
    <button
      className={classNames(
        {
          [theme.pages.selector.disabled]: disabled,
        },
        className,
      )}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

PaginationNavigation.displayName = 'Pagination.Navigation';
