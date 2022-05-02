import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type FooterIconContentProps = PropsWithChildren<{
  href?: string;
  className?: string;
}>;

export const FooterIconContent: FC<FooterIconContentProps> = ({ href, children, className }) => {
  return (
    <a href={href} className={classNames('text-gray-500  dark:hover:text-white', className)}>
      {children}
    </a>
  );
};
