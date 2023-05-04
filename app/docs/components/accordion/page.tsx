'use client';

import type { FC } from 'react';
import AccordionDocs from './accordion.mdx';

const AccordionPage: FC = () => (
  <div>
    <div className="pb-8">
      <h1 className="mb-2 inline-block w-full text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
        Flowbite React - UI Component Library
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Learn more about the free and open-source Flowbite React UI components and start building modern web
        applications using native React components based on Tailwind CSS
      </p>
    </div>
    <div id="mainContent" className="py-8">
      <AccordionDocs />
    </div>
  </div>
);

export default AccordionPage;
