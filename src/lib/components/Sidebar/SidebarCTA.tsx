import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import type { FlowbiteColors } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { useSidebarContext } from './SidebarContext';

export interface SidebarCTAProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'color'>> {
  color?: keyof SidebarCTAColors;
}

export interface SidebarCTAColors
  extends Pick<
    FlowbiteColors,
    'blue' | 'dark' | 'failure' | 'gray' | 'green' | 'light' | 'purple' | 'red' | 'success' | 'warning' | 'yellow'
  > {
  [key: string]: string;
}

const SidebarCTA: FC<SidebarCTAProps> = ({ children, color = 'info', className, ...props }): JSX.Element => {
  const { isCollapsed } = useSidebarContext();
  const theme = useTheme().theme.sidebar.cta;

  return (
    <div
      className={classNames(theme.base, theme.color[color], className)}
      data-testid="sidebar-cta"
      hidden={isCollapsed}
      {...props}
    >
      {children}
    </div>
  );
};

SidebarCTA.displayName = 'Sidebar.CTA';
export default SidebarCTA;
