import classNames from 'classnames';
import { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { Badge } from '../Badge';
import { Colors } from '../Flowbite/FlowbiteTheme';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItem {
  className?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: keyof Colors;
}

export interface SidebarItemProps extends PropsWithChildren<SidebarItem & Record<string, unknown>> {
  as?: ElementType;
  active?: boolean;
}

const SidebarItem: FC<SidebarItemProps> = ({
  children,
  className,
  as: Component = 'a',
  active,
  icon: Icon,
  label,
  labelColor = 'blue',
  ...rest
}) => {
  const { collapsed } = useSidebarContext();
  const { insideCollapse } = useSidebarItemContext();

  const Wrapper = ({ children: wrapperChildren }: PropsWithChildren<Record<string, unknown>>) => (
    <li data-testid="sidebar-item">
      {collapsed ? (
        <Tooltip content={children} data-testid="sidebar-item-tooltip" placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  return (
    <Wrapper>
      <Component
        className={classNames(
          'flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          {
            'bg-gray-100 dark:bg-gray-700': active,
            'group w-full pl-8 transition duration-75': !collapsed && insideCollapse,
          },
          className,
        )}
        {...rest}
      >
        {Icon && (
          <Icon
            className={classNames(
              'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
              { 'text-gray-700 dark:text-gray-100': active },
            )}
          />
        )}
        {!collapsed && (
          <span className="ml-3 flex-1 whitespace-nowrap" data-testid="sidebar-item-content">
            {children}
          </span>
        )}
        {!collapsed && label && (
          <Badge color={labelColor} data-testid="sidebar-item-label">
            {label}
          </Badge>
        )}
      </Component>
    </Wrapper>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
