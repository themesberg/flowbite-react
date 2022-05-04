import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Badge, BadgeColor } from '../Badge';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItem {
  className?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: BadgeColor;
}

export interface SidebarItemProps extends PropsWithChildren<SidebarItem> {
  href: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  children,
  className,
  href,
  icon: Icon,
  label,
  labelColor = 'blue',
  ...rest
}) => {
  const { pathname } = useLocation();
  const { collapsed } = useSidebarContext();
  const { insideCollapse } = useSidebarItemContext();

  const Wrapper = ({ children: wrapperChildren }: PropsWithChildren<any>) => (
    <li>
      {collapsed ? (
        <Tooltip content={children} placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  return (
    <Wrapper>
      <Link
        className={classNames(
          'flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          {
            'bg-gray-100 dark:bg-gray-700': href === pathname,
            'group w-full pl-8 transition duration-75': insideCollapse,
          },
          className,
        )}
        to={href}
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames(
              'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
              { 'text-gray-700 dark:text-gray-100': href === pathname },
            )}
          />
        )}
        {!collapsed && <span className="ml-3 flex-1 whitespace-nowrap">{children}</span>}
        {!collapsed && label && <Badge color={labelColor}>{label}</Badge>}
      </Link>
    </Wrapper>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
