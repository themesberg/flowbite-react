import classNames from 'classnames';
import type { ComponentProps, ElementType, FC, PropsWithChildren } from 'react';
import { useEffect, useRef, useState } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import type { FlowbiteSidebarCollapseTheme } from './SidebarCollapse';
import SidebarCollapse from './SidebarCollapse';
import { SidebarContext } from './SidebarContext';
import type { FlowbiteSidebarCTATheme } from './SidebarCTA';
import SidebarCTA from './SidebarCTA';
import type { FlowbiteSidebarItemTheme } from './SidebarItem';
import SidebarItem from './SidebarItem';
import SidebarItemGroup from './SidebarItemGroup';
import SidebarItems from './SidebarItems';
import type { FlowbiteSidebarLogoTheme } from './SidebarLogo';
import SidebarLogo from './SidebarLogo';

export interface FlowbiteSidebarTheme {
  root: {
    base: string;
    collapsed: FlowbiteBoolean;
    inner: string;
  };
  collapse: FlowbiteSidebarCollapseTheme;
  cta: FlowbiteSidebarCTATheme;
  item: FlowbiteSidebarItemTheme;
  items: string;
  itemGroup: string;
  logo: FlowbiteSidebarLogoTheme;
}

export interface SidebarProps extends PropsWithChildren, ComponentProps<'div'> {
  as?: ElementType;
  collapseBehavior?: 'collapse' | 'hide';
  collapsed?: boolean;
  theme?: DeepPartial<FlowbiteSidebarTheme>;
}

const SidebarComponent: FC<SidebarProps> = ({
  children,
  as: Component = 'nav',
  collapseBehavior = 'collapse',
  collapsed: isCollapsed = false,
  theme: customTheme = {},
  className,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);
  const toggleRef: any = useRef();

  useEffect(() => {
    const closeSlidebar = (e: any) => {
      if (!toggleRef.current.contains(e.target)) {
        setToggle(false);
      }
    };

    document.addEventListener('mousedown', closeSlidebar);

    return () => {
      document.removeEventListener('mousedown', closeSlidebar);
    };
  }, [toggle]);
  const theme = mergeDeep(useTheme().theme.sidebar, customTheme);

  return (
    <>
      <button
        onClick={() => {
          setToggle(true);
        }}
        type="button"
        className={`${
          isCollapsed && 'hidden'
        } mt-2 ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 sm:hidden`}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="h-6 w-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="slider"
        ref={toggleRef}
        className={`fixed top-0 left-0 z-40 h-screen w-64 -translate-x-full transition-transform sm:translate-x-0 ${
          toggle === true ? 'translate-x-0' : ''
        } ${isCollapsed && 'translate-x-0'}`}
      >
        <SidebarContext.Provider value={{ isCollapsed }}>
          <Component
            aria-label="Sidebar"
            hidden={isCollapsed && collapseBehavior === 'hide'}
            className={classNames(theme.root.base, theme.root.collapsed[isCollapsed ? 'on' : 'off'], className)}
            {...props}
          >
            <div className={theme.root.inner}>{children}</div>
          </Component>
        </SidebarContext.Provider>
      </aside>

      {toggle && <div className="fixed inset-0 bg-black opacity-25 blur-lg"></div>}
    </>
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
