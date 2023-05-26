import type { FC } from 'react';
import React from 'react';

interface DocsContentLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export const DocsContentLayout: FC<DocsContentLayoutProps> = function ({ title, description, children }) {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-800">
      <div className="pb-8">
        <h1 className="mb-2 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
      </div>
      <div id="mainContent" className="py-8">
        {children}
      </div>
    </div>
  );
};
