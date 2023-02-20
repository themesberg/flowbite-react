import classNames from 'classnames';
import type { ComponentProps, FC, ReactEventHandler, ReactNode } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { useTheme } from '../Flowbite/ThemeContext';

export interface FlowbitePaginationButtonTheme {
  base: string;
  active: string;
}

export interface PaginationButtonProps extends ComponentProps<'button'> {
  active?: boolean;
  children?: ReactNode;
  className?: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  theme?: DeepPartial<FlowbitePaginationButtonTheme>;
}

const PaginationButton: FC<PaginationButtonProps> = ({
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
export default PaginationButton;
