import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { FC } from 'react';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

describe('Components / Dropdown', () => {
  describe('Keyboard interactions', () => {
    it('should collapse if expanded when `Space` is pressed', async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      expect(dropdown()).toHaveClass('invisible');

      await user.click(button());

      expect(dropdown()).not.toHaveClass('invisible');
    });

    it('should expand if collapsed when `Space` is pressed', async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      await user.click(button());
      await user.click(button());

      expect(dropdown()).toHaveClass('invisible');
    });
  });
  describe('Mouse interactions', () => {
    it('should collapse if item is clicked', async () => {
      const user = userEvent.setup();
      render(<TestDropdown />);

      act(() => {
        user.click(button());
        userEvent.click(dropdownItem());
      });

      expect(dropdown()).toHaveClass('invisible');
    });

    it('should not collapse in case item is clicked if dismissOnClick = false', async () => {
      const user = userEvent.setup();
      render(<TestDropdown dismissOnClick={false} />);

      expect(dropdown()).toHaveClass('invisible');

      await user.click(button());

      expect(dropdown()).not.toHaveClass('invisible');

      await user.click(dropdownItem());

      expect(dropdown()).not.toHaveClass('invisible');
    });
  });
});

const TestDropdown: FC<{ dismissOnClick?: boolean }> = ({ dismissOnClick = true }) => (
  <>
    <Dropdown placement="right" dismissOnClick={dismissOnClick}>
      <Dropdown.Trigger>
        <Button data-testid="trigger">
          <span className="flex gap-10">Dropdown button</span>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Items>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown.Items>
    </Dropdown>
  </>
);

const button = () => screen.getByTestId('trigger');

const dropdown = () => screen.getByTestId('flowbite-tooltip');

const dropdownItem = () => screen.getByText('Dashboard');
