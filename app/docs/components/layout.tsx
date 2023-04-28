import type { FC, PropsWithChildren } from 'react';

const ComponentDocsLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto flex flex-col w-full gap-8 dark:text-white">{children}</div>;
};

export default ComponentDocsLayout;
