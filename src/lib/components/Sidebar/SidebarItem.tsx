import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren, ReactNode } from 'react';
import { forwardRef, useId } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import { Badge } from '../Badge';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface FlowbiteSidebarItemTheme {
  active: string;
  base: string;
  collapsed: {
    insideCollapse: string;
    noIcon: string;
  };
  content: {
    base: string;
  };
  icon: {
    base: string;
    active: string;
  };
  label: string;
}

export interface SidebarItemProps
  extends PropsWithChildren,
    Omit<ComponentProps<'div'>, 'ref'>,
    Record<string, unknown> {
  active?: boolean;
  as?: ElementType;
  href?: string;
  icon?: FC<ComponentProps<'svg'>>;
  label?: string;
  labelColor?: keyof SidebarItemLabelColors;
  theme?: DeepPartial<FlowbiteSidebarItemTheme>;
}

export interface SidebarItemLabelColors extends Pick<FlowbiteColors, 'gray'> {
  [key: string]: string;
}

const ListItem: FC<PropsWithChildren<{ id: string; isCollapsed: boolean; tooltipChildren: ReactNode | undefined }>> = ({
  id,
  isCollapsed,
  tooltipChildren,
  children: wrapperChildren,
}) => (
  <li>
    {isCollapsed ? (
      <Tooltip content={<TooltipContent id={id}>{tooltipChildren}</TooltipContent>} placement="right">
        {wrapperChildren}
      </Tooltip>
    ) : (
      wrapperChildren
    )}
  </li>
);

const TooltipContent: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => (
  <Children id={id}>{children}</Children>
);

const Children: FC<PropsWithChildren<{ id: string }>> = ({ id, children }) => {
  const theme = useTheme().theme.sidebar.item;

  return (
    <span
      data-testid="flowbite-sidebar-item-content"
      id={`flowbite-sidebar-item-${id}`}
      className={classNames(theme.content.base)}
    >
      {children}
    </span>
  );
};

const SidebarItem = forwardRef<Element, SidebarItemProps>(
  (
    {
      active: isActive,
      as: Component = 'a',
      children,
      className,
      icon: Icon,
      label,
      labelColor = 'info',
      theme: customTheme = {},
      ...props
    },
    ref,
  ) => {
    const id = useId();
    const { isCollapsed } = useSidebarContext();
    const { isInsideCollapse } = useSidebarItemContext();
    const theme = mergeDeep(useTheme().theme.sidebar.item, customTheme);

    return (
      <ListItem id={id} isCollapsed={isCollapsed} tooltipChildren={children}>
        <Component
          aria-labelledby={`flowbite-sidebar-item-${id}`}
          ref={ref}
          className={classNames(
            theme.base,
            isActive && theme.active,
            !isCollapsed && isInsideCollapse && theme.collapsed?.insideCollapse,
            className,
          )}
          {...props}
        >
          {Icon && (
            <Icon
              aria-hidden
              data-testid="flowbite-sidebar-item-icon"
              className={classNames(theme.icon?.base, isActive && theme.icon?.active)}
            />
          )}
          {isCollapsed && !Icon && (
            <span className={theme.collapsed?.noIcon}>{(children as string).charAt(0).toLocaleUpperCase() ?? '?'}</span>
          )}
          {!isCollapsed && <Children id={id}>{children}</Children>}
          {!isCollapsed && label && (
            <Badge color={labelColor} data-testid="flowbite-sidebar-label" hidden={isCollapsed} className={theme.label}>
              {label}
            </Badge>
          )}
        </Component>
      </ListItem>
    );
  },
);

SidebarItem.displayName = 'Sidebar.Item';
export default SidebarItem;
