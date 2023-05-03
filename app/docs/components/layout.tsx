import type { FC, PropsWithChildren } from 'react';

const ComponentDocsLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto flex flex-col w-full gap-8 dark:text-white max-w-4xl">{children}</div>;
};

export default ComponentDocsLayout;
