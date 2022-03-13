import { FC } from 'react';

export const Navbar: FC = ({ children }) => (
  <nav className="border-b border-gray-200 bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4">
    <div className="mx-auto flex flex-wrap items-center justify-between">{children}</div>
  </nav>
);
