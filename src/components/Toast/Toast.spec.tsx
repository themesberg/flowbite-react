import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { Toast } from '.';

describe('Toast Component', () => {
  afterEach(() => {
    cleanup;
    jest.clearAllTimers();
  });

  it('should be able to render a toast', () => {
    const { getByTestId } = render(<Toast />);
    expect(getByTestId('toast-element')).toBeTruthy();
  });

  it('should be able to render a toast toggle', () => {
    const { getByTestId } = render(
      <Toast>
        <Toast.Toggle />
      </Toast>,
    );
    expect(getByTestId('toast-toggle-element')).toBeTruthy();
  });

  it('should be able to render a hidden toast after 75ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={75}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(75);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-75');
  });

  it('should be able to render a hidden toast after 100ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={100}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(100);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-100');
  });

  it('should be able to render a hidden toast after 150ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={150}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(150);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-150');
  });

  it('should be able to render a hidden toast after 200ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={200}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(200);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-200');
  });

  it('should be able to render a hidden toast after 300ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={300}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(300);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-300');
  });

  it('should be able to render a hidden toast after 500ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={500}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-500');
  });

  it('should be able to render a hidden toast after 700ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={700}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(700);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-700');
  });

  it('should be able to render a hidden toast after 1000ms', () => {
    jest.useFakeTimers();
    const { getByTestId } = render(
      <Toast duration={1000}>
        <Toast.Toggle />
      </Toast>,
    );
    userEvent.click(getByTestId('toast-toggle-element'));
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByTestId('toast-element').className).toContain('hidden');
    expect(getByTestId('toast-element').className).toContain('duration-1000');
  });
});
