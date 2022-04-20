import { FC, PropsWithChildren } from 'react';

export type FooterLinkBoxProps = PropsWithChildren<{}>;

export const FooterLinkBox: FC<FooterLinkBoxProps> = ({ children }) => {
  return (
    <ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0">{children}</ul>
  );
};
