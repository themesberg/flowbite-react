import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FC, useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TextInput } from '../TextInput';
import { ToggleSwitch } from './ToggleSwitch';

describe('Components / Form controls / Toggle switch', () => {
  describe('A11y', () => {
    it('should have `role="switch"` by default', () => {
      render(<ToggleSwitch checked={false} label="Enable" onChange={console.log} />);

      expect(toggleSwitch()).toBeInTheDocument();
    });

    it('should have an accessible name', () => {
      render(<ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />);

      expect(toggleSwitch()).toHaveAccessibleName('Enable notifications');
    });
  });

  describe('Keyboard interaction', () => {
    it("shouldn't toggle when `Enter` is pressed", async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />,
      );

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard('[Enter]');

      expect(handleChange).not.toHaveBeenCalled();
    });

    it("shouldn't submit surrounding form when `Enter` is pressed", async () => {
      const handleSubmit = vi.fn();
      const user = userEvent.setup();
      render(
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />
        </form>,
      );

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard('[Enter]');

      expect(handleSubmit).not.toHaveBeenCalled();
    });

    it('should toggle when `Space` is pressed', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      const TestToggleSwitch: FC = () => {
        const [state, setState] = useState(false);

        return (
          <ToggleSwitch
            checked={state}
            label="Enable notifications"
            name="notifications"
            onChange={(value) => {
              setState(value);
              handleChange(value);
            }}
          />
        );
      };
      render(<TestToggleSwitch />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();

      await user.keyboard('[Space]');

      expect(toggleSwitch()).toHaveAttribute('aria-checked', 'true');

      await user.keyboard('[Space]');

      expect(toggleSwitch()).toHaveAttribute('aria-checked', 'false');
    });

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup();
      render(<ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />);

      await user.tab();

      expect(toggleSwitch()).toHaveFocus();
    });

    it('should allow the user to `Tab` away', async () => {
      const user = userEvent.setup();
      render(
        <form>
          <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />
          <TextInput type="text" />
        </form>,
      );

      await user.tab();
      await user.tab();

      expect(toggleSwitch()).not.toHaveFocus();
      expect(screen.getByRole('textbox')).toHaveFocus();
    });
  });

  describe('Props', () => {
    it('should allow HTML attributes for `<button>`s', () => {
      render(<ToggleSwitch checked={false} label="Enable" onChange={console.log} type="submit" />);

      expect(toggleSwitch()).toHaveAttribute('type', 'submit');
    });
  });
});

const toggleSwitch = () => screen.getByRole('switch');
