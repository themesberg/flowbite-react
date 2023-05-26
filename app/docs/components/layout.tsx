import type { FC, PropsWithChildren } from 'react';

const ComponentDocsLayout: FC<PropsWithChildren> = ({ children }) => {
  return <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 dark:text-white">{children}</div>;
};

export default ComponentDocsLayout;
