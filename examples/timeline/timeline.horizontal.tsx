// TODO: try to make it RSC - failing because of `<TimelinePoint icon={HiCalendar} />` icon prop

'use client';

import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';
import { type CodeData } from '~/components/code-demo';
import {
  Button,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from '~/src';

const code = `
'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

function Component() {
  return (
    <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2022</Timeline.Time>
          <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2022</Timeline.Time>
          <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
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
}
`;

// const codeRSC = `
// import {
//   Button,
//   Timeline,
//   TimelineBody,
//   TimelineContent,
//   TimelineItem,
//   TimelinePoint,
//   TimelineTime,
//   TimelineTitle,
// } from 'flowbite-react';
// import { HiArrowNarrowRight, HiCalendar } from 'react-icons/hi';

// function Component() {
//   return (
//     <Timeline horizontal>
//       <TimelineItem>
//         <TimelinePoint icon={HiCalendar} />
//         <TimelineContent>
//           <TimelineTime>February 2022</TimelineTime>
//           <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
//           <TimelineBody>
//             Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
//             E-commerce & Marketing pages.
//           </TimelineBody>
//           <Button color="gray">
//             Learn More
//             <HiArrowNarrowRight className="ml-2 h-3 w-3" />
//           </Button>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelinePoint icon={HiCalendar} />
//         <TimelineContent>
//           <TimelineTime>March 2022</TimelineTime>
//           <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
//           <TimelineBody>
//             All of the pages and components are first designed in Figma and we keep a parity between the two versions
//             even as we update the project.
//           </TimelineBody>
//         </TimelineContent>
//       </TimelineItem>
//       <TimelineItem>
//         <TimelinePoint icon={HiCalendar} />
//         <TimelineContent>
//           <TimelineTime>April 2022</TimelineTime>
//           <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
//           <TimelineBody>
//             Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
//           </TimelineBody>
//         </TimelineContent>
//       </TimelineItem>
//     </Timeline>
//   );
// }
// `;

function Component() {
  return (
    <Timeline horizontal>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>February 2022</TimelineTime>
          <TimelineTitle>Application UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </TimelineBody>
          <Button color="gray">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>March 2022</TimelineTime>
          <TimelineTitle>Marketing UI design in Figma</TimelineTitle>
          <TimelineBody>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint icon={HiCalendar} />
        <TimelineContent>
          <TimelineTime>April 2022</TimelineTime>
          <TimelineTitle>E-Commerce UI code in Tailwind CSS</TimelineTitle>
          <TimelineBody>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export const horizontal: CodeData = {
  type: 'single',
  code: [
    {
      fileName: 'client',
      language: 'tsx',
      code,
    },
    // {
    //   fileName: 'server',
    //   language: 'tsx',
    //   code: codeRSC,
    // },
  ],
  githubSlug: 'timeline/timeline.horizontal.tsx',
  component: <Component />,
};
