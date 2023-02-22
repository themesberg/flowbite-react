import classNames from 'classnames';
import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import type { DeepPartial } from '..';
import { mergeDeep } from '../../helpers/mergeDeep';
import type { FlowbiteBoolean } from '../Flowbite/FlowbiteTheme';
import { useTheme } from '../Flowbite/ThemeContext';
import { useSidebarContext } from './SidebarContext';

export interface FlowbiteSidebarLogoTheme {
  base: string;
  collapsed: FlowbiteBoolean;
  img: string;
}

export interface SidebarLogoProps extends PropsWithChildren, ComponentProps<'a'> {
  href: string;
  img: string;
  imgAlt?: string;
  theme?: DeepPartial<FlowbiteSidebarLogoTheme>;
}

const SidebarLogo: FC<SidebarLogoProps> = ({
  children,
  className,
  href,
  img,
  imgAlt = '',
  theme: customTheme = {},
  ...props
}) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const theme = mergeDeep(useTheme().theme.sidebar.logo, customTheme);

  return (
    <a
      aria-labelledby={`flowbite-sidebar-logo-${id}`}
      href={href}
      className={classNames(theme.base, className)}
      {...props}
    >
      <img alt={imgAlt} src={img} className={theme.img} />
      <span className={theme.collapsed[isCollapsed ? 'on' : 'off']} id={`flowbite-sidebar-logo-${id}`}>
        {children}
      </span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
