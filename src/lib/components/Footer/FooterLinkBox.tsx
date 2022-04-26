import classNames from 'classnames';
import { FC, PropsWithChildren } from 'react';

export type FooterLinkBoxProps = PropsWithChildren<{
  className?: string;
}>;

export const FooterLinkBox: FC<FooterLinkBoxProps> = ({ children, className }) => {
  return <ul className={classNames('flex text-gray-500 dark:text-gray-400 ', className)}>{children}</ul>;
};
