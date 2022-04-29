import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';

export interface SidebarItemProps extends PropsWithChildren<Record<string, unknown>> {
  className?: string;
  href: string;
  icon?: FC<ComponentProps<'svg'>>;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { children, className, href } = props;
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        className={classNames(
          'group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          {
            'bg-gray-100 dark:bg-gray-700': href === pathname,
          },
          className,
        )}
        to={href}
      >
        {props.icon && (
          <>
            <props.icon className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          </>
        )}
        <span className="ml-3">{children}</span>
      </Link>
    </li>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
