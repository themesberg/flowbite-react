import { Meta, Story } from '@storybook/react/types-6-0';
import { HiHome } from 'react-icons/hi';

import { Breadcrumb, BreadcrumbProps } from '.';

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
} as Meta;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;
export const DefaultBreadcrumb = Template.bind({});
DefaultBreadcrumb.storyName = 'Default';
DefaultBreadcrumb.args = {
  items: [
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
  ],
};
