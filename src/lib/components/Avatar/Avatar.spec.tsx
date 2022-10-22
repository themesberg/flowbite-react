import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Flowbite } from '../Flowbite';
import type { CustomFlowbiteTheme } from '../Flowbite/FlowbiteTheme';
import { Avatar } from './Avatar';

describe('Components / Avatar', () => {
  describe('Theme', () => {
    it('should use custom classes', () => {
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
});

const img = () => screen.getByTestId('flowbite-avatar-img');
const initialsPlaceholder = () => screen.getByTestId('flowbite-avatar-initials-placeholder');
