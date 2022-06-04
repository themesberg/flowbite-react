import type { FC, PropsWithChildren } from 'react';

export type DropdownItemProps = PropsWithChildren<{
  onClick?: () => void;
}>;

export const DropdownItem: FC<DropdownItemProps> = ({ children, onClick }) => (
  <li
    className="block cursor-pointer py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
    onClick={onClick}
  >
    {children}
  </li>
);
