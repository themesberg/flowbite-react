import type { Meta, StoryFn } from '@storybook/react';
import type { ListProps } from './List';
import { List } from './List';

export default {
  title: 'Components/List',
  component: List,
} as Meta;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const DefaultList = Template.bind({});
DefaultList.storyName = 'Default';
DefaultList.args = {
  children: (
    <>
      <List.Item>At least 10 characters (and up to 100 characters) </List.Item>
      <List.Item>At least one lowercase character </List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ? </List.Item>
    </>
  ),
};
