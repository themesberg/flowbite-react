import { FC, PropsWithChildren } from 'react';

export type CopyrightProps = PropsWithChildren<{
  href?: string;
  createby?: string | undefined;
  year?: number;
}>;

export const FooterCopyright: FC<CopyrightProps> = ({ href, createby, year }) => {
  return (
    <span className="text-sm  text-gray-500 dark:text-gray-400 sm:text-center">
      © {year}
      <a href={href} className="ml-1 hover:underline">
        {createby}
      </a>
      . All Rights Reserved.
    </span>
  );
};
