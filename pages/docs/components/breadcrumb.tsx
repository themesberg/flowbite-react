import type { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import type { CodeExample } from '~/pages/docs/components/demo';
import DemoPage from '~/pages/docs/components/demo';
import { Breadcrumb } from '~/src';

const BreadcrumbPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default breadcrumb',
      code: (
        <Breadcrumb aria-label="Default breadcrumb example">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
      ),
    },
    {
      title: 'Solid background',
      code: (
        <Breadcrumb aria-label="Solid background breadcrumb example" className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
          <Breadcrumb.Item href="#" icon={HiHome}>
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
          <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
        </Breadcrumb>
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default BreadcrumbPage;
