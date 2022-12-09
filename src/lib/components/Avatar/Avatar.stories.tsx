import type { Meta, Story } from '@storybook/react/types-6-0';
import type { AvatarProps } from './Avatar';
import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const DefaultAvatar = Template.bind({});
DefaultAvatar.storyName = 'Default';
DefaultAvatar.args = {
  alt: 'Your avatar',
  img: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
};

export const CustomImage: Story<AvatarProps> = (props) => (
  <>
    <Avatar
      {...props}
      img={(props) => (
        <picture>
          <source media="(min-width: 900px)" srcSet="https://flowbite.com/docs/images/people/profile-picture-3.jpg" />
          <source media="(min-width: 480px)" srcSet="https://flowbite.com/docs/images/people/profile-picture-4.jpg" />
          <img src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" {...props} />
        </picture>
      )}
    />
    <small className="block text-center text-gray-500">Hint: Resize the viewport</small>
  </>
);

CustomImage.storyName = 'Custom Image Element';
