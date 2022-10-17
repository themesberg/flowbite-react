import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useTheme } from '../Flowbite/ThemeContext';

export type DropdownItemProps = PropsWithChildren<{
  onClick?: () => void;
  closeDropdown?: () => void;
  icon?: FC<ComponentProps<'svg'>>;
}>;

export const DropdownItem: FC<DropdownItemProps> = ({ children, onClick, icon: Icon, closeDropdown }) => {
  const theme = useTheme().theme.dropdown.floating.item;

  const handleClick = () => {
    onClick?.();
    closeDropdown?.();
  };

  return (
    <li className={theme.base} onClick={handleClick}>
      {Icon && <Icon className={theme.icon} />}
      {children}
    </li>
  );
};
