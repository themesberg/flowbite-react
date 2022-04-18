import { Meta, Story } from '@storybook/react/types-6-0';

import { Alert, AlertProps } from '.';

export default {
  title: 'Components/Alert',
  component: Alert,
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const DefaultAlert = Template.bind({});
DefaultAlert.storyName = 'Default';
DefaultAlert.args = {
  children: (
    <>
      More info about this info alert goes here. This example text is going to run a bit longer so that you can see how
      spacing within an alert works with this kind of content.
    </>
  ),
};
