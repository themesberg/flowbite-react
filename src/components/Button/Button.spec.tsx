import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type { PropsWithChildren } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { describe, expect, it, vi } from 'vitest';
import { Flowbite } from '../../';
import { Button } from './Button';

describe('Components / Button', () => {
  describe('A11y', () => {
    it('should have `role="button"` by default', () => {
      render(<Button>Hi there</Button>);

      expect(button()).toBeInTheDocument();
    });

    it('should be able to use any other role permitted for `<button>`s', () => {
      render(<Button role="menuitem">Hi there</Button>);

      const button = screen.getByRole('menuitem');

      expect(button).toBeInTheDocument();
    });
  });

  describe('Keyboard interactions', () => {
    it('should trigger `onClick` when `Space` is pressed', async () => {
      const user = userEvent.setup();
      const onClick = vi.fn();

      render(<Button onClick={onClick}>Hi there</Button>);

      await user.click(button());

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should focus when `Tab` is pressed', async () => {
      const user = userEvent.setup();
      render(<Button>Hi there</Button>);

      await user.tab();

      expect(button()).toHaveFocus();
    });

    it('should be possible to `Tab` out', async () => {
      const user = userEvent.setup();
      render(
        <>
          <Button>Hi there</Button>
          <Button>Hello there</Button>
          <button type="submit">Submit</button>
        </>,
      );

      await user.tab();

      expect(buttons()[0]).toHaveFocus();

      await user.tab();

      expect(buttons()[1]).toHaveFocus();

      await user.tab();

      expect(buttons()[2]).toHaveFocus();
    });
  });

  describe('Props', () => {
    it('should allow HTML attributes for `<button>`s', () => {
      render(
        <Button formAction="post.php" type="submit">
          Hi there
        </Button>,
      );

      expect(button()).toHaveAttribute('formAction', 'post.php');
      expect(button()).toHaveAttribute('type', 'submit');
    });

    it('should be disabled when `disabled={true}`', () => {
      render(<Button disabled>Hi there</Button>);

      expect(button()).toBeDisabled();
    });

    it('should show <Spinner /> when `isProcessing={true}`', () => {
      render(<Button isProcessing>Hi there</Button>);

      expect(screen.getByText(/Hi there/)).toBeInTheDocument();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should show custom spinner when `isProcessing={true}` and `processingSpinner` is present', () => {
      render(
        <Button isProcessing processingSpinner={<AiOutlineLoading data-testid="spinner" />}>
          Hi there
        </Button>,
      );

      expect(screen.getByText(/Hi there/)).toBeInTheDocument();
      expect(screen.getByTestId('spinner')).toBeInTheDocument();
    });
  });

  describe('Rendering', () => {
    it('should render when `children={0}`', () => {
      render(<Button>0</Button>);

      expect(button()).toHaveTextContent('0');
    });

    it('should render when `children={undefined}`', () => {
      render(<Button label="Something or other" />);

      expect(button()).toHaveTextContent('Something or other');
    });

    it('should render children first then label', () => {
      render(<Button label="2">Messages</Button>);

      expect(button()).toBeInTheDocument();
      expect(button()).toHaveTextContent('Messages');

      expect(label()).toBeInTheDocument();
      expect(label()).toHaveTextContent('2');
    });

    describe('`as` and `href` props', () => {
      it('should render an anchor `<a>` when `href=".."`', () => {
        render(<Button href="#" label="Something or other" />);

        expect(buttonLink()).toBeInTheDocument();
      });

      it('should render component defined in `as`', () => {
        const CustomComponent = ({ children }: PropsWithChildren<{ uniqueProp: boolean }>) => {
          return <li>{children}</li>;
        };

        render(
          <ul>
            <Button as={CustomComponent} uniqueProp>
              Something or other
            </Button>
          </ul>,
        );

        const button = buttonListItem();

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('Something or other');
      });

      it('should render component defined in `as` prop even though `href` is defined', () => {
        const CustomComponent = ({ children }: PropsWithChildren) => {
          return <li>{children}</li>;
        };

        render(
          <ul>
            <Button href="#" as={CustomComponent} label="Something or other" />
          </ul>,
        );

        expect(buttonListItem()).toBeInTheDocument();
      });

      it('should render tag element defined in `as`', () => {
        render(
          <ul>
            <Button as="li" label="Something or other" />
          </ul>,
        );

        expect(buttonListItem()).toBeInTheDocument();
      });

      it('should render as button `as={null}`', () => {
        render(
          <ul>
            <Button as={null as any} label="Something or other" />
          </ul>,
        );

        expect(button()).toBeInTheDocument();
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

      render(
        <Flowbite theme={{ theme }}>
          <Button />
        </Flowbite>,
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `color` classes', () => {
      const theme = {
        button: {
          color: {
            primary: 'bg-red-300',
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <Button color="primary" />
        </Flowbite>,
      );

      expect(button()).toHaveClass('bg-red-300');
    });

    it('should use `disabled` classes', () => {
      const theme = {
        button: {
          disabled: 'opacity-10',
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <Button disabled />
        </Flowbite>,
      );

      expect(button()).toHaveClass('opacity-10');
    });

    it('should use `gradient` classes', () => {
      const theme = {
        button: {
          gradient: {
            yellowToPink: 'font-extralight',
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <Button gradientMonochrome="yellowToPink" />
        </Flowbite>,
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `gradientDuoTone` classes', () => {
      const theme = {
        button: {
          gradientDuoTone: {
            yellowToPink: 'font-extralight',
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <Button gradientDuoTone="yellowToPink" />
        </Flowbite>,
      );

      expect(button()).toHaveClass('font-extralight');
    });

    it('should use `inner` classes', () => {
      const theme = {
        button: {
          inner: {
            base: 'font-extralight',
          },
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <Button>Hi there</Button>
        </Flowbite>,
      );

      const buttonInnerContent = screen.getByText('Hi there');

      expect(buttonInnerContent).toHaveClass('font-extralight');
    });

    it('should use `label` classes', () => {
      const theme = {
        button: {
          label: 'font-extralight',
        },
      };

      render(
        <Flowbite theme={{ theme }}>
          <Button label="Hi there" />
        </Flowbite>,
      );

      const buttonLabel = screen.getByText('Hi there');

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

      render(
        <Flowbite theme={{ theme }}>
          <Button>Normal button</Button>
          <Button outline>Outline button</Button>
          <Button outline pill>
            Outline pill button
          </Button>
        </Flowbite>,
      );

      const normalButton = screen.getByText('Normal button');
      const outlineButton = screen.getByText('Outline button');
      const outlinePillButton = screen.getByText('Outline pill button');

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

      render(
        <Flowbite theme={{ theme }}>
          <Button label="Normal button" />
          <Button label="Pill" pill />
        </Flowbite>,
      );

      const normalButton = buttons()[0];
      const pill = buttons()[1];

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

      render(
        <Flowbite theme={{ theme }}>
          <Button size="xxl">Hello</Button>
        </Flowbite>,
      );

      const button = screen.getByText('Hello');

      expect(button).toHaveClass('font-extrabold');
    });
  });
});

const button = () => screen.getByRole('button');

const label = () => screen.getByTestId('flowbite-button-label');

const buttonLink = () => screen.getByRole('link');

const buttonListItem = () => screen.getByRole('listitem');

const buttons = () => screen.getAllByRole('button');
