import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Button } from '.';
import defaultTheme from '../../theme/default';
import { Flowbite } from '../Flowbite';

describe('Components / Button group', () => {
  describe('A11y', () => {
    it('should have `role="group"` by default', () => {
      const group = getButtonGroup(
        render(
          <Button.Group>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>,
        ),
      );

      expect(group).toBeInTheDocument();
    });

    it('should allow `aria-label`', () => {
      const group = getButtonGroup(
        render(
          <Button.Group aria-label="My group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>,
        ),
      );

      expect(group).toHaveAccessibleName('My group');
    });
  });

  describe('Keyboard interactions', () => {
    describe('`Space`', () => {
      it('should trigger `onClick` of focused `Button`', () => {
        const onClick = vi.fn();
        const buttons = getButtons(
          render(
            <Button.Group>
              <Button onClick={onClick}>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </Button.Group>,
          ),
        );

        userEvent.tab();
        userEvent.click(buttons[0]);

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('`Tab`', () => {
      it('should focus next `Button`', () => {
        const buttons = getButtons(
          render(
            <Button.Group>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </Button.Group>,
          ),
        );

        userEvent.tab();

        expect(buttons[0]).toHaveFocus();
      });

      it('should be possible to `Tab` out', () => {
        const buttons = getButtons(
          render(
            <>
              <Button.Group>
                <Button>Inside</Button>
              </Button.Group>
              <Button>Outside</Button>
            </>,
          ),
        );

        userEvent.tab();

        expect(buttons[0]).toHaveFocus();

        userEvent.tab();

        expect(buttons[1]).toHaveFocus();
      });
    });
  });

  describe('Props', () => {
    describe('`className`', () => {
      it('should be ignored', () => {
        const group = getButtonGroup(
          render(
            <Button.Group className="text-gray-100">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </Button.Group>,
          ),
        );

        expect(group).not.toHaveClass('text-gray-100');
      });
    });

    describe('`outline={true}`', () => {
      it('should force every `Button` to have an outline', () => {
        const theme = {
          button: {
            outline: {
              on: 'text-gray-200',
            },
          },
        };

        const buttons = getButtons(
          render(
            <Flowbite theme={{ theme }}>
              <Button.Group outline>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </Button.Group>
            </Flowbite>,
          ),
        );

        buttons.forEach((button) => expect(button.firstElementChild).toHaveClass('text-gray-200'));
      });
    });

    describe('`pill={true}`', () => {
      it('should force every `Button` to be a pill', () => {
        const theme = {
          button: {
            pill: {
              on: 'text-gray-300',
            },
          },
        };

        const buttons = getButtons(
          render(
            <Flowbite theme={{ theme }}>
              <Button.Group pill>
                <Button>One</Button>
                <Button>Two</Button>
                <Button>Three</Button>
              </Button.Group>
            </Flowbite>,
          ),
        );

        buttons.forEach((button) => expect(button).toHaveClass('text-gray-300'));
      });
    });
  });

  describe('Rendering', () => {
    it('should render', () => {
      const { getAllByRole, getByRole } = render(
        <Button.Group>
          <Button>0</Button>
          <Button>1</Button>
          <Button>2</Button>
        </Button.Group>,
      );

      const group = getButtonGroup({ getByRole });
      const buttons = getButtons({ getAllByRole });

      expect(group).toBeInTheDocument();
      expect(buttons).toHaveLength(3);

      buttons.forEach((button, i) => expect(button).toHaveTextContent(i.toString()));
    });

    it("should correctly set each `Button`'s position", () => {
      const buttons = getButtons(
        render(
          <Button.Group>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </Button.Group>,
        ),
      );

      const positionClasses = defaultTheme.buttonGroup.position;

      expect(buttons[0]).toHaveClass(positionClasses.start);
      expect(buttons[1]).toHaveClass(positionClasses.middle);
      expect(buttons[2]).toHaveClass(positionClasses.end);
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        buttonGroup: {
          base: 'text-gray-400',
        },
      };

      const group = getButtonGroup(
        render(
          <Flowbite theme={{ theme }}>
            <Button.Group>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </Button.Group>
          </Flowbite>,
        ),
      );

      expect(group).toHaveClass('text-gray-400');
    });

    it('should use `position` classes', () => {
      const theme = {
        buttonGroup: {
          base: 'text-gray-400',
        },
      };

      const group = getButtonGroup(
        render(
          <Flowbite theme={{ theme }}>
            <Button.Group>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </Button.Group>
          </Flowbite>,
        ),
      );

      expect(group).toHaveClass('text-gray-400');
    });
  });
});

const getButtonGroup = ({ getByRole }: Pick<RenderResult, 'getByRole'>): HTMLElement => getByRole('group');

const getButtons = ({ getAllByRole }: Pick<RenderResult, 'getAllByRole'>): HTMLElement[] => getAllByRole('button');
