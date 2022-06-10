import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useState } from 'react';
import { describe, expect, it, vi } from 'vitest';
import { TextInput } from './TextInput';
import { ToggleSwitch } from './ToggleSwitch';

describe.concurrent('Components / Form controls / Toggle switch', () => {
  it('should render', () => {
    render(<ToggleSwitch checked={false} label="Enable" onChange={console.log} />);
  });

  describe('Props', () => {
    describe('`type`', () => {
      it('should be "button" by default', () => {
        const switchElement = getSwitch(render(<ToggleSwitch checked={false} label="Enable" onChange={console.log} />));

        assertSwitch({ switchElement });
        expect(switchElement).toHaveAttribute('type', 'button');
      });

      it('should use the supplied `type`, if there is one', () => {
        const switchElement = getSwitch(
          render(<ToggleSwitch checked={false} label="Enable" onChange={console.log} type="submit" />),
        );

        assertSwitch({ switchElement });
        expect(switchElement).toHaveAttribute('type', 'submit');
      });
    });
  });

  describe('A11y', () => {
    it('should have accessible name', () => {
      const switchElement = getSwitch(
        render(
          <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />,
        ),
      );

      assertSwitch({ switchElement });
      expect(switchElement).toHaveAccessibleName('Enable notifications');
    });
  });

  describe('Keyboard interaction', () => {
    describe('`Enter`', () => {
      it("shouldn't toggle", () => {
        const handleChange = vi.fn();
        const switchElement = getSwitch(
          render(
            <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />,
          ),
        );

        assertSwitch({ switchElement });

        userEvent.tab();

        expect(switchElement).toHaveFocus();

        userEvent.keyboard('[Enter]');

        expect(handleChange).not.toHaveBeenCalled();
      });

      it("shouldn't submit surrounding form", () => {
        const handleSubmit = vi.fn();
        const switchElement = getSwitch(
          render(
            <form
              onSubmit={(event) => {
                event.preventDefault();
                handleSubmit();
              }}
            >
              <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />
            </form>,
          ),
        );

        userEvent.tab();

        assertSwitch({ switchElement });
        expect(switchElement).toHaveFocus();

        userEvent.keyboard('[Enter]');

        expect(handleSubmit).not.toHaveBeenCalled();
      });
    });

    describe('`Space`', () => {
      it('should toggle', () => {
        const handleChange = vi.fn();

        const TestToggleSwitch = (): JSX.Element => {
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

        const switchElement = getSwitch(render(<TestToggleSwitch />));

        assertSwitch({ switchElement, props: { checked: false } });

        userEvent.tab();

        expect(switchElement).toHaveFocus();

        userEvent.keyboard('[Space]');

        assertSwitch({ switchElement, props: { checked: true } });

        userEvent.keyboard('[Space]');

        assertSwitch({ switchElement, props: { checked: false } });
      });
    });

    describe('`Tab`', () => {
      it('should focus', () => {
        const switchElement = getSwitch(
          render(
            <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />,
          ),
        );

        userEvent.tab();

        assertSwitch({ switchElement });
        expect(switchElement).toHaveFocus();
      });

      it('should allow the user to `Tab` away', () => {
        const TestToggleSwitch = (): JSX.Element => (
          <form>
            <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={console.log} />
            <TextInput type="text" />
          </form>
        );

        const view = render(<TestToggleSwitch />);
        const switchElement = getSwitch(view);
        const nextItemInTabOrder = view.getByRole('textbox');

        userEvent.tab();
        userEvent.tab();

        assertSwitch({ switchElement });
        expect(switchElement).not.toHaveFocus();
        expect(nextItemInTabOrder).toHaveFocus();
      });
    });
  });

  describe('Mouse interaction', () => {
    describe('Click button', () => {
      it('should toggle', () => {
        const handleChange = vi.fn();
        const switchElement = getSwitch(
          render(
            <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />,
          ),
        );

        userEvent.click(switchElement);

        assertSwitch({ switchElement });
        expect(handleChange).toHaveBeenCalledTimes(1);
      });
    });

    describe('Click label', () => {
      it('should toggle', () => {
        const handleChange = vi.fn();
        const view = render(
          <ToggleSwitch checked={false} label="Enable notifications" name="notifications" onChange={handleChange} />,
        );

        const switchElement = getSwitch(view);
        const switchLabel = view.getByTestId('flowbite-toggleswitch-label');

        userEvent.click(switchLabel);

        assertSwitch({ switchElement });
        expect(handleChange).toHaveBeenCalledTimes(1);
      });
    });
  });
});

const getSwitch = ({ getByRole }: RenderResult): HTMLElement => getByRole('switch');

const assertSwitch = ({
  switchElement,
  props,
}: {
  switchElement: HTMLElement;
  props?: {
    checked?: boolean;
    label?: string;
  };
}): void => {
  expect(switchElement).toBeInstanceOf(HTMLButtonElement);
  expect(switchElement).toHaveAttribute('tabindex', '0');

  if (props?.checked) {
    expect(switchElement).toHaveAttribute('aria-checked', props.checked ? 'true' : 'false');
  }

  if (props?.label) {
    expect(switchElement).toHaveTextContent(props.label);
  }
};
