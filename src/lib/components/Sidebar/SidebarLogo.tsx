import type { ComponentProps, FC, PropsWithChildren } from 'react';
import { useId } from 'react';
import { excludeClassName } from '../../helpers/exclude';
import { useTheme } from '../Flowbite/ThemeContext';
import { useSidebarContext } from './SidebarContext';

export interface SidebarLogoProps extends PropsWithChildren<Omit<ComponentProps<'a'>, 'className'>> {
  className?: string;
  href: string;
  img: string;
  imgAlt?: string;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ children, href, img, imgAlt = '', ...props }) => {
  const theirProps = excludeClassName(props);

  const id = useId();
  const { isCollapsed } = useSidebarContext();
  const theme = useTheme().theme.sidebar.logo;

  return (
    <a aria-labelledby={`flowbite-sidebar-logo-${id}`} className={theme.base} href={href} {...theirProps}>
      <img alt={imgAlt} className={theme.img} src={img} />
      <span className={theme.collapsed[isCollapsed ? 'on' : 'off']} id={`flowbite-sidebar-logo-${id}`}>
        {children}
      </span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
