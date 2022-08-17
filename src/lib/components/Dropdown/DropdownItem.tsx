import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type DropdownItemProps = PropsWithChildren<{
  onClick?: () => void;
  icon?: FC<ComponentProps<'svg'>>;
}>;

export const DropdownItem: FC<DropdownItemProps> = ({ children, onClick, icon: Icon }) => {
  const theme = useTheme().theme.dropdown.floating.item;

  return (
    <li className={theme.base} onClick={onClick}>
      {Icon && <Icon className={theme.icon} />}
      {children}
    </li>
  );
};
