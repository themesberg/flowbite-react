import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { Button } from '../Button';
import { Tooltip } from './index';

describe.concurrent('Tooltip', () => {
  it('should display when target is focused', () => {
    const { getAllByTestId } = render(<TooltipTests />);
    const tooltip = getAllByTestId('tooltip')[0];

    userEvent.tab();
    expect(tooltip).not.toHaveClass('invisible');
  });

  describe('with trigger on hover (default)', () => {
    it('should display when target is hovered over', () => {
      const { getAllByTestId } = render(<TooltipTests />);
      const target = getAllByTestId('tooltip-target')[0];
      const tooltip = getAllByTestId('tooltip')[0];

      userEvent.hover(target);
      expect(tooltip).not.toHaveClass('invisible');
    });
  });

  describe('with trigger on click', () => {
    it('should display when target is clicked', () => {
      const { getAllByTestId } = render(<TooltipTests />);
      const target = getAllByTestId('tooltip-target')[1];
      const tooltip = getAllByTestId('tooltip')[1];

      userEvent.click(target);
      expect(tooltip).not.toHaveClass('invisible');
    });
  });

  describe('with placement that would not be visible on screen', () => {
    it('should invert placement so it stays on screen', () => {
      const { getAllByTestId } = render(<TooltipTests />);
      let tooltip = getAllByTestId('tooltip')[2];
      let arrow = getAllByTestId('tooltip-arrow')[2];

      userEvent.click(tooltip);
      expect(arrow).toHaveStyle('top: -4px');

      tooltip = getAllByTestId('tooltip')[3];
      arrow = getAllByTestId('tooltip-arrow')[3];

      userEvent.click(tooltip);
      expect(arrow).toHaveStyle('left: -4px');
    });
  });

  describe('with auto placement', () => {
    it('should choose better placement than default, if available', () => {
      const { getAllByTestId } = render(<TooltipTests />);
      const tooltip = getAllByTestId('tooltip')[4];
      const arrow = getAllByTestId('tooltip-arrow')[4];

      userEvent.click(tooltip);
      expect(arrow).toHaveStyle('top: -4px');
    });
  });
});

const TooltipTests = (): JSX.Element => {
  return (
    <div>
      <Tooltip content="Tooltip content">
        <Button>Default tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" trigger="click">
        <Button>Click tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="bottom" trigger="click">
        <Button>Bottom placed tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="right" trigger="click">
        <Button>Right placed tooltip</Button>
      </Tooltip>
      <Tooltip content="Tooltip content" placement="auto" trigger="click">
        <Button>Auto placed tooltip</Button>
      </Tooltip>
    </div>
  );
};
