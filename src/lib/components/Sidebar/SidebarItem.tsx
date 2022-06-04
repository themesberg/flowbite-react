import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { Badge } from '../Badge';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItemProps extends PropsWithChildren<ComponentProps<'div'> & Record<string, unknown>> {
  active?: boolean;
  as?: ElementType;
  className?: string;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: keyof SidebarItemLabelColors;
}

export interface SidebarItemLabelColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

const SidebarItem: FC<SidebarItemProps> = ({
  as: Component = 'a',
  children,
  className,
  icon: Icon,
  active: isActive,
  label,
  labelColor = 'info',
  ...theirProps
}): JSX.Element => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const { isInsideCollapse } = useSidebarItemContext();

  const Wrapper: FC<PropsWithChildren<unknown>> = ({ children }): JSX.Element => (
    <li>
      {isCollapsed ? (
        <Tooltip content={children} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  );

  return (
    <Wrapper>
      <Component
        aria-labelledby={`flowbite-sidebar-item-${id}`}
        className={classNames(
          'flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          {
            'bg-gray-100 dark:bg-gray-700': isActive,
            'group w-full pl-8 transition duration-75': !isCollapsed && isInsideCollapse,
          },
          className,
        )}
        {...theirProps}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={classNames(
              'h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white',
              { 'text-gray-700 dark:text-gray-100': isActive },
            )}
          />
        )}
        <span
          className={classNames('ml-3 flex-1 whitespace-nowrap', { hidden: isCollapsed })}
          data-testid="flowbite-sidebar-item-content"
          id={`flowbite-sidebar-item-${id}`}
        >
          {children}
        </span>
        {label && (
          <Badge color={labelColor} data-testid="flowbite-sidebar-label" hidden={isCollapsed}>
            {label}
          </Badge>
        )}
      </Component>
    </Wrapper>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
