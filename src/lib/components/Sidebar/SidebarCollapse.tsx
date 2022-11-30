import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useId, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { useTheme } from '../Flowbite/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import type { SidebarItemProps } from './SidebarItem';
import { SidebarItemContext } from './SidebarItemContext';

export interface SidebarCollapseProps extends PropsWithChildren<ComponentProps<'button'> & SidebarItemProps> {
  open?: boolean;
}

const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  icon: Icon,
  label,
  className,
  open = false,
  ...props
}): JSX.Element => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const [isOpen, setOpen] = useState(open);
  const theme = useTheme().theme.sidebar.collapse;

  useEffect(() => setOpen(open), [open]);

  const Wrapper: FC<PropsWithChildren<unknown>> = ({ children }): JSX.Element => (
    <li>
      {isCollapsed && !isOpen ? (
        <Tooltip content={label} placement="right">
          {children}
        </Tooltip>
      ) : (
        children
      )}
    </li>
  );

  return (
    <Wrapper>
      <button
        className={classNames(theme.button, className)}
        id={`flowbite-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        title={label}
        type="button"
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            className={classNames(theme.icon.base, theme.icon.open[isOpen ? 'on' : 'off'])}
            data-testid="flowbite-sidebar-collapse-icon"
          />
        )}
        {isCollapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span className={theme.label.base} data-testid="flowbite-sidebar-collapse-label">
              {label}
            </span>
            <HiChevronDown aria-hidden className={theme.label.icon} />
          </>
        )}
      </button>
      <ul aria-labelledby={`flowbite-sidebar-collapse-${id}`} className={theme.list} hidden={!isOpen}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = 'Sidebar.Collapse';
export default SidebarCollapse;
