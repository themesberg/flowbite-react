import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import type { CustomFlowbiteTheme } from '../Flowbite/FlowbiteTheme';
import { Avatar } from './Avatar';

describe('Components / Avatar', () => {
  describe('Theme', () => {
    it('should use custom sizes', () => {
      const theme: CustomFlowbiteTheme = {
        avatar: {
          size: {
            xxl: 'h-64 w-64',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Avatar size="xxl" />
        </Flowbite>,
      );

      expect(img()).toHaveClass('h-64 w-64');
    });

    it('should use custom colors', () => {
      const theme: CustomFlowbiteTheme = {
        avatar: {
          color: {
            rose: 'ring-rose-500 dark:ring-rose-400',
          },
        },
      };
      render(
        <Flowbite theme={{ theme }}>
          <Avatar
            bordered
            color="rose"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            alt="Your avatar"
          />
        </Flowbite>,
      );

      expect(img()).toHaveClass('ring-rose-500 dark:ring-rose-400');
    });
  });
  describe('Placeholder', () => {
    it('should display placeholder initials', () => {
      render(
        <Flowbite>
          <Avatar placeholderInitials="RR" />
        </Flowbite>,
      );

      expect(initialsPlaceholder()).toHaveTextContent('RR');
    });
  });
  describe('Image', () => {
    it('should support custom image elements', () => {
      render(
        <Flowbite>
          <Avatar img={(props) => <img referrerPolicy="no-referrer" {...props} />} />
        </Flowbite>,
      );

      expect(img()).toHaveAttribute('referrerpolicy', 'no-referrer');
    });
  });
});

const img = () => screen.getByTestId('flowbite-avatar-img');
const initialsPlaceholder = () => screen.getByTestId('flowbite-avatar-initials-placeholder');
