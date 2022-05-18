import classNames from 'classnames';
import { PropsWithChildren, FC, HTMLAttributes } from 'react';
import { useSidebarContext } from './SidebarContext';

export interface SidebarLogoProps extends PropsWithChildren<HTMLAttributes<HTMLAnchorElement>> {
  className?: string;
  href: string;
  img: string;
  imgAlt?: string;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ children, className, href, img, imgAlt = '', ...rest }) => {
  const { collapsed } = useSidebarContext();

  return (
    <a className={classNames('mb-5 flex items-center pl-2.5', className)} href={href} {...rest}>
      <img alt={imgAlt} className="mr-3 h-6 sm:h-7" src={img} />
      <span
        className={classNames(
          collapsed ? 'sr-only' : 'self-center whitespace-nowrap text-xl font-semibold dark:text-white',
        )}
        data-testid="sidebar-logo"
      >
        {children}
      </span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
