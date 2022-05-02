import { FC } from 'react';
import { HiHome } from 'react-icons/hi';

import { Breadcrumb } from '../../lib';
import { CodeExample, DemoPage } from './DemoPage';

const BreadcrumbPage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default breadcrumb',
      code: (
        <Breadcrumb
          items={[
            {
              icon: HiHome,
              label: 'Home',
              href: '#/breadcrumb',
            },
            {
              label: 'Projects',
              href: '#/breadcrumb',
            },
            {
              label: 'Flowbite React',
            },
          ]}
        />
      ),
    },
  ];

  return <DemoPage examples={examples} />;
};

export default BreadcrumbPage;
