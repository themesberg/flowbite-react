import type { Meta } from '@storybook/react/types-6-0';
import { HiHome } from 'react-icons/hi';
import { Breadcrumb } from '.';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

export const Default = (): JSX.Element => (
  <Breadcrumb>
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);

export const SolidBackground = (): JSX.Element => (
  <Breadcrumb className="bg-gray-50 py-3 px-5 dark:bg-gray-800">
    <Breadcrumb.Item href="#" icon={HiHome}>
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
    <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
  </Breadcrumb>
);
SolidBackground.storyName = 'Solid background';
