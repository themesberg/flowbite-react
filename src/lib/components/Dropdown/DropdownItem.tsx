import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type DropdownItemProps = PropsWithChildren<ComponentProps<'li'>> & {
  onClick?: () => void;
  icon?: FC<ComponentProps<'svg'>>;
};

export const DropdownItem: FC<DropdownItemProps> = ({ children, className, onClick, icon: Icon }) => {
  const theme = useTheme().theme.dropdown.floating.item;

  return (
    <li className={classNames(theme.base, className)} onClick={onClick}>
      {Icon && <Icon className={theme.icon} />}
      {children}
    </li>
  );
};
