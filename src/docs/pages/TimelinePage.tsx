import { FC } from 'react';
import { CodeExample, DemoPage } from './DemoPage';
import { Timeline } from '../../lib';
import { Button } from '../../lib';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

const TimelinePage: FC = () => {
  const examples: CodeExample[] = [
    {
      title: 'Default timeline',
      code: (
        <Timeline>
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
              <Button color="alternative">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
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
                All of the pages and components are first designed in Figma and we keep a parity between the two
                versions even as we update the project.
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
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Vertical timeline',
      code: (
        <Timeline>
          <Timeline.Item>
            <Timeline.Point>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <HiCalendar className="h-3 w-3 text-blue-600 dark:text-blue-300" />
              </span>
            </Timeline.Point>
            <Timeline.Content>
              <Timeline.Time>February 2022</Timeline.Time>
              <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
              <Timeline.Body>
                Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                E-commerce & Marketing pages.
              </Timeline.Body>
              <Button color="alternative">
                Learn More
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <HiCalendar className="h-3 w-3 text-blue-600 dark:text-blue-300" />
              </span>
            </Timeline.Point>
            <Timeline.Content>
              <Timeline.Time>March 2022</Timeline.Time>
              <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
              <Timeline.Body>
                All of the pages and components are first designed in Figma and we keep a parity between the two
                versions even as we update the project.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <HiCalendar className="h-3 w-3 text-blue-600 dark:text-blue-300" />
              </span>
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
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
    {
      title: 'Stepper timeline',
      code: (
        <Timeline horizontal>
          <Timeline.Item>
            <Timeline.Point>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <HiCalendar className="h-3 w-3 text-blue-600 dark:text-blue-300" />
              </span>
            </Timeline.Point>
            <Timeline.Content>
              <Timeline.Title>Flowbite Library v1.0.0</Timeline.Title>
              <Timeline.Time>Released on December 2, 2021</Timeline.Time>
              <Timeline.Body>Get started with dozens of web components and interactive elements.</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <HiCalendar className="h-3 w-3 text-blue-600 dark:text-blue-300" />
              </span>
            </Timeline.Point>
            <Timeline.Content>
              <Timeline.Title>Flowbite Library v1.2.0</Timeline.Title>
              <Timeline.Time>Released on December 23, 2021</Timeline.Time>
              <Timeline.Body>Get started with dozens of web components and interactive elements.</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point>
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-200 ring-8 ring-white dark:bg-blue-900 dark:ring-gray-900">
                <HiCalendar className="h-3 w-3 text-blue-600 dark:text-blue-300" />
              </span>
            </Timeline.Point>
            <Timeline.Content>
              <Timeline.Title>Flowbite Library v1.3.0</Timeline.Title>
              <Timeline.Time>Released on January 5, 2022</Timeline.Time>
              <Timeline.Body>Get started with dozens of web components and interactive elements.</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      ),
      codeClassName: 'dark:!bg-gray-900',
    },
  ];
  return <DemoPage examples={examples} />;
};

export default TimelinePage;
