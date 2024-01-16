import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { type CodeData } from '~/components/code-demo';

const code = `
'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

function Component() {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
      <Breadcrumb.Item href="#" icon={HiHome}>
        Home
      </Breadcrumb.Item>
      <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
      <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
    </Breadcrumb>
  );
}
`;

const codeRSC = `
import { Breadcrumb, BreadcrumbItem } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

function Component() {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
      <BreadcrumbItem href="#" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite React</BreadcrumbItem>
    </Breadcrumb>
  );
}
`;

function Component() {
  return (
    <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
      <BreadcrumbItem href="#" icon={HiHome}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Projects</BreadcrumbItem>
      <BreadcrumbItem>Flowbite React</BreadcrumbItem>
    </Breadcrumb>
  );
}

export const backgroundColor: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    {
      fileName: 'server',
      language: 'tsx',
      code: codeRSC,
    },
  ],
  githubSlug: 'breadcrumb/breadcrumb.backgroundColor.tsx',
  component: <Component />,
};
