import type { Meta, StoryFn } from "@storybook/react";
import type { ListProps } from "./List";
import { List } from "./List";

export default {
  title: "Components/List",
  component: List,
} as Meta;

const Template: StoryFn<ListProps> = (args) => <List {...args} />;

export const DefaultList = Template.bind({});
DefaultList.storyName = "Default";
DefaultList.args = {
  children: (
    <>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </>
  ),
};

export const UnstyledList = Template.bind({});
UnstyledList.storyName = "Unstyled";
UnstyledList.args = {
  unstyled: true,
  children: (
    <>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </>
  ),
};

export const NestedList = Template.bind({});
NestedList.storyName = "Nested";
NestedList.args = {
  children: (
    <>
      <List.Item>
        List item one
        <List ordered nested>
          <List.Item>You might feel like you are being really "organized" o</List.Item>
          <List.Item>Nested navigation in UIs is a bad idea too, keep things as flat as possible.</List.Item>
          <List.Item>Nesting tons of folders in your source code is also not helpful.</List.Item>
        </List>
      </List.Item>
      <List.Item>
        List item two
        <List ordered nested>
          <List.Item>I'm not sure if we'll bother styling more than two levels deep.</List.Item>
          <List.Item>Two is already too much, three is guaranteed to be a bad idea.</List.Item>
          <List.Item>If you nest four levels deep you belong in prison.</List.Item>
        </List>
      </List.Item>
      <List.Item>
        List item three
        <List ordered nested>
          <List.Item>Again please don't nest lists if you want</List.Item>
          <List.Item>Nobody wants to look at this.</List.Item>
          <List.Item>I'm upset that we even have to bother styling this.</List.Item>
        </List>
      </List.Item>
    </>
  ),
};

export const OrderedList = Template.bind({});
OrderedList.storyName = "Ordered";
OrderedList.args = {
  ordered: true,
  children: (
    <>
      <List.Item>At least 10 characters (and up to 100 characters)</List.Item>
      <List.Item>At least one lowercase character</List.Item>
      <List.Item>Inclusion of at least one special character, e.g., ! @ # ?</List.Item>
    </>
  ),
};

export const HorizontalList = Template.bind({});
HorizontalList.storyName = "Horizontal";
HorizontalList.args = {
  horizontal: true,
  children: (
    <>
      <List.Item>About</List.Item>
      <List.Item>Premium</List.Item>
      <List.Item>Campaigns</List.Item>
      <List.Item>Blog</List.Item>
      <List.Item>Affiliate Program</List.Item>
      <List.Item>FAQs</List.Item>
      <List.Item>Contact</List.Item>
    </>
  ),
};
