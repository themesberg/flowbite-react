import type { RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from '.';
import { Flowbite } from '../Flowbite';

describe.concurrent('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="button"` by default', () => {
      const button = getButton(render(<Button>Hi there</Button>));

      expect(button).toBeInTheDocument();
    });

    it('should be able to use any other role permitted for `<button>`s', () => {
      const { getByRole } = render(<Button role="menuitem">Hi there</Button>);
      const button = getByRole('menuitem');

      expect(button).toBeInTheDocument();
    });
  });

  describe('Keyboard interactions', () => {
    describe('`Space`', () => {
      it('should trigger `onClick`', () => {
        const onClick = vi.fn();
        const button = getButton(render(<Button onClick={onClick}>Hi there</Button>));

        userEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('`Tab`', () => {
      it('should focus', () => {
        const button = getButton(render(<Button>Hi there</Button>));

        userEvent.tab();

        expect(button).toHaveFocus();
      });

      it('should be possible to `Tab` out', () => {
        const buttons = getButtons(
          render(
            <>
              <Button>Hi there</Button>
              <Button>Hello there</Button>
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
    it('should allow HTML attributes for `<button>`s', () => {
      const button = getButton(
        render(
          <Button formAction="post.php" type="submit">
            Hi there
          </Button>,
        ),
      );

      expect(button).toHaveAttribute('formAction', 'post.php');
      expect(button).toHaveAttribute('type', 'submit');
    });

    describe('`disabled={true}`', () => {
      it('should be disabled given', () => {
        const button = getButton(render(<Button disabled>Hi there</Button>));

        expect(button).toBeDisabled();
      });
    });
  });

  describe('Rendering', () => {
    it('should render a `<button>`', () => {
      const button = getButton(
        render(
          <Button color="gray" outline>
            Hi there
          </Button>,
        ),
      );

      expect(button).toHaveTextContent('Hi there');
    });

    describe('`children={0}`', () => {
      it('should render', () => {
        const button = getButton(render(<Button>0</Button>));

        expect(button).toHaveTextContent('0');
      });
    });

    describe('`children={undefined}`', () => {
      it('should render', () => {
        const button = getButton(render(<Button label="Something or other" />));

        expect(button).toHaveTextContent('Something or other');
      });
    });

    describe('`href=".."`', () => {
      it('should render an anchor `<a>`', () => {
        const button = getButtonLink(render(<Button href="#" label="Something or other" />));

        expect(button).toBeInTheDocument();
      });
    });
  });

  describe('Theme', () => {
    it('should use `base` classes', () => {
      const theme = {
        button: {
          base: 'font-extralight',
        },
      };

      const button = getButton(
        render(
          <Flowbite theme={{ theme }}>
            <Button />
          </Flowbite>,
        ),
      );

      expect(button).toHaveClass('font-extralight');
    });

    it('should use `color` classes', () => {
      const theme = {
        button: {
          color: {
            primary: 'font-extralight',
          },
        },
      };

      const button = getButton(
        render(
          <Flowbite theme={{ theme }}>
            <Button color="primary" />
          </Flowbite>,
        ),
      );

      expect(button).toHaveClass('font-extralight');
    });

    it('should use `disabled` classes', () => {
      const theme = {
        button: {
          disabled: 'font-extralight',
        },
      };

      const button = getButton(
        render(
          <Flowbite theme={{ theme }}>
            <Button disabled />
          </Flowbite>,
        ),
      );

      expect(button).toHaveClass('font-extralight');
    });

    it('should use `gradient` classes', () => {
      const theme = {
        button: {
          gradient: {
            yellowToPink: 'font-extralight',
          },
        },
      };

      const button = getButton(
        render(
          <Flowbite theme={{ theme }}>
            <Button gradientMonochrome="yellowToPink" />
          </Flowbite>,
        ),
      );

      expect(button).toHaveClass('font-extralight');
    });

    it('should use `gradientDuoTone` classes', () => {
      const theme = {
        button: {
          gradientDuoTone: {
            yellowToPink: 'font-extralight',
          },
        },
      };

      const button = getButton(
        render(
          <Flowbite theme={{ theme }}>
            <Button gradientDuoTone="yellowToPink" />
          </Flowbite>,
        ),
      );

      expect(button).toHaveClass('font-extralight');
    });

    it('should use `inner` classes', () => {
      const theme = {
        button: {
          inner: {
            base: 'font-extralight',
          },
        },
      };

      const { getByText } = render(
        <Flowbite theme={{ theme }}>
          <Button>Hi there</Button>
        </Flowbite>,
      );

      const buttonInnerContent = getByText('Hi there');

      expect(buttonInnerContent).toHaveClass('font-extralight');
    });

    it('should use `label` classes', () => {
      const theme = {
        button: {
          label: 'font-extralight',
        },
      };

      const { getByText } = render(
        <Flowbite theme={{ theme }}>
          <Button label="Hi there" />
        </Flowbite>,
      );

      const buttonLabel = getByText('Hi there');

      expect(buttonLabel).toHaveClass('font-extralight');
    });

    it('should use `outline` classes', () => {
      const theme = {
        button: {
          outline: {
            off: 'font-extralight',
            on: 'font-extrabold',
            pill: {
              off: 'text-purple-300',
              on: 'text-purple-600',
            },
          },
        },
      };

      const { getByText } = render(
        <Flowbite theme={{ theme }}>
          <Button>Normal button</Button>
          <Button outline>Outline button</Button>
          <Button outline pill>
            Outline pill button
          </Button>
        </Flowbite>,
      );

      const normalButton = getByText('Normal button');
      const outlineButton = getByText('Outline button');
      const outlinePillButton = getByText('Outline pill button');

      expect(normalButton).toHaveClass('font-extralight text-purple-300');
      expect(outlineButton).toHaveClass('font-extrabold text-purple-300');
      expect(outlinePillButton).toHaveClass('font-extrabold text-purple-600');
    });

    it('should use `pill` classes', () => {
      const theme = {
        button: {
          pill: {
            off: 'font-extralight',
            on: 'font-extrabold',
          },
        },
      };

      const buttons = getButtons(
        render(
          <Flowbite theme={{ theme }}>
            <Button label="Normal button" />
            <Button label="Pill" pill />
          </Flowbite>,
        ),
      );

      const normalButton = buttons[0];
      const pill = buttons[1];

      expect(normalButton).toHaveClass('font-extralight');
      expect(pill).toHaveClass('font-extrabold');
    });

    it('should use `size` classes', () => {
      const theme = {
        button: {
          size: {
            xxl: 'font-extrabold',
          },
        },
      };

      const { getByText } = render(
        <Flowbite theme={{ theme }}>
          <Button size="xxl">Hello</Button>
        </Flowbite>,
      );

      const button = getByText('Hello');

      expect(button).toHaveClass('font-extrabold');
    });
  });
});

const getButton = ({ getByRole }: RenderResult): HTMLElement => getByRole('button');

const getButtonLink = ({ getByRole }: RenderResult): HTMLElement => getByRole('link');

const getButtons = ({ getAllByRole }: RenderResult): HTMLElement[] => getAllByRole('button');
