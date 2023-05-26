import { fireEvent, render, screen } from '@testing-library/react';
import { HiEye } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { TextInput } from './TextInput';

describe.concurrent('Components / Text input', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<TextInput />).getByRole('textbox');

      expect(textInput).toBeInTheDocument();
    });
    it('should have Icon if selected ', () => {
      const page = render(<TextInput rightIcon={HiEye} />).getByTestId('right-icon');

      expect(page).toBeInTheDocument();
    });
    it('should render Icon if renderIcon prop is set', () => {
      const page = render(<TextInput renderIcon={(style) => <HiEye className={style} />} />).getByTestId(
        'rendered-icon',
      );

      expect(page).toBeInTheDocument();
    });

    it('should render RightIcon if renderRightIcon prop is set', () => {
      const page = render(<TextInput renderRightIcon={(style) => <HiEye className={style} />} />).getByTestId(
        'rendered-right-icon',
      );

      expect(page).toBeInTheDocument();
    });

    it('rendered Icon should allow for click events', () => {
      render(
        <TextInput
          renderIcon={(style) => (
            <HiEye
              data-testid="icon"
              className={style}
              onClick={() => {
                const target = document.querySelector('[data-testid="rendered-icon"]');
                const div = document.createElement('div');
                div.innerHTML = 'clicked';
                target?.parentNode?.insertBefore(div, target.nextSibling);
              }}
            />
          )}
        />,
      );
      const icon = screen.getByTestId('icon');
      fireEvent.click(icon);
      expect(screen.getByText('clicked')).toBeInTheDocument();
    });
    it('rendered RightIcon should allow for click events', () => {
      render(
        <TextInput
          renderRightIcon={(style) => (
            <HiEye
              data-testid="icon"
              className={style}
              onClick={() => {
                const target = document.querySelector('[data-testid="rendered-right-icon"]');
                const div = document.createElement('div');
                div.innerHTML = 'clicked';
                target?.parentNode?.insertBefore(div, target.nextSibling);
              }}
            />
          )}
        />,
      );
      const icon = screen.getByTestId('icon');
      fireEvent.click(icon);
      expect(screen.getByText('clicked')).toBeInTheDocument();
    });
  });
});
