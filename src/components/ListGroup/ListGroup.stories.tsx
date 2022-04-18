import { Meta, Story } from '@storybook/react/types-6-0';

import { ListGroup, ListGroupProps } from '.';

export default {
  title: 'Components/ListGroup',
  component: ListGroup,
} as Meta;

const Template: Story<ListGroupProps> = (args) => <ListGroup {...args} />;

export const DefaultListGroup = Template.bind({});
DefaultListGroup.storyName = 'Default';
DefaultListGroup.args = {
  children: (
    <>
      <ListGroup.Item>Profile</ListGroup.Item>
      <ListGroup.Item>Settings</ListGroup.Item>
      <ListGroup.Item>Messages</ListGroup.Item>
      <ListGroup.Item>Download</ListGroup.Item>
    </>
  ),
};
