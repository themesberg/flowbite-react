import { render, renderHook, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useCallback, useState } from 'react';
import { HiEye } from 'react-icons/hi';
import { describe, expect, it } from 'vitest';
import { TextInput } from './TextInput';

function useCounter() {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => setCount((x) => x + 1), []);
  return { count, increment };
}

describe.concurrent('Components / Text input', () => {
  describe.concurrent('A11y', () => {
    it('should have `role="textbox"` by default', () => {
      const textInput = render(<TextInput />).getByRole('textbox');

      expect(textInput).toBeInTheDocument();
    });

    it('should render Icon if renderIcon prop is set', () => {
      const page = render(<TextInput renderIcon={(style) => <HiEye className={style} />} />).getByTestId(
        'flowbite-textinput-icon',
      );

      expect(page).toBeInTheDocument();
    });

    it('should render RightIcon if renderRightIcon prop is set', () => {
      const page = render(<TextInput renderRightIcon={(style) => <HiEye className={style} />} />).getByTestId(
        'flowbite-textinput-righticon',
      );

      expect(page).toBeInTheDocument();
    });

    it('rendered Icon should allow for click events', async () => {
      const { result } = renderHook(() => useCounter());
      const user = userEvent.setup();
      render(
        <TextInput
          renderIcon={(style) => (
            <HiEye data-testid="testIcon" className={style} onClick={() => result.current.increment()} />
          )}
        />,
      );

      const icon = screen.getByTestId('testIcon');
      await user.click(icon);

      expect(result.current.count).toEqual(1);
    });
    it('rendered RightIcon should allow for click events', async () => {
      const { result } = renderHook(() => useCounter());
      const user = userEvent.setup();
      render(
        <TextInput
          renderRightIcon={(style) => (
            <HiEye data-testid="testRightIcon" className={style} onClick={() => result.current.increment()} />
          )}
        />,
      );
      const icon = screen.getByTestId('testRightIcon');
      await user.click(icon);

      expect(result.current.count).toEqual(1);
    });
  });
});
