"use client";

import {
  Avatar,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";
import type { CodeData } from "~/components/code-demo";

const code = `
"use client";

import {
  Avatar,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
  TimelineTime,
  TimelineTitle,
} from "flowbite-react";

export function Component() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint>
          <Avatar rounded size="xs" img="/images/people/profile-picture-1.jpg" />
        </TimelinePoint>
        <TimelineContent>
          <TimelineTime>just now</TimelineTime>
          <TimelineTitle>Bonnie Green uploaded a new file</TimelineTitle>
          <TimelineBody>Flowbite-react.fig was added to the project assets.</TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint>
          <Avatar rounded size="xs" img="/images/people/profile-picture-2.jpg" />
        </TimelinePoint>
        <TimelineContent>
          <TimelineTime>2 hours ago</TimelineTime>
          <TimelineTitle>Jese Leos commented on your post</TimelineTitle>
          <TimelineBody>Looks good to me. The dashboard cards are ready for review.</TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
`;

export function Component() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint>
          <Avatar rounded size="xs" img="/images/people/profile-picture-1.jpg" />
        </TimelinePoint>
        <TimelineContent>
          <TimelineTime>just now</TimelineTime>
          <TimelineTitle>Bonnie Green uploaded a new file</TimelineTitle>
          <TimelineBody>Flowbite-react.fig was added to the project assets.</TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint>
          <Avatar rounded size="xs" img="/images/people/profile-picture-2.jpg" />
        </TimelinePoint>
        <TimelineContent>
          <TimelineTime>2 hours ago</TimelineTime>
          <TimelineTitle>Jese Leos commented on your post</TimelineTitle>
          <TimelineBody>Looks good to me. The dashboard cards are ready for review.</TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export const activityLog: CodeData = {
  type: "single",
  code: {
    fileName: "index",
    language: "tsx",
    code,
  },
  githubSlug: "timeline/timeline.activityLog.tsx",
  component: <Component />,
};
