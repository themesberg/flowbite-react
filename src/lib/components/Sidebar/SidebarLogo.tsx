import classNames from 'classnames';
import { PropsWithChildren, FC } from 'react';

export interface SidebarLogoProps extends PropsWithChildren<Record<string, unknown>> {
  className?: string;
  href: string;
  img: string;
  imgAlt?: string;
}

const SidebarLogo: FC<SidebarLogoProps> = ({ children, className, href, img, imgAlt = '' }) => {
  return (
    <a href={href} className={classNames('mb-5 flex items-center pl-2.5', className)}>
      <img alt={imgAlt} className="mr-3 h-6 sm:h-7" src={img} />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">{children}</span>
    </a>
  );
};

SidebarLogo.displayName = 'Sidebar.Logo';
export default SidebarLogo;
