import { FC, PropsWithChildren, ComponentProps } from 'react';
import classNames from 'classnames';

export type FooterIconProps = PropsWithChildren<{
  href?: string;
  className?: string;
  icon?: FC<ComponentProps<'svg'>>;
}>;

export const FooterIcon: FC<FooterIconProps> = ({ href, className, icon: Icon }) => {
  return (
    <a href={href} className={classNames('text-gray-500  dark:hover:text-white', className)}>
      {Icon && <Icon className="h-5 w-5" />}
    </a>
  );
};
