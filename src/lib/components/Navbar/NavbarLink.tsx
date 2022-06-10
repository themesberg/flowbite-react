import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';

export type NavbarLinkProps = PropsWithChildren<{
  active?: boolean;
  disabled?: boolean;
  href?: string;
}>;

export const NavbarLink: FC<NavbarLinkProps> = ({ active, disabled, href, children }) => {
  return (
    <li>
      <a
        href={href}
        className={classNames('block py-2 pr-4 pl-3 md:p-0', {
          'bg-blue-700 text-white dark:text-white md:bg-transparent md:text-blue-700': active,
          'border-b border-gray-100  text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white':
            !active && !disabled,
          'text-gray-400 hover:cursor-not-allowed dark:text-gray-600': disabled,
        })}
      >
        {children}
      </a>
    </li>
  );
};
