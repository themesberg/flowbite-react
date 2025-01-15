"use client";

import {
  Avatar,
  Badge,
  Card,
  Timeline,
  TimelineBody,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "flowbite-react";
import { type CodeData } from "~/components/code-demo";

const code = `
"use client";

import { Avatar, Badge, Timeline } from "flowbite-react";

export function Component() {
  <Timeline>
    <Timeline.Item>
      <Timeline.Point
        render={() => (
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded size="xm" />
        )}
      />
      <Timeline.Content>
        <Timeline.Body>
          <Card>
            <div className="-m-2 sm:flex sm:items-center sm:justify-between">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>

              <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                Bonnie moved{" "}
                <a href="#" className="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                  Jese Leos
                </a>{" "}
                to{" "}
                <Badge color="gray" className="inline">
                  Funny Group
                </Badge>
              </div>
            </div>
          </Card>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point
        render={() => (
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="xm" />
        )}
      />
      <Timeline.Content>
        <Timeline.Body>
          <Card>
            <div className="-m-2">
              <div className="mb-3 sm:flex sm:items-center sm:justify-between">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Thomas Lean commented on{" "}
                  <a href="#" className="font-semibold text-gray-900 hover:underline dark:text-white">
                    Flowbite Pro
                  </a>
                </div>
              </div>

              <Card className="border-gray-200 bg-gray-50 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                <div className="-m-3">
                  Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design
                  system! This is the second session of our new webinar series on #DesignSystems discussions where
                  we'll be speaking about Measurement.
                </div>
              </Card>
            </div>
          </Card>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
    <Timeline.Item>
      <Timeline.Point
        render={() => (
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded size="xm" />
        )}
      />
      <Timeline.Content>
        <Timeline.Body>
          <Card>
            <div className="-m-2 sm:flex sm:items-center sm:justify-between">
              <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>

              <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                Jese Leos has changed{" "}
                <a href="#" className="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                  Pricing page
                </a>{" "}
                task status to <span className="font-semibold text-gray-900 dark:text-white">Finished</span>
              </div>
            </div>
          </Card>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
}
`;

export function Component() {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint
          render={() => (
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-3.jpg" rounded size="xm" />
          )}
        />
        <TimelineContent>
          <TimelineBody>
            <Card>
              <div className="-m-2 sm:flex sm:items-center sm:justify-between">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">just now</time>

                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Bonnie moved{" "}
                  <a href="#" className="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                    Jese Leos
                  </a>{" "}
                  to{" "}
                  <Badge color="gray" className="inline">
                    Funny Group
                  </Badge>
                </div>
              </div>
            </Card>
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint
          render={() => (
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded size="xm" />
          )}
        />
        <TimelineContent>
          <TimelineBody>
            <Card>
              <div className="-m-2">
                <div className="mb-3 sm:flex sm:items-center sm:justify-between">
                  <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 hours ago</time>
                  <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                    Thomas Lean commented on{" "}
                    <a href="#" className="font-semibold text-gray-900 hover:underline dark:text-white">
                      Flowbite Pro
                    </a>
                  </div>
                </div>

                <Card className="border-gray-200 bg-gray-50 text-xs font-normal italic text-gray-500 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-300">
                  <div className="-m-3">
                    Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design
                    system! This is the second session of our new webinar series on #DesignSystems discussions where
                    we'll be speaking about Measurement.
                  </div>
                </Card>
              </div>
            </Card>
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint
          render={() => (
            <Avatar img="https://flowbite.com/docs/images/people/profile-picture-1.jpg" rounded size="xm" />
          )}
        />
        <TimelineContent>
          <TimelineBody>
            <Card>
              <div className="-m-2 sm:flex sm:items-center sm:justify-between">
                <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>

                <div className="text-sm font-normal text-gray-500 dark:text-gray-300">
                  Jese Leos has changed{" "}
                  <a href="#" className="font-semibold text-blue-600 hover:underline dark:text-blue-500">
                    Pricing page
                  </a>{" "}
                  task status to <span className="font-semibold text-gray-900 dark:text-white">Finished</span>
                </div>
              </div>
            </Card>
          </TimelineBody>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export const render: CodeData = {
  type: "single",
  code: [
    {
      fileName: "client",
      language: "tsx",
      code,
    },
  ],
  githubSlug: "timeline/timeline.render.tsx",
  component: <Component />,
  iframe: 391,
};
