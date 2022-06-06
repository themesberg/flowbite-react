import { cleanup, render } from '@testing-library/react';
import type { FC } from 'react';
import { describe, expect, it } from 'vitest';
import type { TimelineProps } from '.';
import { Timeline } from '.';

describe.concurrent('Components / Timeline', () => {
  afterEach(cleanup);

  it('should be able to render a timeline component', () => {
    const { getByTestId } = render(<TestTimeline />);
    expect(getByTestId('timeline-component')).toBeTruthy();
  });

  it('should be able to render a horizontal timeline component', () => {
    const { getAllByTestId } = render(<TestTimeline horizontal />);
    const timelineItems = getAllByTestId('timeline-item');
    const timelineContents = getAllByTestId('timeline-content');
    const timelinePoints = getAllByTestId('timeline-point');

    expect(timelineItems[0].className).toContain('relative mb-6 sm:mb-0');
    expect(timelineContents[0].className).toContain('mt-3 sm:pr-8');
    expect(timelinePoints[0].className).toContain('flex items-center');
  });
});

const TestTimeline: FC<TimelineProps> = (props) => (
  <Timeline {...props}>
    <Timeline.Item>
      <Timeline.Point>
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      </Timeline.Point>
      <Timeline.Content>
        <Timeline.Time>February 2022</Timeline.Time>
        <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
        <Timeline.Body>
          Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
          E-commerce & Marketing pages.
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point>
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      </Timeline.Point>
      <Timeline.Content>
        <Timeline.Time>March 2022</Timeline.Time>
        <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
        <Timeline.Body>
          All of the pages and components are first designed in Figma and we keep a parity between the two versions even
          as we update the project.
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point>
        <div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700"></div>
      </Timeline.Point>
      <Timeline.Content>
        <Timeline.Time>April 2022</Timeline.Time>
        <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
        <Timeline.Body>
          Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
);
