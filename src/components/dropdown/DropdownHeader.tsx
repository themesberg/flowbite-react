import { FC, PropsWithChildren } from 'react';
import { DropdownDivider } from './DropdownDivider';

export const DropdownHeader: FC<PropsWithChildren<any>> = ({ children }) => (
  <>
    <div className="block py-2 px-4 text-sm text-gray-700 dark:text-gray-200">{children}</div>
    <DropdownDivider />
  </>
);
