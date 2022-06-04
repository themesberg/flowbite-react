import classNames from 'classnames';
import type { PropsWithChildren, FC, HTMLAttributes } from 'react';
import { useId } from 'react';
import { useSidebarContext } from './SidebarContext';

export interface SidebarLogoProps extends PropsWithChildren<HTMLAttributes<HTMLAnchorElement>> {
  className?: string;
  href: string;
  img: string;
  imgAlt?: string;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ children, className, href, img, imgAlt = '', ...theirProps }) => {
  const id = useId();
  const { isCollapsed } = useSidebarContext();

  return (
    <a
      aria-labelledby={`flowbite-sidebar-logo-${id}`}
      className={classNames('mb-5 flex items-center pl-2.5', className)}
      href={href}
      {...theirProps}
    >
      <img alt={imgAlt} className="mr-3 h-6 sm:h-7" src={img} />
      <span
        className={classNames(
          isCollapsed ? 'hidden' : 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
        )}
        id={`flowbite-sidebar-logo-${id}`}
      >
        {children}
      </span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
