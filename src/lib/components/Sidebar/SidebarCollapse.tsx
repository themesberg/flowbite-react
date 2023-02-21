import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useEffect, useId, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { Tooltip } from '../Tooltip';
import { useSidebarContext } from './SidebarContext';
import type { SidebarItemProps } from './SidebarItem';
import { SidebarItemContext } from './SidebarItemContext';

export interface FlowbiteSidebarCollapseTheme {
  button: string;
  icon: {
    base: string;
    open: FlowbiteBoolean;
  };
  label: {
    base: string;
    icon: string;
  };
  list: string;
}

export interface SidebarCollapseProps
  extends PropsWithChildren,
    Pick<SidebarItemProps, 'active' | 'as' | 'href' | 'icon' | 'label' | 'labelColor'>,
    ComponentProps<'button'> {
  onClick?: ComponentProps<'button'>['onClick'];
  open?: boolean;
  theme?: DeepPartial<FlowbiteSidebarCollapseTheme>;
}

const SidebarCollapse: FC<SidebarCollapseProps> = ({
  children,
  className,
  icon: Icon,
  label,
  open = false,
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const [isOpen, setOpen] = useState(open);
  const theme = mergeDeep(useTheme().theme.sidebar.collapse, customTheme);

  useEffect(() => setOpen(open), [open]);

  const Wrapper: FC<PropsWithChildren> = ({ children }) => (
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
        id={`flowbite-sidebar-collapse-${id}`}
        onClick={() => setOpen(!isOpen)}
        title={label}
        type="button"
        className={classNames(theme.button, className)}
        {...props}
      >
        {Icon && (
          <Icon
            aria-hidden
            data-testid="flowbite-sidebar-collapse-icon"
            className={classNames(theme.icon.base, theme.icon.open[isOpen ? 'on' : 'off'])}
          />
        )}
        {isCollapsed ? (
          <span className="sr-only">{label}</span>
        ) : (
          <>
            <span data-testid="flowbite-sidebar-collapse-label" className={theme.label.base}>
              {label}
            </span>
            <HiChevronDown aria-hidden className={theme.label.icon} />
          </>
        )}
      </button>
      <ul aria-labelledby={`flowbite-sidebar-collapse-${id}`} hidden={!isOpen} className={theme.list}>
        <SidebarItemContext.Provider value={{ isInsideCollapse: true }}>{children}</SidebarItemContext.Provider>
      </ul>
    </Wrapper>
  );
};

SidebarCollapse.displayName = 'Sidebar.Collapse';
export default SidebarCollapse;
