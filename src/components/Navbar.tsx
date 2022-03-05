import { FC } from 'react';

export const Navbar: FC = ({ children }) => (
  <nav className="bg-white border-b border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700">
    <div className="flex flex-wrap justify-between items-center mx-auto">{children}</div>
  </nav>
);
