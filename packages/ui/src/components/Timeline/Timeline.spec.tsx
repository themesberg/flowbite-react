import { render, screen } from '@testing-library/react';
import type { FC } from 'react';
import { describe, expect, it } from 'vitest';
import type { TimelineProps } from './Timeline';
import { Timeline } from './Timeline';

describe.concurrent('Components / Timeline', () => {
  describe('Rendering horizontal mode', () => {
    it('should have className items-base', () => {
      render(<TestTimelineNoIcon horizontal={true} />);

      expect(timeline()).toBeInTheDocument();
      expect(timeline()).toHaveClass('items-base');
    });

    it('should remove margin-top when do not icon', () => {
      render(<TestTimelineNoIcon horizontal={true} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).not.toHaveClass('mt-1.5');
    });

    it('should show icon when render', () => {
      render(<TestTimelineWithIcon horizontal={true} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toContainHTML('svg');
    });
  });
  describe('Rendering vertical mode', () => {
    it('should have margin-top when do not icon', () => {
      render(<TestTimelineNoIcon horizontal={false} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toHaveClass('mt-1.5');
    });

    it('should show icon when render', () => {
      render(<TestTimelineWithIcon horizontal={false} />);

      expect(timelinePoint()).toBeInTheDocument();
      expect(timelinePoint().childNodes[0]).toContainHTML('svg');
    });
  });
});

const TestTimelineNoIcon: FC<TimelineProps> = ({ horizontal, className }): JSX.Element => {
  return (
    <Timeline horizontal={horizontal} className={className}>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

const TestTimelineWithIcon: FC<TimelineProps> = ({ horizontal, className }): JSX.Element => {
  return (
    <Timeline horizontal={horizontal} className={className}>
      <Timeline.Item>
        <Timeline.Point icon={IconSVG} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
};

const IconSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 text-gray-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M
      5 13l4 4L19 7"
    />
  </svg>
);

const timeline = () => screen.getByTestId('timeline-component');
const timelinePoint = () => screen.getByTestId('timeline-point');
