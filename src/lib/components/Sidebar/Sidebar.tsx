
import classNames from 'classnames';
import { ComponentProps, FC, PropsWithChildren, useEffect, useState } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import SidebarCTA from './SidebarCTA';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import SidebarLogo from './SidebarLogo';

export interface SidebarProps extends PropsWithChildren<Omit<ComponentProps<'div'>, 'className'>> {
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean ;
}

let isCollapsed: boolean = false;
const SidebarComponent: FC<SidebarProps> = ({
  children,
  collapseBehavior = 'collapse',
  collapsed,
  ...props
}): JSX.Element => {
  const theirProps = excludeClassName(props);
  const [screenSize, setScreenSize] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize! <= 800) {
      isCollapsed = true;
    } else {
      isCollapsed = false;
    }
  }, [screenSize]);

  useEffect(() => {
    isCollapsed = collapsed;
  }, [collapsed]);

  const theme = useTheme().theme.sidebar;

  return (
    <SidebarContext.Provider value={{ isCollapsed }}>
      <aside
        aria-label="Sidebar"
        className={classNames(theme.base, theme.collapsed[isCollapsed ? 'on' : 'off'])}
        hidden={isCollapsed && collapseBehavior === 'hide'}
        {...theirProps}
      >
        <div className={theme.inner}>{children}</div>
      </aside>
    </SidebarContext.Provider>
  );
};

SidebarComponent.displayName = 'Sidebar';
export const Sidebar = Object.assign(SidebarComponent, {
  Collapse: SidebarCollapse,
  CTA: SidebarCTA,
  Item: SidebarItem,
  Items: SidebarItems,
  ItemGroup: SidebarItemGroup,
  Logo: SidebarLogo,
});
