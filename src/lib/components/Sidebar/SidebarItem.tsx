import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { Badge } from '../Badge';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItemProps extends PropsWithChildren<ComponentProps<'div'> & Record<string, unknown>> {
  active?: boolean;
  as?: ElementType;
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
  icon: Icon,
  active: isActive,
  label,
  labelColor = 'info',
  className,
  ...props
}) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const { isInsideCollapse } = useSidebarItemContext();
  const theme = useTheme().theme.sidebar.item;

  const ListItem: FC<PropsWithChildren> = ({ children: wrapperChildren }) => (
    <li>
      {isCollapsed ? (
        <Tooltip content={<TooltipContent>{children}</TooltipContent>} placement="right">
          {wrapperChildren}
        </Tooltip>
      ) : (
        wrapperChildren
      )}
    </li>
  );

  const TooltipContent: FC<PropsWithChildren> = ({ children }) => <Children>{children}</Children>;

  const Children: FC<PropsWithChildren> = ({ children }) => (
    <span
      className={classNames(theme.content.base)}
      data-testid="flowbite-sidebar-item-content"
      id={`flowbite-sidebar-item-${id}`}
    >
      {children}
    </span>
  );

  return (
    <ListItem>
      <Component
        aria-labelledby={`flowbite-sidebar-item-${id}`}
        className={classNames(
          theme.base,
          isActive && theme.active,
          !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse,
          className,
        )}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={classNames(theme.icon.base, isActive && theme.icon.active)}
            data-testid="flowbite-sidebar-item-icon"
          />
        )}
        {isCollapsed && !Icon && (
          <span className={theme.collapsed.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
        )}
        {!isCollapsed && <Children>{children}</Children>}
        {!isCollapsed && label && (
          <Badge color={labelColor} data-testid="flowbite-sidebar-label" hidden={isCollapsed}>
            {label}
          </Badge>
        )}
      </Component>
    </ListItem>
  );
};

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
