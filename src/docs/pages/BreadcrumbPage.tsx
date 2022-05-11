import { FC } from 'react';
import { HiHome } from 'react-icons/hi';
import Breadcrumb from '../../lib/components/Breadcrumb';

import { CodeExample, DemoPage } from './DemoPage';

const BreadcrumbPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default breadcrumb',
      code: (
        <Breadcrumb>
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
        <Breadcrumb className="bg-gray-50 py-3 px-5 dark:bg-gray-900">
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
