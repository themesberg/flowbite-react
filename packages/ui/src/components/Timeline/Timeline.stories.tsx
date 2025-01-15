import type { Meta, StoryFn } from "@storybook/react";
import { Avatar } from "../Avatar";
import { Badge } from "../Badge";
import { Card } from "../Card";
import type { TimelineProps } from "./Timeline";
import { Timeline } from "./Timeline";

export default {
  title: "Components/Timeline",
  component: Timeline,
} as Meta;

const Template: StoryFn<TimelineProps> = (args) => <Timeline {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
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
      <Timeline.Item>
        <Timeline.Point />
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
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>April 2022</Timeline.Time>
          <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body>
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </>
  ),
};

export const ActivityLog = Template.bind({});
ActivityLog.args = {
  children: (
    <>
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
    </>
  ),
};
