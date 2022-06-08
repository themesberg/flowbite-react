import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { Badge } from '../Badge';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import { useSidebarItemContext } from './SidebarItemContext';

export interface SidebarItemProps
  extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'> & Record<string, unknown>> {
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
  icon: Icon,
  active: isActive,
  label,
  labelColor = 'info',
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);

  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const { isInsideCollapse } = useSidebarItemContext();
  const theme = useTheme().theme.sidebar.item;

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
          theme.base,
          isActive && theme.active,
          !isCollapsed && isInsideCollapse && theme.collapsed.insideCollapse,
        )}
        {...theirProps}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={classNames(theme.icon.base, isActive && theme.icon.active)}
            data-testid="flowbite-sidebar-item-icon"
          />
        )}
        <span
          className={classNames(theme.content.base, isCollapsed && theme.content.collapsed)}
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
