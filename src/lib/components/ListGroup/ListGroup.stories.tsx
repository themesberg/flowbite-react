import type { Meta, Story } from '@storybook/react/types-6-0';
import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';
import type { ListGroupProps } from '.';
import { ListGroup } from '.';

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

export const WithLinks = Template.bind({});
WithLinks.storyName = 'With links';
WithLinks.args = {
  children: (
    <>
      <ListGroup.Item active href="#">
        Profile
      </ListGroup.Item>
      <ListGroup.Item href="#">Settings</ListGroup.Item>
      <ListGroup.Item href="#">Messages</ListGroup.Item>
      <ListGroup.Item href="#">Download</ListGroup.Item>
    </>
  ),
};

export const WithButtons = Template.bind({});
WithButtons.storyName = 'With buttons';
WithButtons.args = {
  children: (
    <>
      <ListGroup.Item active onClick={() => alert('Profile clicked!')}>
        Profile
      </ListGroup.Item>
      <ListGroup.Item>Settings</ListGroup.Item>
      <ListGroup.Item>Messages</ListGroup.Item>
      <ListGroup.Item>Download</ListGroup.Item>
    </>
  ),
};

export const WithIcons = Template.bind({});
WithIcons.storyName = 'With icons';
WithIcons.args = {
  children: (
    <>
      <ListGroup.Item active icon={HiUserCircle}>
        Profile
      </ListGroup.Item>
      <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
      <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
      <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
    </>
  ),
};
