import classNames from 'classnames';
import type { FC, PropsWithChildren } from 'react';

export type FooterLinkGroupProps = PropsWithChildren<{
  className?: string;
}>;

export const FooterLinkGroup: FC<FooterLinkGroupProps> = ({ children, className }) => {
  return <ul className={classNames('flex text-gray-500 dark:text-gray-400 ', className)}>{children}</ul>;
};
