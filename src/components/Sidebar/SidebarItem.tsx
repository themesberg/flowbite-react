import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebarProps } from '.';
import { Badge, BadgeColor } from '../Badge';
export interface SidebarItemProps extends PropsWithChildren<Pick<SidebarProps, 'collapsed'>> {
  className?: string;
  href: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: BadgeColor;
}

const SidebarItem: FC<SidebarItemProps> = (props) => {
  const { children, className, collapsed, href, label, labelColor = 'blue' } = props;
  const { pathname } = useLocation();

  return (
    <li>
      <Link
        className={classNames(
          'flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          {
            'bg-gray-100 dark:bg-gray-700': href === pathname,
          },
          className,
        )}
        to={href}
      >
        {props.icon && (
          <>
            <props.icon className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
          </>
        )}
        {!collapsed && <span className="ml-3 flex-1 whitespace-nowrap">{children}</span>}
        {!collapsed && label && <Badge color={labelColor as any}>{label}</Badge>}
      </Link>
    </li>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
